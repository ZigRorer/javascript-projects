const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("returns 'num is less than 5.' when num < 5.", function() {
      let output = checkFive(2);
      expect(output).toBe("2 is less than 5.");
   });

});