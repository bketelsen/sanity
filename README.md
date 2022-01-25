# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

https://tailwind.ink?p=10.f9fafbf0f1f3d9dbdfb7bbc28f959f6e7582555e6e3e4859283242131f30fff6f6ffefeff9d3d3eaa6a6e56d6dd93c3ebd0e0f930705680605470201fff8f1fbecdff6d7bfe5ad8bd67a4ac4540b9c43037137074a27022c1b01fdfdeafdf6bef5e27bd9bd2fb6930d967100805501643e02422a00271a00f3faf7daf5ebb6e5d385c8ac3ca773108835016d00005301003906072408edfafad5f5f6aae7ea69c8ce13a2ad0d828d05687406505c04374401222ff4faffe2f0ffc4defe95bbee5e95e42173e61358cc1242a21a2e6c161d38f5f8ffe5edffccdafca5b8e97c91e15c69e94a46e13a31b9282284191452faf9fff1effedcd7fcbcb2f29e86e5895ddb8335c86620a948147b2f0d4dfff5fbfdeaf5fbd2e9e9a7ccde6ea8d53485b9026390084c5e1734301820
