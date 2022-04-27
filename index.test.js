const add = require("./index")



test("Add two numbers together", ()=>{
    const numberOne = 3
    const numberTwo = 5
    sum = add(numberOne, numberTwo)
    expect(sum).toBe(8)
})