import { getPosts } from './service';

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([]),
    })
);
describe('service tests', () => {
    it('getPosts', async () => {
        const result = await getPosts();

        expect(result).toEqual([]);
        expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/posts')
    })
})