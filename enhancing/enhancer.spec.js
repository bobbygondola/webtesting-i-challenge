const enhancer = require('./enhancer.js');
// test away!


describe('example test', () => {
    it('should pass some simple logical tests', () => {
        expect(true).toBeTruthy();
        expect(false).toBeFalsy();
        expect().toBeUndefined();
    })
})

describe('tesing math functions we made', () => {
    test('should add 2 numbers', () => {
        //arrange
        const expected = 4;
        const a = 2;
        const b = 2;
        //act
        const actual = enhancer.add(a,b)
        //assert
        expect(actual).toBe(expected)
    })
})

describe('should test different methods', () => {
    it('tests out negatve numbers', () => {
        expect(enhancer.add(-5,10)).toBe(5)
    })
})

describe('REPAIRS ITEM', () => {
    it('repairs item to 100', () => {
        //arrange
        const expectedDurability = { durability: 100 };
        //act
        const actual =  enhancer.repair({ durability: 90 });
        //assert
        expect(actual).toEqual(expectedDurability)
    })
})

describe("SUCCEED", () => {
    it("increases enhancement by 1", () => {
        expect(
          enhancer.succeed({ name: "thing", durability: 90, enhancement: 10 })
        ).toEqual({ name: "thing", durability: 90, enhancement: 11 });
    });
    it("doesn't increase enhancement if at 20", () => {
        expect(
          enhancer.succeed({ name: "thing", durability: 90, enhancement: 20 })
        ).toEqual({
          name: "thing",
          durability: 90,
          enhancement: 20,
        });
    })
  });

  describe("FAIL", () => {
    it("decreases durability by 5 if enhancement is less than 15", () => {
      expect(
        enhancer.fail({ name: "thing", durability: 90, enhancement: 14 })
      ).toEqual({ name: "thing", durability: 85, enhancement: 14 });
      expect(
        enhancer.fail({ name: "bro", durability: 10, enhancement: 10 })
      ).toEqual({ name: "bro", durability: 5, enhancement: 10 });
    });
    it("decreases durability by 10 if enhancement is 15 or more", () => {
      expect(
        enhancer.fail({ name: "thing", durability: 90, enhancement: 15 })
      ).toEqual({ name: "thing", durability: 80, enhancement: 15 });
      expect(
        enhancer.fail({ name: "pickaxe", durability: 72, enhancement: 16 })
      ).toEqual({ name: "pickaxe", durability: 62, enhancement: 16 });
    });
    it("decreases enhancement by 1 if enhancement is more than 16", () => {
      expect(
        enhancer.fail({ name: "thing", durability: 90, enhancement: 17 })
      ).toEqual({
        name: "thing",
        durability: 90,
        enhancement: 16,
      });
      expect(
        enhancer.fail({ name: "axe", durability: 100, enhancement: 20 })
      ).toEqual({
        name: "axe",
        durability: 100,
        enhancement: 19,
      });
    });
  });

  describe("get()", () => {
    it("things", () => {});
    it("returns the same item if enhancement is 0", () => {
      expect(
        enhancer.get({ name: "axe", durability: 100, enhancement: 0 })
      ).toEqual({ name: "axe", durability: 100, enhancement: 0 });
      expect(
        enhancer.get({ name: "scythe", durability: 50, enhancement: 0 })
      ).toEqual({ name: "scythe", durability: 50, enhancement: 0 });
    });
    it("returns the item with [+levelOfEnhancement] in the name", () => {
        expect(
          enhancer.get({ name: "axe", durability: 100, enhancement: 1 })
        ).toEqual({ name: "[+1] axe", durability: 100, enhancement: 1 });
        expect(
          enhancer.get({ name: "thing", durability: 40, enhancement: 17 })
        ).toEqual({ name: "[+17] thing", durability: 40, enhancement: 17 });
    })
  });