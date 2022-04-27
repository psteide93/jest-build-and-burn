const add = require("./index")

test("Add two numbers together", ()=>{
    const num1 = 5
    const num2 = 4
    const sum = add(num1, num2)
    expect(sum).toBe(9)
}

)