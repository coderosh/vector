const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max)

class Vector {
  public x: number
  public y: number
  public z: number

  constructor(vec: Vector)
  constructor(x?: number, y?: number, z?: number)
  constructor(x: any = 0, y: number = 0, z: number = 0) {
    if (x instanceof Vector) {
      this.x = x.x
      this.y = x.y
      this.z = x.z
    } else {
      this.x = x
      this.y = y
      this.z = z
    }
  }

  add(vec: Vector): Vector
  add(x: number, y: number, z?: number): Vector
  add(x: any = 0, y: number = 0, z: number = 0): Vector {
    if (x instanceof Vector) return this.add(x.x, x.y, x.z)
    this.x += x
    this.y += y
    this.z += z
    return this
  }

  sub(vec: Vector): Vector
  sub(x: number, y: number, z?: number): Vector
  sub(x: any = 0, y: number = 0, z: number = 0): Vector {
    if (x instanceof Vector) return this.sub(x.x, x.y, x.z)
    this.x -= x
    this.y -= y
    this.z -= z
    return this
  }

  scale(n: number) {
    this.x *= n
    this.y *= n
    this.z *= n
    return this
  }

  lenSqr() {
    const { x, y, z } = this
    return x * x + y * y + z * z
  }

  len() {
    return Math.sqrt(this.lenSqr())
  }

  normalize() {
    const len = this.len()
    len !== 0 && this.scale(1 / len)
    return this
  }

  dist(vec: Vector): number
  dist(x: number, y: number, z?: number): number
  dist(x: any = 0, y: number = 0, z: number = 0): number {
    if (x instanceof Vector) return x.copy().sub(this).len()
    return this.dist(new Vector(x, y, z))
  }

  equals(vec: Vector): boolean
  equals(x: number, y: number, z?: number): boolean
  equals(x: any = 0, y: number = 0, z: number = 0): boolean {
    if (x instanceof Vector) return this.equals(x.x, x.y, x.z)
    return this.x === x && this.y === y && this.z === z
  }

  dot(vec: Vector): number
  dot(x: number, y: number, z?: number): number
  dot(x: any = 0, y: number = 0, z: number = 0): number {
    if (x instanceof Vector) return this.dot(x.x, x.y, x.z)
    return this.x * x + this.y * y + this.z * z
  }

  // https://www.geeksforgeeks.org/program-dot-product-cross-product-two-vector
  cross(vec: Vector): Vector
  cross(x: number, y: number, z?: number): Vector
  cross(x: any = 0, y: number = 0, z: number = 0): Vector {
    if (x instanceof Vector) return this.cross(x.x, x.y, x.z)
    return new Vector(
      this.y * z - this.z * y,
      this.z * x - this.x * z,
      this.x * y - this.y * x
    )
  }

  // https://keithmaggio.wordpress.com/2011/02/15/math-magician-lerp-slerp-and-nlerp
  lerp(vec: Vector, percent?: number): Vector
  lerp(x: number, y: number, z?: number, percent?: number): Vector
  lerp(x: any = 0, y: number = 0, z: number = 0, percent = 0.5): Vector {
    if (x instanceof Vector) return this.lerp(x.x, x.y, x.z, y || 0.5)
    this.x += percent * (x - this.x)
    this.y += percent * (y - this.y)
    this.z += percent * (z - this.z)
    return this
  }

  slerp(vec: Vector, percent?: number): Vector
  slerp(x: number, y: number, z?: number, percent?: number): Vector
  slerp(x: any = 0, y: number = 0, z: number = 0, percent = 0.5): Vector {
    if (!(x instanceof Vector)) return this.slerp(new Vector(x, y, z), percent)
    let dot = this.dot(x)
    dot = clamp(dot, -1, 1)
    const theta = Math.acos(dot) * (y || 0.5)
    const relativeVec = x.copy().sub(this.copy().scale(dot))
    relativeVec.normalize()
    this.x = this.x * Math.cos(theta) + relativeVec.x * Math.sin(theta)
    this.y = this.y * Math.cos(theta) + relativeVec.y * Math.sin(theta)
    this.z = this.z * Math.cos(theta) + relativeVec.z * Math.sin(theta)
    return this
  }

  nlerp(vec: Vector, percent?: number): Vector
  nlerp(x: number, y: number, z?: number, percent?: number): Vector
  nlerp(x: any = 0, y: number = 0, z: number = 0, percent = 0.5) {
    if (!(x instanceof Vector)) return this.nlerp(new Vector(x, y, z), percent)
    return this.lerp(x, y || 0.5).normalize()
  }

  copy() {
    return new Vector(this)
  }
}

export = Vector
