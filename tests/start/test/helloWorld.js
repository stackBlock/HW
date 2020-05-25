const HelloWorld = artifacts.require('HelloWorld');


contract('HelloWorld', () => {
    it('Should return hello world', async () => {
        const helloWorld = await HelloWorld.deployed();
        const result = await helloWorld.hello();
        console.log('result: ', result);
        assert(result === 'Hello World');
    });
})