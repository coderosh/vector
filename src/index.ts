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
    if (x instanceof Vector) return x.copy.sub(this).len()
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

  cross(vec: Vector): Vector
  cross(x: number, y: number, z?: number): Vector
  cross(x: any = 0, y: number = 0, z: number = 0): Vector {
    if (x instanceof Vector) return this.cross(x.x, x.y, x.z)
    // https://www.geeksforgeeks.org/program-dot-product-cross-product-two-vector/
    return new Vector(
      this.y * z - this.z * y,
      this.z * x - this.x * z,
      this.x * y - this.y * x
    )
  }

  lerp(vec: Vector, percent?: number): Vector
  lerp(x: number, y: number, z?: number, percent?: number): Vector
  lerp(x: any = 0, y: number = 0, z: number = 0, percent = 0.5): Vector {
    if (x instanceof Vector) return this.lerp(x.x, x.y, x.z, y || 0.5)
    // https://en.wikipedia.org/wiki/Linear_interpolation#Programming_language_support
    this.x += percent * (x - this.x)
    this.y += percent * (y - this.y)
    this.z += percent * (z - this.z)
    return this
  }

  get copy() {
    return new Vector(this)
  }
}

export = Vector
