
const { expect } = require('chai')

const fanh = require('./index')

describe('Boolean helpers', () => {
  describe('NOT', () => {
    const { NOT } = fanh

    describe('Against truthy values', () => {
      it('NOT(Symbol.for("symbol")) should return false', () => {
        expect(NOT(Symbol.for("symbol"))).to.be.false
      })
      it('NOT(function () {}) should return false', () => expect(NOT(function () {})).to.be.false)
      it('NOT(new Date()) should return false', () => expect(NOT(new Date())).to.be.false)
      it('NOT(()  => {}) should return false', () => expect(NOT(()  => {})).to.be.false)
      it('NOT(-Infinity) should return false', () => expect(NOT(-Infinity)).to.be.false)
      it('NOT(Infinity) should return false', () => expect(NOT(Infinity)).to.be.false)
      it('NOT("string") should return false', () => expect(NOT("string")).to.be.false)
      it('NOT(Math.PI) should return false', () => expect(NOT(Math.PI)).to.be.false)
      it('NOT("false") should return false', () => expect(NOT("false")).to.be.false)
      it('NOT(true) should return false', () => expect(NOT(true)).to.be.false)
      it('NOT({}) should return false', () => expect(NOT({})).to.be.false)
      it('NOT([]) should return false', () => expect(NOT([])).to.be.false)
      it('NOT(1n) should return false', () => expect(NOT(1n)).to.be.false)
      it('NOT(1) should return false', () => expect(NOT(1)).to.be.false)
    })

    describe('Against falsy values', () => {
      it('NOT(undefined) should return true', () => expect(NOT(undefined)).to.be.true)
      it('NOT(false) should return true', () => expect(NOT(false)).to.be.true)
      it('NOT(null) should return true', () => expect(NOT(null)).to.be.true)
      it('NOT(NaN) should return true', () => expect(NOT(NaN)).to.be.true)
      it('NOT("") should return true', () => expect(NOT("")).to.be.true)
      it('NOT(0n) should return true', () => expect(NOT(0n)).to.be.true)
      it('NOT(+0) should return true', () => expect(NOT(+0)).to.be.true)
      it('NOT(-0) should return true', () => expect(NOT(-0)).to.be.true)
      it('NOT(0) should return true', () => expect(NOT(0)).to.be.true)
    })

    describe('Against no values', () => {
      it('NOT() should return true', () => expect(NOT()).to.be.true)
    })
  })

  describe('invert', () => {
    const { invert } = fanh

    describe('With an invalid parameter', () => {
      it('Should throws TypeError in case of no parameter', () => {
        expect(() => invert()).to.throw(TypeError)
      })
      it('Should throws TypeError in case of undefined parameter', () => {
        expect(() => invert(undefined)).to.throw(TypeError)
      })
      it('Should throws TypeError in case of null parameter', () => {
        expect(() => invert(null)).to.throw(TypeError)
      })
      it('Should throws TypeError in case of number parameter', () => {
        expect(() => invert(1)).to.throw(TypeError)
      })
      it('Should throws TypeError in case of NaN parameter', () => {
        expect(() => invert(NaN)).to.throw(TypeError)
      })
    })
    describe('With a valid parameter', () => {
      const makeFalse = () => false
      const makeTrue = () => true

      it('Should return a function', () => {
        const inverted = invert(makeFalse)
        expect(inverted).to.be.a('function')
      })
      it('Should inverse logic function which returns false', () => {
        const inverted = invert(makeFalse)
        expect(inverted()).to.be.true
      })
      it('Should inverse logic function which returns true', () => {
        const inverted = invert(makeTrue)
        expect(inverted()).to.be.false
      })
      it('Should return the inverted value of the given function', () => {
        expect(invert(makeFalse)()).to.equals(!makeFalse())
        expect(invert(makeTrue)()).to.equals(!makeTrue())
      })
    })
  })

  describe('AND', () => {
    const { AND } = fanh

    describe('Against all truthy values', () => {
      it('AND(true) should returns true', () => expect(AND(true)).to.be.true)
      it('AND(true, true) should returns true', () => expect(AND(true, true)).to.be.true)
      it('AND(1, true) should returns true', () => expect(AND(1, true)).to.be.true)
      it('AND(1, {}) should returns true', () => expect(AND(1, {})).to.be.true)
      it('AND(1, []) should returns true', () => expect(AND(1, [])).to.be.true)
    })

    describe('Against all falsy values', () => {
      it('AND(false) should returns false', () => expect(AND(false)).to.be.false)
      it('AND(NaN) should returns false', () => expect(AND(NaN)).to.be.false)
      it('AND(false, false) should returns false', () => expect(AND(false, false)).to.be.false)
      it('AND(NaN, false) should returns false', () => expect(AND(NaN, false)).to.be.false)
      it('AND(false, null) should returns false', () => expect(AND(false, null)).to.be.false)
      it('AND(false, undefined) should returns false', () => expect(AND(false, undefined)).to.be.false)
    })

    describe('Against some truthy values', () => {
      it('AND(false, true) should returns false', () => expect(AND(false, true)).to.be.false)
      it('AND(false, {}) should returns false', () => expect(AND(false, {})).to.be.false)
      it('AND(1, false) should returns false', () => expect(AND(1, false)).to.be.false)
      it('AND(false, {}) should returns false', () => expect(AND(false, {})).to.be.false)
      it('AND(false, []) should returns false', () => expect(AND(false, [])).to.be.false)
      it('AND(NaN, []) should returns false', () => expect(AND(NaN, [])).to.be.false)
      it('AND(null, []) should returns false', () => expect(AND(null, [])).to.be.false)
      it('AND(undefined, []) should returns false', () => expect(AND(undefined, [])).to.be.false)
    })
  })

  describe.only('OR', () => {
    const { OR } = fanh

    describe('Against all truthy values', () => {
      it('OR(true) should returns true', () => expect(OR(true)).to.be.true)
      it('OR(true, true) should returns true', () => expect(OR(true, true)).to.be.true)
      it('OR(1, true) should returns true', () => expect(OR(1, true)).to.be.true)
      it('OR(1, {}) should returns true', () => expect(OR(1, {})).to.be.true)
      it('OR(1, []) should returns true', () => expect(OR(1, [])).to.be.true)
    })

    describe('Against all falsy values', () => {
      it('OR(false) should returns false', () => expect(OR(false)).to.be.false)
      it('OR(NaN) should returns false', () => expect(OR(NaN)).to.be.false)
      it('OR(false, false) should returns false', () => expect(OR(false, false)).to.be.false)
      it('OR(NaN, false) should returns false', () => expect(OR(NaN, false)).to.be.false)
      it('OR(false, null) should returns false', () => expect(OR(false, null)).to.be.false)
      it('OR(false, undefined) should returns false', () => expect(OR(false, undefined)).to.be.false)
    })

    describe('Against some truthy values', () => {
      it('OR(false, true) should returns true', () => expect(OR(false, true)).to.be.true)
      it('OR(false, {}) should returns true', () => expect(OR(false, {})).to.be.true)
      it('OR(1, false) should returns true', () => expect(OR(1, false)).to.be.true)
      it('OR(false, {}) should returns true', () => expect(OR(false, {})).to.be.true)
      it('OR(false, []) should returns true', () => expect(OR(false, [])).to.be.true)
      it('OR(NaN, []) should returns true', () => expect(OR(NaN, [])).to.be.true)
      it('OR(null, []) should returns true', () => expect(OR(null, [])).to.be.true)
      it('OR(undefined, []) should returns true', () => expect(OR(undefined, [])).to.be.true)
    })
  })
})

