## Bitgreen Dashboard

https://bitgreen.org/

A dashboard monitoring the energy usage and carbon emissions of the Polkadot ecosystem. Providing real-time updates for anyone to explore the relaychain and various parachains.

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Emission analysis is conducted through aggregation of geolocation, grid efficiency and average compuatation data provided by parachain operators.

Update DATABASE_URL in .env to connect your postgres database

To set up the cron job, provide Github secrets with the relevant POSTGRES_PASSWORD and DATABASE_URL

To ensure robust database security throughout the dashboard, /api/ endpoints are passed down through getStaticProps, Prisma is never directly used on the client, all database interactions happen using server-side NodeJS code. To prevent reentrancy attacks, a random nonce is generated and signed each time parachain/DApp information is updated.

This is a [Next.js](https://nextjs.org/) project developed by [Offsetra](https://offsetra.com/).
