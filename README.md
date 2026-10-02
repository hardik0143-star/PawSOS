# PawWing SOS v5.2 — Animal & Bird Rescue Network

PawWing SOS is an installable static Progressive Web App (PWA) for animal and bird emergency discovery, rescue first-response education, everyday care, and source-backed contact lookup across the current 10-country release: India, USA, UK, Brazil, China, Russia, Mexico, Japan, Germany and Argentina.

## What is new in v5.2

- Brand remains **PawWing SOS — Animal & Bird Rescue Network**. Existing browser storage identifiers are intentionally retained so upgrades do not wipe saved local data.

- Expanded source-backed starter directory with additional current vet, rescue, shelter, pet-shop, avian and wildlife listings across all 10 supported countries; new records include a `checked` date.
- Added one-tap **live Google Maps category discovery** for vets, rescuers, shelters and shops in any typed city, including bird-specific searches in Bird Help. This provides a fallback for regions not yet preloaded.
- Care Academy rebuilt as substantial expandable mini-guides with warning signs, practical steps and direct references to WSAVA, ASPCA, Merck Veterinary Manual and the Association of Avian Veterinarians.
- Simplified the supported animal menus and care logic by removing the two species requested by the project owner.
- Improved directory and academy UI for faster scanning on mobile.

- Separate **Animal Help** and **Bird Help** emergency directories.
- Bird-specific starter contacts: avian/exotic vets, bird/wildlife rescuers, bird medical aid and bird shops where reliable public contact information was available.
- Bird rescue plan for collision/stunning, bleeding, cat/dog attacks, manja/thread entanglement, breathing/weakness and baby birds.
- Bird feeding and grooming guidance, plus Bird Care Academy cards and Assistant responses.
- Country-aware **Emergency Helplines** panel. India prominently shows **1962**, with an explicit note that state activation, service scope and hours vary.
- Google Maps action on every directory card, plus a bird-specialist map search for cities without preloaded specialist coverage.
- Donation page that sends donors to organisations' official websites; PawWing SOS does not collect payment details.
- Administrator-only local edit/delete functions.
- Install button and PWA support for mobile/desktop browsers.
- Service-worker update detection with an in-app **Update now** banner when a newer deployed build is available.

## Administrator login

- Login ID: `admin`
- Password: `administrator@123`

The password is compared against a SHA-256 digest in the browser. **Important security limitation:** this is a static web application. A technically skilled user with the site files/browser tools can bypass client-side controls. The admin edits/deletions are stored only in that browser's local storage. For genuinely secure multi-user administration, audit history, centrally shared edits and role-based access control, move the directory to a backend/database with server-side authentication.

## Data model and verification

Preloaded records carry a source URL and are labelled **Source-backed record**, not “guaranteed currently open”. Emergency numbers, hours and service areas can change. Users should confirm availability when possible before travel. Community additions are clearly marked **Community-added** until a later cloud moderation workflow is implemented.

For Bird Help, public map data often does not state whether a veterinarian treats birds. Live results therefore tell the user to confirm avian capability before travelling. Curated avian/bird records are kept separate for emergency clarity.

## Install and updates

Host these files over HTTPS (for example on Vercel, Netlify, GitHub Pages or another static host). The browser can then install PawWing SOS as a PWA. The service worker checks the deployed files and the app checks periodically for a new service worker. When a newer build is installed and waiting, PawWing SOS shows an **Update now** banner.

The PWA cannot silently replace code while someone is using it; the update button activates the new service worker and reloads to the new version. This avoids interrupting an emergency lookup.

## Deploy to Vercel

All required files are kept in one folder:

- `index.html`
- `styles.css`
- `app.js`
- `manifest.json`
- `sw.js`
- `icon.svg`
- `README.md`

Upload the folder contents to a GitHub repository and import the repository into Vercel as a static project. No Node build step is required.

## Donation safety

PawWing SOS v5.2 does not process donations. Donation cards open the selected organisation's official website in a new tab. This avoids PawWing SOS storing payment card, UPI or banking details.

## Medical / rescue disclaimer

PawWing SOS offers educational first-response information, not diagnosis, treatment or a substitute for a veterinarian, avian veterinarian, trained wildlife rehabilitator or emergency authority. Wild birds can carry infectious disease; avoid unnecessary bare-hand contact with sick/dead wildlife and follow local public-health/wildlife guidance.

## Credit

**Concept & Created by Hardik Desai**

With love and inspiration from **Nishiv Desai & Rudra Desai ❤️**

> Helping paws. Saving lives. Caring every day.

## Directory freshness

Local business phone numbers, hours and service scope can change. Curated records are source-backed and newly added v5.2 listings include a last-checked date, but users should still call before travel. Live Google Maps discovery is intentionally available for every typed city so PawWing SOS does not pretend a static database can remain exhaustive worldwide.
