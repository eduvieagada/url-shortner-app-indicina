const assert = require('assert');
const StringGenerator = require('../utils/stringGenerator');

describe('StringGenerator', () => {
    describe('generateRandomString', () => {
        it('should generate a random text', () => {
            let text = StringGenerator.generateRandomString(5);
            console.log(text);
            assert.notEqual(text, undefined);
        });
    });
});