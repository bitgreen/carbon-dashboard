#!/bin/bash 
cd /usr/src/carbon-dashboard
npx prisma db push --accept-data-loss 
npm run dev
