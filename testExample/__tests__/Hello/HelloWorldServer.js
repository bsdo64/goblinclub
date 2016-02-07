jest.dontMock('../../rectangle');

var Rectangle = require('../../rectangle');

describe('Rectangle', () => {
  describe('#constructor()', () => {
    it('requires two numerical arguments', () => {
      expect(function () {
        new Rectangle()
      }).toThrow();

      expect(function () {
        new Rectangle(1.0)
      }).toThrow();

      expect(function () {
        new Rectangle('foo', 'bar')
      }).toThrow();

      expect(function () {
        new Rectangle(5, 7)
      }).not.toThrow();
    });
  });

  describe('#width', () => {
    var rectangle;

    beforeEach(() => {
      rectangle = new Rectangle(10, 20);
    });

    it('returns the width', () => {
      expect(rectangle.width).toEqual(10);
    });

    it('can be changed', () => {
      rectangle.width = 30;
      expect(rectangle.width).toEqual(30);
    });

    it('only accepts numerical values', () => {
      expect(() => {
        rectangle.width = 'foo'
      }).toThrow();
    });
  });

  describe('#height', () => {
    var rectangle;

    beforeEach(() => {
      rectangle = new Rectangle(10, 20);
    });

    it('returns the height', () => {
      expect(rectangle.height).toEqual(20);
    });

    it('can be changed', () => {
      rectangle.height = 30;
      expect(rectangle.height).toEqual(30);
    });

    it('only accepts numerical values', () => {
      expect(() => {
        rectangle.height = 'foo';
      }).toThrow();
    });
  });

  describe('#area', () => {
    var rectangle;

    beforeEach(() => {
      rectangle = new Rectangle(10, 20);
    });

    it('returns the area', () => {
      expect(rectangle.area).toEqual(200);
    });

    it('can not be changed', () => {
      var input = 1000;
      expect(() => {
        rectangle.area = input;
      }).toThrow();
    });
  });

  describe('#circumference', () => {
    var rectangle;

    beforeEach(() => {
      rectangle = new Rectangle(10, 20);
    });

    it('returns the circumference', () => {
      expect(rectangle.circumference).toEqual(60);
    });

    it('can not be changed', () => {
      var input = 1000;
      expect(() => {
        rectangle.circumference = input;
      }).toThrow();
    });
  });
});