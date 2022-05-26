class ApiService {
	constructor(baseUrl) {
		this.url = baseUrl
	}

	async asyncCreatePost(post) {
		try {
			const request = new Request(this.url + '/posts.json', {
				method: 'post',
				body: JSON.stringify(post)
			}) // posts.json .json специальная обязательная информация для firebase
			const response = await fetch(request)
			return await response.json()
		} catch (error) {
			console.log(error)
		}
	}
}

export const apiService = new ApiService('https://back-for-js-blog-default-rtdb.firebaseio.com')