describe('Function helpers', () => {
  describe('noOp', () => {
    const { noOp } = fanh

    it('Its type should be function', () => {
      expect(noOp).to.be.a('function')
    })
    it('It should just run and do nothing', () => {
      expect(noOp()).to.be.undefined
    })
  })
})

describe('Timing helpers', () => {
  const { delay } = fanh

  it('Should returns a promise', () => {
    expect(delay()).to.be.a('Promise')
  })
  it('Should wait for 10 ms', (done) => {
    const start = Date.now()

    delay(10).then(() => {
      const delayed = Date.now() - start

      expect(delayed).to.be.at.least(10)
      done()
    })
  })

})

describe('Array helpers', () => {
  describe('dedupe', () => {
    const { dedupe } = fanh

    it('Should return an empty when passed an empty array', () => {
      expect(dedupe([])).to.be.an('array').which.has.lengthOf(0)
    })
    it('Should return a different array from the original', () => {
      const items = [1, 2, 3]
      expect(dedupe(items)).to.not.be.equal(items)
    })
    it('Should return an array with length of 1 when passed an array of same elements', () => {
      expect(dedupe([1, 1, 1, 1, 1, 1])).to.be.an('array').which.has.lengthOf(1)
    })
    it('Should return array with same elements when passed an array of empty objects', () => {
      expect(dedupe([{}, {}, {}, {}, {}])).to.be.an('array').which.has.lengthOf(5)
    })
  })
  describe('findBy', () => {
    const { findBy } = fanh
    const items = [{ name: '#0' }, { name: '#1' }, { name: '#2' }]

    it('should return undefined if no item matches', () => {
      expect(findBy(items, 'name', false)).to.be.undefined
    })
    it('should return first matched item', () => {
      expect(findBy(items, 'name', '#1')).to.be.equal(items[1])
    })
  })
})