const add = require("./index")

test ("add two numbers together", ()=>{
    const num1 = 100
    const num2 = 50
    const sum = add(num1,num2)
    expect(sum).toBe(150)
})