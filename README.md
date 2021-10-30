# vector

2D and 3D Vector classes for game development and physics simulations.

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
import { Vector2D, Vector3D } from '@coderosh/vector'

/* 3D Vector */
new Vector3D(1, 4, 1)

/* 2D Vector */
new Vector2D(1, 3)
```

## Available methods

- [add](#add) - 2D and 3D
- [sub](#sub) - 2D and 3D
- [scale](#scale) - 2D and 3D
- [lerp](#lerp) - 2D and 3D
- [slerp](#slerp) - 3D only
- [nlerp](#nlerp) - 2D and 3D
- [lenSqr](#lenSqr) - 2D and 3D
- [len](#len) - 2D and 3D
- [dist](#dist) - 2D and 3D
- [normalize](#normalize) - 2D and 3D
- [equals](#equals) - 2D and 3D
- [copy](#copy) - 2D and 3D
- [dot](#dot) - 2D and 3D
- [cross](#cross) - 3D only

## Documentation

### add

Adds two vectors

```js
const vec3d = new Vector3D(1, 2, 3)
vec3d.add(4, 5, 6)
vec3d.add(new Vector3D(4, 5, 6))

const vec2d = new Vector2D(1, 2)
vec2d.add(4, 5)
vec2d.add(new Vector2D(4, 5))
```

### sub

Substracts two vectors

```js
const vec3d = new Vector3D(1, 2, 3)
vec3d.sub(4, 5, 6)
vec3d.sub(new Vector3D(4, 5, 6))

const vec2d = new Vector2D(1, 2)
vec2d.sub(4, 5)
vec2d.sub(new Vector2D(4, 5))
```

### scale

Multiply a vector by a scalar factor

```js
const vec3d = new Vector3D(1, 2, 3)
vec3d.scale(2)

const vec2d = new Vector2D(1, 2)
vec2d.scale(2)
```

### lenSqr

Square of length of vector

```js
const vec3d = new Vector3D(1, 2, 3)
vec3d.lenSqr()

const vec2d = new Vector2D(1, 2)
vec2d.lenSqr()
```

### len

Length of vector

```js
const vec3d = new Vector3D(1, 2, 3)
vec3d.len()

const vec2d = new Vector2D(1, 2)
vec2d.len()
```

### normalize

Normalize the vector

```js
const vec3d = new Vector3D(1, 2, 3)
vec3d.normalize()

const vec2d = new Vector2D(1, 2)
vec2d.normalize()
```

### dist

Calculate distance between two vectors

```js
const vec3d = new Vector3D(1, 2, 3)
vec3d.dist(5, 2, 3)
vec3d.dist(new Vector3D(5, 2, 3))

const vec2d = new Vector2D(1, 2)
vec2d.dist(5, 2)
vec2d.dist(new Vector2D(5, 2))
```

### equals

Check if two vectors have same coordinates

```js
const vec3d = new Vector3D(1, 2, 3)
vec3d.equals(1, 2, 3)
vec3d.equals(new Vector3D(1, 2, 3))

const vec2d = new Vector2D(1, 2)
vec2d.equals(1, 2)
vec2d.equals(new Vector2D(1, 2))
```

### dot

Returns dot product of two vectors

```js
const vec3d = new Vector3D(1, 2, 3)
vec3d.dot(1, 1, 2)
vec3d.dot(new Vector3D(1, 1, 2))

const vec2d = new Vector2D(1, 2)
vec2d.dot(4, 2)
vec2d.dot(new Vector2D(4, 2))
```

### cross

Returns cross product of two vectors

```js
const vec = new Vector3D(1, 2, 3)
vec.cross(1, 2, 4)
vec.cross(new Vector3D(1, 2, 4))
```

### lerp

Linear interpolate vectors

```js
const vec3d = new Vector3D(1, 2, 3)
vec3d.lerp(1, 1, 2, 0.1)
vec3d.lerp(new Vector3D(1, 1, 2), 0.1)

const vec2d = new Vector2D(1, 2)
vec2d.lerp(4, 2, 0.1)
vec2d.lerp(new Vector2D(4, 2), 0.1)
```

### slerp

Spherical linear interpolate vectors

```js
const vec = new Vector3D(1, 0, 0)
vec.slerp(new Vector3D(0, 1, 0), 0.5)
vec.slerp(0, 1, 0, 0.5)
```

### nlerp

Linear interpolate vectors and normalize

```js
const vec3d = new Vector3D(1, 2, 3)
vec3d.nlerp(1, 1, 2, 0.1)
vec3d.nlerp(new Vector3D(1, 1, 2), 0.1)

const vec2d = new Vector2D(1, 2)
vec2d.nlerp(4, 2, 0.1)
vec2d.nlerp(new Vector2D(4, 2), 0.1)
```

### copy

```js
const vec3d = new Vector3D(1, 2, 3)
const newVec3d = vec3d.copy()
const newVec3d_ = new Vector(vec3d)

const vec2d = new Vector3D(1, 2, 3)
const newVec2d = vec2d.copy()
const newVec2d_ = new Vector(vec2d)
```

## LICENSE

MIT
