# Live Demo

https://plaza-aptitude-test-fe952e106cd4.herokuapp.com/

# Database

view saved data at https://plaza-aptitude-test-fe952e106cd4.herokuapp.com/data

# Running locally

Add .env file to root with

OPENAI_API_KEY=your_api_key

DATABASE_URL="your_postgresql_database_url"

# Welcome to Remix + Vite!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/guides/vite) for details on supported features.

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
