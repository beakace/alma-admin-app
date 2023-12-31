## Development

Install docker

```
yarn db
yarn db:reset:seed
```

You can edit prisma/seed.ts to add more couples.

Use this to preview the DB:

```
yarn db:show
```

To start the app

```
yarn
yarn dev
```

# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

# Fly Setup

1. [Install `flyctl`](https://fly.io/docs/getting-started/installing-flyctl/)

2. Sign up and log in to Fly

```sh
flyctl auth signup
```

3. Setup Fly. It might ask if you want to deploy, say no since you haven't built the app yet.

```sh
flyctl launch
```

## PostgreSQL database creation

```sh
fly postgres create
```

## Database secret setup

```sh
fly secrets set DATABASE_URL=postgres://{username}:{password}@{hostname}:{port}/{database}?sslmode=disable
```

## Deployment

Before deploying app you should edit `docker-entrypoint.sh` file to include additional commands run during deployment phase.

If you've followed the setup instructions already, all you need to do is run this:

```sh
fly deploy     --build-secret DATABASE_URL=postgres://{username}:{password}@{hostname}:{port}/{database}?sslmode=disable
```

You can run `flyctl info` to get the url and ip address of your server.

Check out the [fly docs](https://fly.io/docs/getting-started/node/) for more information.
