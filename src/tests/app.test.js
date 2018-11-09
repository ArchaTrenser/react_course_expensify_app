const add = (a,b) =>a+b;
test('add two numbers' , () =>
{
    const result = add(3,4);
    expect(result).toBe(7);
})

const greeting =(name) => `Hello ${name}!`;
test('Print Stirng' , () =>
{
    const result = greeting('archa');
    expect(result).toMatch('Hello archa!');
})