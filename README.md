# Round
[![NPM](https://img.shields.io/npm/v/@alvarocastro/round.svg)](https://www.npmjs.com/package/@alvarocastro/round)
[![Build Status](https://travis-ci.org/alvarocastro/round.svg?branch=master)](https://travis-ci.org/alvarocastro/round)
[![codebeat badge](https://codebeat.co/badges/9451ded5-f5f8-44e1-9894-d627b2fc1a7c)](https://codebeat.co/projects/github-com-alvarocastro-round-master)
[![Coverage Status](https://coveralls.io/repos/github/alvarocastro/round/badge.svg?branch=master)](https://coveralls.io/github/alvarocastro/round?branch=master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

Round values up to an amount of decimals, avoiding the floating point weirdness of JavaScript.

- [Install](#install)
- [Usage](#usage)

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
