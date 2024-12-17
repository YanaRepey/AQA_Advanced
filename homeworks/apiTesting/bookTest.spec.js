const axios = require('axios')


describe('API tests', () => {

	test('Getting post by id', async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts/3');
		console.log(await response.data);
		expect(response.data.id).toEqual(3);
        expect(response.status).toBe(200);
	});

    test('Getting post comments by id', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/5/comments');
        expect(response.status).toBe(200);
        expect(response.data.length).toBeGreaterThan(0);
    
    })
    });
    test('Create new post', async () => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts',
        {   title: 'whatever it takes',
            body: 'or how my heart breaks',
            userId: 1,
        },
        { headers: {
                'Content-type': 'application/json',
            },
        } );
        
        console.log(await response.data);
        expect(response.data.title).toEqual('whatever it takes');
        expect(response.data.body).toEqual('or how my heart breaks');
        expect(response.status).toBe(201);

    });

    test('Update some post', async () => {
		const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1',
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
		console.log(await response.data);
		expect(response.data.title).toEqual('How is it going');
        expect(response.data.body).toEqual('Not bad');
        expect(response.status).toBe(200);

	});
   
    test('Delete the post', async () => {
        const response = await axios.put('https://jsonplaceholder.typicode.com/posts/5');
        console.log(await response.data);
        expect(response.status).toEqual(200);
        expect(response.data).toHaveProperty('id', 5);
        

        })
   

