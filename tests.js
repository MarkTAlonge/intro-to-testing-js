// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
// sayHello function
describe('sayHello', function() {
    it('should be a defined function', function()  {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
        });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
        });
    it('should return the string "Hello, Alex!" when executed', function (){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
        // expect(sayHello(false)).toBe("Hello, World!")
});
// isFive function
describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return "true" if a boolean is executed', function() {
        expect(isFive()).toBe("");
    });
});
//isEven function
describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven()).toBe("function");
    });
    it('should return "boolean" no mater the input', function() {
        expect(typeof isEven()).toBe("true");
    });
});
//isVowel
describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel()).toBe('function');
    });
    it('should return true is a bolean is executed', function() {
        expect(typeof isVowel()).toBe('true');
    });
});