'use trict'

const test = require('node:test')
const assert = require('node:assert')
const add = require('.src/index.js')

test('add sum number',()=>{
    //Arrange
    const a=2;
    const b=3;
    //Act
    const result = add(a,b);

    //Assert
    assert.strictEqual(result,5);
})