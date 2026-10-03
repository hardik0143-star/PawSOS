# PawWing SOS v5.3.1 — Shared Cloud Directory

**PawWing SOS — Animal & Bird Rescue Network**

This release upgrades the v5.2 static directory into a shared cloud-backed rescue directory while preserving the built-in emergency contacts as an offline fallback.

## What changed

- Shared central contact database using Supabase/Postgres.
- All 197 v5.2 approved starter contacts are included in `supabase/setup.sql`.
- Public users can read approved contacts but cannot directly edit them.
- “Add missing contact” now submits a contact for administrator review.
- Administrator can approve/reject submissions and edit/delete/restore shared contacts.
- Approved admin changes become visible to every PawWing SOS user after sync.
- Browser clients refresh the shared directory on launch, when returning online, when the app becomes active again, and periodically while open.
- Last synced contacts are cached locally; the built-in directory remains available if the cloud is unavailable.
- Server-side admin session cookie is HttpOnly + SameSite=Strict.
- Admin actions are recorded in an `audit_log` table.
- API responses are not cached by the PWA service worker.
- PWA cache/version upgraded to v5.3.1.

## Administrator login

Requested default credentials:

- Login ID: `admin`
- Password: `administrator@123`

The browser no longer validates this password. Validation happens in the server-side API. The default password is represented by a scrypt salt/hash in `server/auth.js`.

**Before a public launch, change the password.** Generate a replacement:

```bash
npm run generate-admin-hash -- "your-new-password"
```

Then add the generated `ADMIN_PASSWORD_SALT` and `ADMIN_PASSWORD_HASH` to Vercel Environment Variables.

## One-time cloud setup

### 1. Create a Supabase project

Create a project and wait for its Postgres database to become ready.

### 2. Create and seed PawWing SOS tables

Open **Supabase → SQL Editor**, copy the entire contents of:

`supabase/setup.sql`

and run it once.

It creates:

- `contacts`
- `contact_submissions`
- `audit_log`

It also seeds the 197 approved v5.2 starter contacts. The seed uses `ON CONFLICT DO NOTHING`, so re-running it will not overwrite later admin edits.

### 3. Add Vercel Environment Variables

In the PawWing SOS Vercel project add:

```text
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVER_ONLY_SERVICE_ROLE_KEY
ADMIN_USERNAME=admin
```

Optional but recommended:

```text
SESSION_SECRET=a-long-random-secret
```

If `SESSION_SECRET` is omitted, the server derives its session-signing key from the Supabase service-role secret.

**Never put `SUPABASE_SERVICE_ROLE_KEY` in `app.js`, HTML, GitHub screenshots, or a `NEXT_PUBLIC_` variable. It must stay server-side.**

### 4. Deploy

Upload this complete folder to GitHub and import it into Vercel. Keep the project root at this folder. The project is configured for Node.js 24.x.

After deployment, visit:

`/api/health`

A correctly configured release should return JSON containing:

```json
{"configured":true,"mode":"cloud"}
```

Then open PawWing SOS. The Help page should show a green **Shared directory live** badge.

## Directory workflow

### Public user

1. Opens Help.
2. PawWing loads approved contacts from the central database.
3. If the database cannot be reached, PawWing uses the last synced copy or the built-in starter directory.
4. A missing contact can be submitted through **+ Add missing contact**.
5. The submitted record stays pending until the administrator reviews it.

### Administrator

1. Footer → **Admin**.
2. Log in.
3. Review pending community submissions.
4. Approve or reject them.
5. Edit existing shared records or soft-delete them.
6. Deleted records can be restored.
7. Actions are written to `audit_log`.

## Project structure

```text
index.html
styles.css
app.js
manifest.json
sw.js
icon.svg
package.json
vercel.json
.env.example
api/
  health.js
  contacts.js
  submissions.js
  admin-login.js
  admin-logout.js
  admin-session.js
  admin-contacts.js
  admin-submissions.js
server/
  auth.js
  contact.js
  db.js
  http.js
supabase/
  setup.sql
  seed-contacts.json
scripts/
  check-project.mjs
  generate-admin-hash.mjs
```

## Validation performed

- JavaScript syntax checks for frontend, service worker, server helpers and API routes.
- Project structure/manifest check.
- 197 seed records checked for unique IDs, supported countries, domains and categories.
- Requested admin credential verified against server-side scrypt hash.
- Signed admin session creation/verification tested.
- `/api/health`, admin login and session handlers unit-tested with a mocked Supabase response.
- Frontend offline-fallback flow executed in an in-memory Chromium page: 69 India animal contacts rendered and Bird mode rendered 21 contacts without page errors.
- Frontend cloud flow executed with mocked API responses: cloud contacts replaced the fallback, Bird mode switched correctly, admin login opened the cloud admin page and pending submissions rendered.
- Localhost/file navigation is blocked by the execution environment’s browser administrator policy, so browser tests were run in-memory instead of against a local URL.

## Important operational note

Emergency-contact data changes over time. Cloud administration makes corrections much easier, but PawWing SOS should still periodically re-check phone numbers, operating hours and organisation status against official or first-party sources.
