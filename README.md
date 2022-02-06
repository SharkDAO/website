## Getting Started

Still working out phaser and nextjs support so right now gens a static app using webpack

First, run the development server:

```bash
yarn 
yarn start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


Things to know:
* pages/assets/ - images for use in app
* phaser will use the asset-pack.json in the assets dir to load images 
* uses recoil for state sync between react and phaser
* tailwind is in its infancy
* player is transparent and will be use to navigate up and down with cursors right now

TODO:
* lots, but specficially add good images for the island
* figure out data points to popup
* setup mdx for loading content
* figure out nextjs support if we need that


# When we get to nextjs:
The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## TODO Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
