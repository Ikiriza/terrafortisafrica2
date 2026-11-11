# TerraFortis Africa – Website

TerraFortis Africa (TFA) is dedicated to delivering innovative, sustainable, and green solutions that improve livelihoods, build wealth in rural Africa, and protect the environment. This website presents who we are, what we do, and how to work with us.

## Who we are

- Vision: To be a premier consultancy and development firm of excellence, promoting innovative, sustainable, and green solutions for improved livelihoods and wealth creation in rural Africa.
- Mission: To enhance agricultural productivity, sustainable land management, and environmental conservation by promoting Conservation Agriculture (CA) principles and Sustainable Agricultural Mechanization (SAM) technologies across Africa.
- Core values: Performance and Service Orientation. Partnerships and Collaboration. Knowledge and Information Management. Regionality and Environmental Concern. Integrity, Transparency, and Accountability.

## What you’ll find on the site

- **Home** – parallax hero, who we are, focus areas, services overview, Conservation Agriculture principles, mechanization, vision, how we work, who we work with.
- **About** – who we are, vision & mission, core values, key figures and leadership team.
- **Services** – seven service lines with deliverables, our process and FAQ.
- **Our Work** (`/portfolio`) – filterable programme areas and our impact pathway.
- **Contact** – contact channels, enquiry form (opens the visitor’s email app), map and FAQ.

## Editing content

Almost all text lives in **`lib/site.ts`** – contact details, services, core values, team, stats, FAQ, programme areas and image URLs. Edit that one file and every page updates.

- **Team photos:** put a square photo in `public/team/` (e.g. `robert-gensi.jpg`) and add `image: "/team/robert-gensi.jpg"` to that person in `team`. Without a photo an initials card is shown.
- **Photos:** the site uses free Unsplash photography. Replace any URL in `images` with your own project photos (put them in `public/images/` and use `"/images/your-photo.jpg"`).
- **Colours & fonts:** design tokens are at the top of `app/globals.css` (forest green, leaf green, harvest gold, cream). Fonts are Fraunces (headings) and Plus Jakarta Sans (body), set in `app/layout.tsx`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Contact

- Email: terrafortisafrica@terrafortisafrica.org
- Phone: +256 752 400 721 · Kampala, Uganda
- Website: https://www.terrafortisafrica.org (update when deployed)
- Social profiles: Add links here if desired.

---
