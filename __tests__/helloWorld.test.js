function helloWorld() {
	return 'Hello, World!';
}

test('debería retornar "Hello, World!"', () => {
	expect(helloWorld()).toBe('Hello, World!');
});