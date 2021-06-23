const PATH = 'http://localhost:3000';

export const getPosts = () => {
    return fetch(`${PATH}/posts`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        return data;
    }).catch(e => {
        console.error('Something went wrong!', e)
    });
}

export const createPost = (title, content) => {
    const body = { title, content };
    const options = {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        method: 'POST'
    }
    return fetch(`${PATH}/posts`, options)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        return data;
    }).catch(e => {
        console.error('Something went wrong!', e)
    });
}