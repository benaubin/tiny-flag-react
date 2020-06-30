# Tiny Flag React

Display country flags in less than 1KB with the magic of unicode (with graceful fallbacks).

Displays emoji by default, when not supported, falls back to an image tag.

[DEMO](https://codesandbox.io/s/country-flags-wz5g7?fontsize=14&hidenavigation=1&theme=dark)

## Install

```sh
npm i --save tiny-flag-react
yarn add tiny-flag-react
```

## Usage

```js
import TinyFlag from "tiny-flag";

<TinyFlag
  country="US" // ISO 3166-1 alpha-2 code
  alt="United States Flag" // Used as the image alt tag
  fallbackImageURL="https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/US.svg" // Used when emoji flags are not supported.
/>;
```

[DEMO](https://codesandbox.io/s/country-flags-wz5g7?fontsize=14&hidenavigation=1&theme=dark)

## Recommended Fallback Images

Goes well with [FlagKit](https://github.com/madebybowtie/FlagKit.git) and Webpack's
[file-loader](https://webpack.js.org/loaders/file-loader/) for fallback images:

```sh
npm i --save https://github.com/madebybowtie/FlagKit.git
yarn add https://github.com/madebybowtie/FlagKit.git
```

```js
let country = "US";
let countryName = "United States";

<TinyFlag
  country={country}
  countryName={countryName}
  fallbackImageURL={require("FlagKit/Assets/SVG/" + country + ".svg").default}
>
```
