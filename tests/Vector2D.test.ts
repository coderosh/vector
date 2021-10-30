import Vector2D from '../src/Vector2D'

describe('Vector2D.add', () => {
  it('should add two vectors when arg is a vector', () => {
    const vec = new Vector2D(0, 1)
    vec.add(new Vector2D(2, 3))
    expect({ x: vec.x, y: vec.y }).toEqual({ x: 2, y: 4 })
  })

  it('should add two vectors when args are coordinates', () => {
    const vec = new Vector2D(2, 3)
    vec.add(0, 5)
    expect({ x: vec.x, y: vec.y }).toEqual({ x: 2, y: 8 })
  })
})

describe('Vector2D.sub', () => {
  it('should substract two vectors when arg is a vector', () => {
    const vec = new Vector2D(0, 1)
    vec.sub(new Vector2D(2, 3))
    expect({ x: vec.x, y: vec.y }).toEqual({ x: -2, y: -2 })
  })

  it('should substract two vectors when args are coordinates', () => {
    const vec = new Vector2D(2, 3)
    vec.sub(0, 5)
    expect({ x: vec.x, y: vec.y }).toEqual({ x: 2, y: -2 })
  })
})

describe('Vector2D.scale', () => {
  it('should scale the vector by given arg', () => {
    const vec = new Vector2D(2, 3)
    vec.scale(2)
    expect({ x: vec.x, y: vec.y }).toEqual({ x: 4, y: 6 })
  })
})

describe('Vector2D.lenSqr', () => {
  it('should return the squared length of vector', () => {
    expect(new Vector2D(2, 2).lenSqr()).toBe(8)
  })
})

describe('Vector2D.len', () => {
  it('should return the length of vector', () => {
    expect(new Vector2D(3, 4).len()).toBe(5)
  })
})

describe('Vector2D.normalize', () => {
  it('should normalize the vector', () => {
    const vec = new Vector2D(5, 2)
    vec.normalize()
    expect(vec.len()).toEqual(1)
  })
})

describe('Vector2D.dist', () => {
  it('should give distance between two vector when arg is vector', () => {
    const vec = new Vector2D(1, 2)
    expect(vec.dist(new Vector2D(1, 2))).toBe(0)
  })

  it('should give distance between two vector when args are coordinates', () => {
    const vec = new Vector2D(1, 2)
    expect(vec.dist(1, 3)).toBe(1)
  })
})

describe('Vector2D.equals', () => {
  it('should test equality when arg is vector', () => {
    expect(new Vector2D(1, 1).equals(new Vector2D(1, 1))).toBe(true)
  })

  it('should test equality when args are coordinates', () => {
    expect(new Vector2D(1, 1).equals(1, 2)).toBe(false)
  })
})

describe('Vector2D.dot', () => {
  it('should return dot product when arg is a vector', () => {
    expect(new Vector2D(1, 2).dot(new Vector2D(1, 2))).toBe(5)
  })

  it('should return dot product when args are coordinates', () => {
    expect(new Vector2D(1, 2).dot(1, 1)).toBe(3)
  })
})

describe('Vector2D.lerp', () => {
  it('should linear interpolate vectors when arg is vector', () => {
    const vec = new Vector2D(1, 2).lerp(new Vector2D(4, 1), 0.1)
    expect({ x: vec.x, y: vec.y }).toEqual({ x: 1.3, y: 1.9 })
  })

  it('should linear interpolate vectors when args are coordinates', () => {
    const vec = new Vector2D(1, 2).lerp(4, 1, 0.1)
    expect({ x: vec.x, y: vec.y }).toEqual({ x: 1.3, y: 1.9 })
  })
})

describe('Vector2D.nlerp', () => {
  it('should linear interpolate and normalize vectors wheren arg is vector', () => {
    const vec = new Vector2D(1, 0)
    vec.nlerp(new Vector2D(0, 1), 0.5)
    expect({
      x: vec.x.toPrecision(3),
      y: vec.y.toPrecision(3),
    }).toEqual({ x: '0.707', y: '0.707' })
  })

  it('should linear interpolate and normalize vectors wheren args are coordinate', () => {
    const vec = new Vector2D(1, 0)
    vec.nlerp(0, 1, 0.5)
    expect({
      x: vec.x.toPrecision(3),
      y: vec.y.toPrecision(3),
    }).toEqual({ x: '0.707', y: '0.707' })
  })
})

describe('Vector2D.copy', () => {
  it('should copy the vector with same coords', () => {
    const vec = new Vector2D(undefined, 1)
    const newVec = vec.copy()
    expect(vec).not.toBe(newVec)
    expect(vec.equals(newVec)).toBe(true)
  })
})
