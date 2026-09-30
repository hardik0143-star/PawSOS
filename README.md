# PawSOS India v2

A mobile-first, installable static web app for animal rescue and everyday pet care.

## What is included
- India-only animal help directory with the source-backed contacts from PawSOS v1.1
- Multiple phone numbers per listing
- Search/filter by state, city, category, 24/7 and saved contacts
- Live public-map lookup for vets, rescuers, shelters and pet shops
- Add missing local contacts (stored locally, marked unverified)
- Found-an-animal guided rescue flow
- Emergency first-response modal
- My Pet profiles
- Vaccination/deworming/grooming/medication reminders
- Daily wellness check-ins
- “Can my pet eat this?” food-safety checker
- Grooming coach for dogs and cats
- Short care academy
- PawSOS smart assistant (offline rules-based guidance; no medical diagnosis)
- Trusted official update links
- PWA manifest + service worker for installability/offline shell

## Run
Open `index.html`, or serve the folder with any static host.

## Vercel
Upload all files in this folder to the root of a GitHub repository and import that repository in Vercel.
No npm install or build command is required.

## Important production note
This version is front-end only. User-added contacts, pet profiles, reminders and check-ins are stored in the browser using localStorage. To make community contacts available to all users, connect a shared backend/database and moderation workflow.

## Safety
Food, grooming and care information is educational. It is not a veterinary diagnosis or a substitute for professional veterinary advice.
