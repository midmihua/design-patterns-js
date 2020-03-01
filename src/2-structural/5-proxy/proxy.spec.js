const { ProxiedRequest } = require('./proxy');

describe('Structural: Proxy', () => {

    const proxy = new ProxiedRequest();
    const urls = [
        'https://jsonplaceholder.typicode.com/users/1',
        'https://jsonplaceholder.typicode.com/users/2',
        'https://jsonplaceholder.typicode.com/users/1'
    ];

    let result1;
    let result2;
    let result3;

    beforeAll(async () => {
        result1 = await proxy.get(urls[0]);
        result2 = await proxy.get(urls[1]);
        result3 = await proxy.get(urls[2]);
    });

    test('should return from live network', () => {
        expect(result1).toHaveProperty('source');
        expect(result1.source).toBe('live data');
        expect(result2).toHaveProperty('source');
        expect(result2.source).toBe('live data');
    });

    test('should return from cache', () => {
        expect(result3).toHaveProperty('source');
        expect(result3.source).toBe('cached data');
        expect(result3.data).toEqual(result1.data);
    });
});
