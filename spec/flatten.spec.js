let flatten = require('../flatten')

describe("Function flatten", function() {

    it("should return a flattened version of the given array from Conversio", function() {
      let sampleArray = [[1,2,[3]],4]
      expect(flatten(sampleArray)).toEqual([1, 2, 3, 4])
    });

    it("should return a flattened version of an array of greater depth of nesting", function() {
      let sampleArray = [[[1,2,[3]]],[4], [5]]
      expect(flatten(sampleArray)).toEqual([1, 2, 3, 4, 5])
    });

  });