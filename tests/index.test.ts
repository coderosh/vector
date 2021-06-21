import Vector from '../src'

describe('Vector.add', () => {
  it('should add two vectors when arg is a vector', () => {
    const vec = new Vector(0, 1, 1)
    vec.add(new Vector(2, 3, 4))
    expect({ x: vec.x, y: vec.y, z: vec.z }).toEqual({ x: 2, y: 4, z: 5 })
  })

  it('should add two vectors when args are coordinates', () => {
    const vec = new Vector(2, 3, 4)
    vec.add(0, 5, 6)
    expect({ x: vec.x, y: vec.y, z: vec.z }).toEqual({ x: 2, y: 8, z: 10 })
  })
})

describe('Vector.sub', () => {
  it('should substract two vectors when arg is a vector', () => {
    const vec = new Vector(0, 1, 1)
    vec.sub(new Vector(2, 3, 4))
    expect({ x: vec.x, y: vec.y, z: vec.z }).toEqual({ x: -2, y: -2, z: -3 })
  })

  it('should substract two vectors when args are coordinates', () => {
    const vec = new Vector(2, 3, 4)
    vec.sub(0, 5, 6)
    expect({ x: vec.x, y: vec.y, z: vec.z }).toEqual({ x: 2, y: -2, z: -2 })
  })
})

describe('Vector.scale', () => {
  it('should scale the vector by given arg', () => {
    const vec = new Vector(2, 3)
    vec.scale(2)
    expect({ x: vec.x, y: vec.y, z: vec.z }).toEqual({ x: 4, y: 6, z: 0 })
  })
})

describe('Vector.lenSqr', () => {
  it('should return the squared length of vector', () => {
    expect(new Vector(2, 2, 1).lenSqr()).toBe(9)
  })
})

describe('Vector.len', () => {
  it('should return the length of vector', () => {
    expect(new Vector(2, 2, 1).len()).toBe(3)
  })
})

describe('Vector.normalize', () => {
  it('should normalize the vector', () => {
    const vec = new Vector(5, 2, 4)
    vec.normalize()
    expect(vec.len()).toEqual(1)
  })
})

describe('Vector.dist', () => {
  it('should give distance between two vector when arg is vector', () => {
    const vec = new Vector(1, 2, 3)
    expect(vec.dist(new Vector(1, 2, 4))).toBe(1)
  })

  it('should give distance between two vector when args are coordinates', () => {
    const vec = new Vector(1, 2, 3)
    expect(vec.dist(1, 3, 3)).toBe(1)
  })
})

describe('Vector.equals', () => {
  it('should test equality when arg is vector', () => {
    expect(new Vector(1, 1, 1).equals(new Vector(1, 1, 1))).toBe(true)
  })

  it('should test equality when args are coordinates', () => {
    expect(new Vector(1, 1, 1).equals(1, 2, 1)).toBe(false)
  })
})

describe('Vector.dot', () => {
  it('should return dot product when arg is a vector', () => {
    expect(new Vector(1, 2, 3).dot(new Vector(1, 2, 3))).toBe(14)
  })

  it('should return dot product when args are coordinates', () => {
    expect(new Vector(1, 2, 3).dot(1, 1, 2)).toBe(9)
  })
})

describe('Vector.cross', () => {
  it('should return cross product when arg is a vector', () => {
    const vec = new Vector(1, 2, 3).cross(new Vector(1, 2, 4))
    expect({ x: vec.x, y: vec.y, z: vec.z }).toEqual({ x: 2, y: -1, z: 0 })
  })

  it('should return cross product when args are coordinates', () => {
    const vec = new Vector(1, 2, 3).cross(1, 2, 4)
    expect({ x: vec.x, y: vec.y, z: vec.z }).toEqual({ x: 2, y: -1, z: 0 })
  })
})

describe('Vector.lerp', () => {
  it('should linear interpolate vectors when arg is vector', () => {
    const vec = new Vector(1, 2, 3).lerp(new Vector(4, 1, 4), 0.1)
    expect({ x: vec.x, y: vec.y, z: vec.z }).toEqual({ x: 1.3, y: 1.9, z: 3.1 })
  })

  it('should linear interpolate vectors when args are coordinates', () => {
    const vec = new Vector(1, 2, 3).lerp(4, 1, 4, 0.1)
    expect({ x: vec.x, y: vec.y, z: vec.z }).toEqual({ x: 1.3, y: 1.9, z: 3.1 })
  })
})

describe('Vector.slerp', () => {
  it('should spherical linear interpolate vectors when arg is vector', () => {
    const vec = new Vector(1, 0, 0)
    vec.slerp(new Vector(0, 1, 0), 0.5)
    expect({
      x: vec.x.toPrecision(3),
      y: vec.y.toPrecision(3),
      z: vec.z.toPrecision(3),
    }).toEqual({ x: '0.707', y: '0.707', z: '0.00' })
  })

  it('should spherical linear interpolate vectors when args are coordinates', () => {
    const vec = new Vector(1, 0, 0)
    vec.slerp(0, 1, 0, 0.5)
    expect({
      x: vec.x.toPrecision(3),
      y: vec.y.toPrecision(3),
      z: vec.z.toPrecision(3),
    }).toEqual({ x: '0.707', y: '0.707', z: '0.00' })
  })
})

describe('Vector.nlerp', () => {
  it('should linear interpolate and normalize vectors wheren arg is vector', () => {
    const vec = new Vector(1, 0, 0)
    vec.nlerp(new Vector(0, 1, 0), 0.5)
    expect({
      x: vec.x.toPrecision(3),
      y: vec.y.toPrecision(3),
      z: vec.z.toPrecision(3),
    }).toEqual({ x: '0.707', y: '0.707', z: '0.00' })
  })

  it('should linear interpolate and normalize vectors wheren args are coordinate', () => {
    const vec = new Vector(1, 0, 0)
    vec.nlerp(0, 1, 0, 0.5)
    expect({
      x: vec.x.toPrecision(3),
      y: vec.y.toPrecision(3),
      z: vec.z.toPrecision(3),
    }).toEqual({ x: '0.707', y: '0.707', z: '0.00' })
  })
})

describe('Vector.copy', () => {
  it('should copy the vector with same coords', () => {
    const vec = new Vector(undefined, 1, 2)
    const newVec = vec.copy()
    expect(vec).not.toBe(newVec)
    expect(vec.equals(newVec)).toBe(true)
  })
})
