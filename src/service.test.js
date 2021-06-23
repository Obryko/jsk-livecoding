import { getPosts } from "./service";

global.fetch = jest.fn(() => 
Promise.resolve({
    json: () => Promise.resolve([])
}));

describe('service.js', () => {
    it('getPosts', async () => {

        const posts = await getPosts();

        expect(posts).toEqual([]);
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/posts')
    });
})