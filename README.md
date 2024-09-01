#### ⚡️ ollescribe

- [svelte](https://kit.svelte.dev/) boilerplate by lé for bundling an [ollesvege](https://github.com/lefrost/ollesvege) component into a single IIFE .js file usable in an [ollesvelke](https://github.com/lefrost/ollesvelke) frontend (or any frontend project if placement is tweaked accordingly).
- ie. convert a `/component/lib` directory into a `component.iife.js` file (+ `component.iife.js.map`) that can be used in a `<script />` import. usage steps below:
- `npm i`, paste contents of component `/src/lib` folder into `/src/lib`, add `bundler.js` and `vite.config.js` based on `bundler-example.js` and `vite-example.config.js`, update template `ollesvege` variables in `bundler.js` and `vite.config.js`, and `npm run build`.
- before building, you'll need to install modules used in your component as dev dependencies within ollescribe, ie. `npm i -D ...`.
- builds `/dist > (your-component-name).iife.js, (your-component-name).iife.js.map` directory.
- in the generated `.js` file, if your component has any parameters (ie. `export let...`, eg. `<script data-api-key="..." />`), replace any empty assignments in the `.js` file with document.currentScript assignments, eg. `let{api_key:p=""}` turns into `let{api_key:p=document.currentScript.getAttribute('data-api-key')}`.
- copy the generated `.js` and `.js.map` files over to your frontend's `/static/js` directory. update the `.js` file name as you like.
- in your frontend's `src/routes/+layout.svelte` (or a specific page), add `<script defer src="../../static/js/(your-component-filename)" …any parameters…></script>` in a `<svelte:head>` injection. this is done in a `.svelte` file rather than eg. `index.html` so your `VITE_...` env variables can be accessed.
- in your frontend's `src/app.html` file, add `<div id="(your-component-name)"></div>` in the `<body>`, the `id` set here should be consistent with the query selector `id` referenced inside the `.js` file, eg. `document.querySelector("#ollesvege");`.