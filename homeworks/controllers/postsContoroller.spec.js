const PostsController = require ('./postsController');

test('Getting post by id', async () => {
    const response = await PostsController.getPost('posts/3');
    console.log(await response.data);
    expect(response.data.id).toEqual(3);
    expect(response.status).toBe(200);
});

test('Create new post', async () => {
    const response = await PostsController.createNewPost ();
    console.log(response.data);
    expect(response.data.title).toEqual('whatever it takes');
    expect(response.data.body).toEqual('or how my heart breaks');
    expect(response.status).toBe(201);

});

test('Update some post', async () => {
    const response = await PostsController.updatePost();
    console.log(response.data);
    expect(response.data.title).toEqual('How is it going');
    expect(response.data.body).toEqual('Not bad');
    expect(response.status).toBe(200);

});

test('Delete the post', async () => {
    const response = await PostsController.deletePost();
    console.log(await response.data);
    expect(response.status).toEqual(200); 

    })