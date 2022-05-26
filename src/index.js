import {HeaderComponent} from './components/header.component'
import {NavigationComponent} from './components/navigation.component'
import {CreatePostComponent} from './components/createPost.component'
import {PostsComponent} from "./components/posts.component";
import {FavoriteComponent} from "./components/favorite.component";

new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')
const createPost = new CreatePostComponent('create')
const posts = new PostsComponent('posts')
const favorite = new FavoriteComponent('favorite')

navigation.registerTabs([
	{name: 'create', component: createPost},
	{name: 'posts', component: posts},
	{name: 'favorite', component: favorite},
])