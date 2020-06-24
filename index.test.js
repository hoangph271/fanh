
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

  describe.only('invert', () => {
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