# Getting Started with @pezeshk-book/ui-kit

This project was built by tailwind for React and Next.js projects.

## Learn More

You can check the storybook in the [pbkit.pezeshkbook.com](https://pbkit.pezeshkbook.com).

## Installing

using npm:

```bash
npm install --save @pezeshk-book/ui-kit
```

## React Js Config

Add the Tailwind directives to your CSS global

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Next Js Config

Add the Tailwind directives to your global.css

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

tailwind.config will be generated automatically

for more configs you can visit - [tailwind Documentation](https://tailwindcss.com/docs/installation)

## Add Your Own Fonts

in your tailwind.config.js file there are 4 types of font (light, regular, medium and bold) which will be use in Text component.\
the type props in Text component will handle these 4 fonts.\
\

### Change Package Font in React.JS & Next.Js

first you need to create a folder named fonts in your public directory.\
add these lines of code in your CSS global

```bash
@font-face {
  font-family: 'fontMedium';
  src: url('{relative path to your added font}') format('truetype');
  font-display: swap;

}

@font-face {
  font-family: 'fontRegular';
  src: url('{relative path to your added font}') format('truetype');
  font-display: swap;

}

@font-face {
  font-family: 'fontBold';
  src: url('{relative path to your added font}') format('truetype');
  font-display: swap;

}

@font-face {
  font-family: 'fontLight';
  src: url('{relative path to your added font}') format('truetype');
  font-display: swap;
}
```

and you are ready to go, just like that (^_^)
