const BaseController = require('./baseController');

class PostsController extends BaseController {

	async getPost() {
		return await this.axiosInstance('/posts/3');
	}

	async createNewPost() {
		return await this.axiosInstance.post('/posts', {
			title: 'whatever it takes',
            body: 'or how my heart breaks',
            userId: 1,
		});
	}

	async updatePost() {
		return await this.axiosInstance.put(
			'/posts/1',
			{
                id: 1,
                title: 'How is it going',
                body: 'Not bad',
                userId: 1,
                },
                { headers: {
                    'Content-type': 'application/json',
                },
            } );
	}

	async deletePost() {
		return await this.axiosInstance.delete('/posts/5');
	}
}
module.exports = new PostsController ();