# Round

[![NPM](https://img.shields.io/npm/v/@alvarocastro/round)](https://www.npmjs.com/package/@alvarocastro/round)
[![Build status](https://img.shields.io/github/workflow/status/alvarocastro/round/build)](https://github.com/alvarocastro/round/actions?query=workflow%3Abuild)
[![Maintainability status](https://img.shields.io/codeclimate/maintainability/alvarocastro/round)](https://codeclimate.com/github/alvarocastro/round/maintainability)
[![Coverage status](https://img.shields.io/coveralls/github/alvarocastro/round)](https://coveralls.io/github/alvarocastro/round?branch=master)
[![Bundle size](https://img.shields.io/bundlephobia/min/@alvarocastro/round)](https://bundlephobia.com/result?p=@alvarocastro/round)
[![Code style: XO](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![Release: Semantic](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Round values up to an amount of decimals, avoiding the floating point weirdness of JavaScript.

- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [Support](#support)

## Install

```bash
npm install @alvarocastro/round
```

## Usage

```js
const round = require('@alvarocastro/round');

round(1.005);
// => 1.01
round(2.2222, 1);
// => 1.1
round(3, 5);
// => 3
```

### round(number[, decimals = 2])

Returns the value rounded up to a given amout of decimals.

#### number

Type: `Number`

Value to round.

#### decimals

Type: `Number`<br>
Default: 2

The amount of decimals to round the number to.

## Contributing

Contributions are always welcome! Please run `npm test` beforehand to ensure everything is ok.

## Support

If you use this package please consider starring it :)
