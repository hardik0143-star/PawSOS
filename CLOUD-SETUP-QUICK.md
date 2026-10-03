# PawWing SOS Cloud Setup — 4 Steps

1. **Create Supabase project.**
2. **Supabase SQL Editor:** run `supabase/setup.sql`.
3. **Vercel Environment Variables:** add `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, and `ADMIN_USERNAME=admin`.
4. **Redeploy** and open `/api/health`. Confirm `"configured": true`.

Default requested admin login: **admin / administrator@123**.

For a public launch, change the default password using:

`npm run generate-admin-hash -- "new-password"`
