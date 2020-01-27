import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		posts: [],
		subreddit: '',
		query: 'https://www.reddit.com/r/all/.json',
	},
	getters: {
		// > TODO read directly from state if these getters never get more functionality
		posts: state => state.posts,
		subreddit: state => state.subreddit,
		query: state => state.query,
		subredditUrl: state => 'https://www.reddit.com/r/' + state.subreddit,
	},
	mutations: {
		ADD_POST(state, post) {
			state.posts.push(post)
			console.log('Populated posts')
		},
		UNLOAD_POSTS(state) {
			state.posts = []
			console.log('Unloaded posts')
		},
		SET_SUBREDDIT(state, subreddit) {
			state.subreddit = subreddit
			console.log('Set state subreddit to ' + state.subreddit)
		},
		SET_QUERY(state, query) {
			state.query = query
			console.log('Set state query to ' + state.query)
		},
	},
	actions: {
		unloadPosts: ({ commit }) => {
			commit('UNLOAD_POSTS')
		},
		populatePosts: ({ commit, state }) => {
			fetch(state.query)
				.then(response => response.json())
				.then(data => {
					data.data.children.forEach(child => commit('ADD_POST', child.data))
				})
		},
		setSubreddit: ({ commit, state }, subreddit) => {
			commit('SET_SUBREDDIT', subreddit)
		},
		setQuery: ({ commit }, query) => {
			commit('SET_QUERY', query)
		},
	},
})
