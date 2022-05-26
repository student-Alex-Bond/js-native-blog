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
			return useRequest(request)
		} catch (error) {
			console.log(error)
		}
	}

	async asyncFetchPosts() {
		try {
			const request = new Request(`${this.url}/posts.json`, {
				method: 'get',
			})
			return useRequest(request)
		} catch (error) {
			console.log(error)
		}
	}

	async asyncFetchPostById(id){
		try {
			const request = new Request(`${this.url}/posts/${id}.json`, {
				method: 'get',
			})
			return useRequest(request)
		}catch (error){
			console.log(error)
		}
	}
}

async function useRequest(request) {
	const response = await fetch(request)
	return await response.json()
}

export const apiService = new ApiService('https://back-for-js-blog-default-rtdb.firebaseio.com')

