const add = require("./index")

test ("add two numbers together", ()=>{
    const num1 = 100
    const num2 = 50
    const sum = add(num1,num2)
    expext(sum).toBe(150)
})