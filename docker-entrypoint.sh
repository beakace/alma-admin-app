#!/bin/bash

if [ -z "$DATABASE_URL" ]; then
  echo "ERROR: missing DATABASE_URL environment variable."
  exit 1
fi

# Run any commands here that need to be run before the app is started.
# npx prisma db seed  
