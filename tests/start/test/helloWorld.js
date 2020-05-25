const HelloWorld = artifacts.require('HelloWorld'); //needs to be the name exact name of the sol file


contract('HelloWorld', () => {
    it('Should return hello world', async () => {
        const helloWorld = await HelloWorld.deployed();
        const result = await helloWorld.hello();
        console.log('result: ', result);
        assert(result === 'Hello World');
    });
})
