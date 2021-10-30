const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max)

class Vector3D {
  public x: number
  public y: number
  public z: number

  constructor(vec: Vector3D)
  constructor(x?: number, y?: number, z?: number)
  constructor(x: any = 0, y: number = 0, z: number = 0) {
    if (x instanceof Vector3D) {
      this.x = x.x
      this.y = x.y
      this.z = x.z
    } else {
      this.x = x
      this.y = y
      this.z = z
    }
  }

  add(vec: Vector3D): Vector3D
  add(x: number, y: number, z: number): Vector3D
  add(x: any = 0, y: number = 0, z: number = 0): Vector3D {
    if (x instanceof Vector3D) return this.add(x.x, x.y, x.z)
    this.x += x
    this.y += y
    this.z += z
    return this
  }

  sub(vec: Vector3D): Vector3D
  sub(x: number, y: number, z: number): Vector3D
  sub(x: any = 0, y: number = 0, z: number = 0): Vector3D {
    if (x instanceof Vector3D) return this.sub(x.x, x.y, x.z)
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

  dist(vec: Vector3D): number
  dist(x: number, y: number, z: number): number
  dist(x: any = 0, y: number = 0, z: number = 0): number {
    if (x instanceof Vector3D) return x.copy().sub(this).len()
    return this.dist(new Vector3D(x, y, z))
  }

  equals(vec: Vector3D): boolean
  equals(x: number, y: number, z: number): boolean
  equals(x: any = 0, y: number = 0, z: number = 0): boolean {
    if (x instanceof Vector3D) return this.equals(x.x, x.y, x.z)
    return this.x === x && this.y === y && this.z === z
  }

  dot(vec: Vector3D): number
  dot(x: number, y: number, z: number): number
  dot(x: any = 0, y: number = 0, z: number = 0): number {
    if (x instanceof Vector3D) return this.dot(x.x, x.y, x.z)
    return this.x * x + this.y * y + this.z * z
  }

  // https://www.geeksforgeeks.org/program-dot-product-cross-product-two-vector
  cross(vec: Vector3D): Vector3D
  cross(x: number, y: number, z: number): Vector3D
  cross(x: any = 0, y: number = 0, z: number = 0): Vector3D {
    if (x instanceof Vector3D) return this.cross(x.x, x.y, x.z)
    return new Vector3D(
      this.y * z - this.z * y,
      this.z * x - this.x * z,
      this.x * y - this.y * x
    )
  }

  // https://keithmaggio.wordpress.com/2011/02/15/math-magician-lerp-slerp-and-nlerp
  lerp(vec: Vector3D, percent?: number): Vector3D
  lerp(x: number, y: number, z: number, percent?: number): Vector3D
  lerp(x: any = 0, y: number = 0, z: number = 0, percent = 0.5): Vector3D {
    if (x instanceof Vector3D) return this.lerp(x.x, x.y, x.z, y || 0.5)
    this.x += percent * (x - this.x)
    this.y += percent * (y - this.y)
    this.z += percent * (z - this.z)
    return this
  }

  slerp(vec: Vector3D, percent?: number): Vector3D
  slerp(x: number, y: number, z: number, percent?: number): Vector3D
  slerp(x: any = 0, y: number = 0, z: number = 0, percent = 0.5): Vector3D {
    if (!(x instanceof Vector3D))
      return this.slerp(new Vector3D(x, y, z), percent)
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

  nlerp(vec: Vector3D, percent?: number): Vector3D
  nlerp(x: number, y: number, z: number, percent?: number): Vector3D
  nlerp(x: any = 0, y: number = 0, z: number = 0, percent = 0.5) {
    if (!(x instanceof Vector3D))
      return this.nlerp(new Vector3D(x, y, z), percent)
    return this.lerp(x, y || 0.5).normalize()
  }

  copy() {
    return new Vector3D(this)
  }
}

export default Vector3D
