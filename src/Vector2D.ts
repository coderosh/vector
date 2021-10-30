class Vector2D {
  public x: number
  public y: number

  constructor(vec: Vector2D)
  constructor(x?: number, y?: number)
  constructor(x: any = 0, y: number = 0) {
    if (x instanceof Vector2D) {
      this.x = x.x
      this.y = x.y
    } else {
      this.x = x
      this.y = y
    }
  }

  add(vec: Vector2D): Vector2D
  add(x: number, y: number): Vector2D
  add(x: any = 0, y: number = 0) {
    if (x instanceof Vector2D) return this.add(x.x, x.y)

    this.x += x
    this.y += y

    return this
  }

  sub(vec: Vector2D): Vector2D
  sub(x: number, y: number): Vector2D
  sub(x: any = 0, y: number = 0) {
    if (x instanceof Vector2D) return this.sub(x.x, x.y)

    this.x -= x
    this.y -= y

    return this
  }

  scale(n: number): Vector2D {
    this.x *= n
    this.y *= n
    return this
  }

  lenSqr() {
    const { x, y } = this
    return x * x + y * y
  }

  len() {
    return Math.sqrt(this.lenSqr())
  }

  normalize() {
    const len = this.len()
    len !== 0 && this.scale(1 / len)
    return this
  }

  dist(vec: Vector2D): number
  dist(x: number, y: number): number
  dist(x: any = 0, y: number = 0): number {
    if (x instanceof Vector2D) return x.copy().sub(this).len()
    return this.dist(new Vector2D(x, y))
  }

  equals(vec: Vector2D): boolean
  equals(x: number, y: number): boolean
  equals(x: any = 0, y: number = 0): boolean {
    if (x instanceof Vector2D) return this.equals(x.x, x.y)
    return this.x === x && this.y === y
  }

  dot(vec: Vector2D): number
  dot(x: number, y: number): number
  dot(x: any = 0, y: number = 0): number {
    if (x instanceof Vector2D) return this.dot(x.x, x.y)
    return this.x * x + this.y * y
  }

  lerp(vec: Vector2D, percent?: number): Vector2D
  lerp(x: number, y: number, percent?: number): Vector2D
  lerp(x: any = 0, y: number = 0, percent = 0.5): Vector2D {
    if (x instanceof Vector2D) return this.lerp(x.x, x.y, y || 0.5)
    this.x += percent * (x - this.x)
    this.y += percent * (y - this.y)
    return this
  }

  nlerp(vec: Vector2D, percent?: number): Vector2D
  nlerp(x: number, y: number, percent?: number): Vector2D
  nlerp(x: any = 0, y: number = 0, percent = 0.5) {
    if (!(x instanceof Vector2D)) return this.nlerp(new Vector2D(x, y), percent)
    return this.lerp(x, y || 0.5).normalize()
  }

  copy() {
    return new Vector2D(this)
  }
}

export default Vector2D
