#### ⚡️ ollescribe

- [svelte](https://kit.svelte.dev/) boilerplate by lé for bundling an [ollesvege](https://github.com/lefrost/ollesvege) component into a single IIFE .js file usable in an [ollesvelke](https://github.com/lefrost/ollesvelke) frontend.
- ie. convert a `/component/lib` directory into a `component.js` file (+ `component.js.map`) that can be used in a `<script />` import. usage steps below:
- `npm i`, paste contents of component `/src/lib` folder into `/src/lib`, add `bundler.js` based on `bundler-example.js`, update template `ollesvege` variables in `bundler.js` and `vite.config.js`, and `npm run build`.
- before building, you'll need to install modules used in your component as dev dependencies within ollescribe, ie. `npm i -D ...`.
- builds `/dist > component.js, component.js.map` directory.
- in `component.js`, if your component any parameters (ie. `export let...`, eg. `<script data-api-key="..." />`), replace any empty assignments in the `.js` file with document.currentScript assignments, eg. `let{api_key:p=""}` turns into `let{api_key:p=document.currentScript.getAttribute('data-api-key')}`.
- copy the generated `.js` and `.js.map` files over to your frontend's `/static/js` directory.
- in your frontend's `src/app.html` file, add `<script defer src="../static/js/(your-component-name).js" …any parameters…></script>` in the `<head>`, and add `<div id="(your-component-name)"></div>` in the `<body>`.
- the `id` set here should be consistent with the query selector `id` referenced inside the `.js` file, eg. `document.querySelector("#ollesvege");`.