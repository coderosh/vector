# vector

A 2D/3D `Vector` class for game development and physics simulations.

<a href="https://www.npmjs.com/package/@coderosh/vector"><img alt="NPM" src="https://img.shields.io/npm/v/@coderosh/vector" /></a>
<a href="https://github.com/coderosh/vector"><img alt="MIT" src="https://img.shields.io/badge/license-MIT-blue.svg" /></a>
<a href="#"><img alt="CI" src="https://img.shields.io/github/workflow/status/coderosh/vector/CI"></a>
<a href="https://github.com/coderosh/vector"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" /></a>
<a href="https://github.com/coderosh/vector"><img src="https://img.shields.io/badge/types-typescript-blue.svg" alt="Typescript" /></a>

## Installation

Install via npm

```sh
npm install @coderosh/vector
```

Or via yarn

```sh
yarn add @coderosh/vector
```

## Usage

```js
const Vector = require('@coderosh/vector')
// OR import Vector from '@coderosh/vector'

/* 3D Vector */
new Vector(1, 4, 1)

/* 2D Vector */
new Vector(1, 3)
```

## Available methods

- [add](#add)
- [sub](#sub)
- [scale](#scale)
- [lerp](#lerp)
- [slerp](#slerp)
- [nlerp](#nlerp)
- [lenSqr](#lenSqr)
- [len](#len)
- [dist](#dist)
- [normalize](#normalize)
- [equals](#equals)
- [copy](#copy)
- [dot](#dot)
- [cross](#cross)

## Documentation

### add

Adds two vectors

```js
const vec = new Vector(1, 2, 3)

vec.add(4, 5, 6) // (5, 7, 9)

// OR
vec.add(new Vector(4, 5, 6)) // (5, 7, 9)
```

### sub

Substracts two vectors

```js
const vec = new Vector(0, 5, 6)

vec.sub(1, 2, 3) // (-1, 3, 3)
vec.sub(new Vector(1, 2, 3)) // (-1, 3, 3)
```

### scale

Multiply a vector by a scalar factor

```js
const vec = new Vector(1, 2, 3)

vec.scale(3) // (3, 6, 9)
```

### lenSqr

Square of length of vector

```js
const vec = new Vector(2, 2, 1)

vec.lenSqr() // 9
```

### len

Length of vector

```js
const vec = new Vector(2, 2, 1)

vec.len() // 3
```

### normalize

Normalize the vector

```js
const vec = new Vector(5, 2, 4)

vec.normalize()
vec.len() // 1
```

### dist

Calculate distance between two vectors

```js
const vec = new Vector(1, 2, 3)

vec.dist(1, 2, 4) // 1

// OR
vec.dist(new Vector(1, 2, 4)) // 1
```

### equals

Check if two vectors have same coordinates

```js
const vec = new Vector(1, 2, 3)

vec.equals(new Vector(1, 2, 3)) // true

// OR
vec.equals(1, 2, 3) // true
```

### dot

Returns dot product of two vectors

```js
const vec = new Vector(1, 2, 3)

vec.dot(1, 1, 2) // 9

// OR
vec.dot(new Vector(1, 1, 2)) // 9
```

### cross

Returns cross product of two vectors

```js
const vec = new Vector(1, 2, 3)

vec.cross(1, 2, 4) // (2, -1, 0)

// OR
vec.cross(new Vector(1, 2, 4)) // (2, -1, 0)
```

### lerp

Linear interpolate vectors

```js
const vec = new Vector(1, 2, 3)

vec.lerp(new Vector(4, 1, 4), 0.1) // (1.3, 1.9, 3.1)

// OR
vec.lerp(4, 1, 4, 0.1) // (1.3, 1.9, 3.1)
```

### slerp

Spherical linear interpolate vectors

```js
const vec = new Vector(1, 0, 0)
vec.slerp(new Vector(0, 1, 0), 0.5) // (0.707..., 0.707..., 0)

// OR
vec.slerp(0, 1, 0, 0.5) // (0.707..., 0.707..., 0)
```

### nlerp

Linear interpolate vectors and normalize

```js
const vec = new Vector(1, 0, 0)
vec.nlerp(new Vector(0, 1, 0), 0.5) // (0.707..., 0.707..., 0)

// OR
vec.nlerp(0, 1, 0, 0.5) // (0.707..., 0.707..., 0)
```

### copy

```js
const vec = new Vector(1, 2, 3)

const newVec = vec.copy() // (1, 2, 3)

// OR
const newVec = new Vector(vec) // (1, 2, 3)
```

## LICENSE

MIT
