import {Component} from '../core/component'
import {apiService} from "../services/api.service";
import {renderPost} from "../templates/post.template";
import {TransformService} from "../services/transform.service";


export class FavoriteComponent extends Component {
	constructor(id, {loader}) {
		super(id);
		this.loader = loader
	}

	init() {
		this.$el.addEventListener('click', linkClickHandler.bind(this))
	}

	onShow() {
		const favorites = JSON.parse(localStorage.getItem('favorites'))
		const html = renderList(favorites)
		this.$el.insertAdjacentHTML('afterbegin', html)
	}

	onHide() {
		this.$el.innerHTML = ''
	}
}

function renderList(list = []) {
	if (list && list.length) {
		return `
		<ul>
			${list.map(item => `<li><a class="js-link" href="#" data-id="${item.id}">${item.title}</a></li>`).join(' ')}
		</ul>
		`
	}
	return `<p class="center">not found</p>`
}

async function linkClickHandler(event) {
	event.preventDefault()
	if (event.target.classList.contains('js-link')) {
		const postId = event.target.dataset.id
		this.$el.innerHTML = ''
		this.loader.show()
		const post = await apiService.asyncFetchPostById(postId)
		this.loader.hide()
		console.log(post)
		this.$el.insertAdjacentHTML('afterbegin', renderPost(post, {withButton: false}))
	}
}

