This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Map configuration

The location map uses Carto's dark tiles when `NEXT_PUBLIC_CARTO_API_KEY` is
configured. Create a local `.env.local` file (which is ignored by Git) with:

```env
NEXT_PUBLIC_CARTO_API_KEY=your_carto_api_key
```

Restart the development server after changing environment variables. In Vercel,
add the same variable under the appropriate Environment setting
(Development, Preview, or Production), then redeploy. `NEXT_PUBLIC_` variables
are included in the browser bundle, so this key must be restricted in Carto to
your website's allowed domains and usage limits. It should not be treated as a
server-only secret.

If the variable is not available, the map automatically uses OpenStreetMap
tiles instead of requesting Carto tiles without a key.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
