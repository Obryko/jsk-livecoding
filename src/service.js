
const PATH = 'http://localhost:3000'
const headers = {
    'Content-Type': 'application/json'
}
export const getPosts = () => {
    return fetch(`${PATH}/posts`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data;
        })
}

export const createPost = (title, content) => {
    const body = { title, content };
    const options = {
        headers,
        body: JSON.stringify(body),
        method: 'POST'
    }
    fetch(`${PATH}/posts`, options)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
}