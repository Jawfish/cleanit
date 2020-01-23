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
		},
		UNLOAD_POSTS(state) {
			state.posts = []
		},
		SET_SUBREDDIT(state, subreddit) {
			state.subreddit = subreddit
		},
		SET_QUERY(state, query) {
			state.query = query
			console.log('Set state query to ' + state.query)
		},
	},
	actions: {
		unloadPosts: ({ commit }) => {
			commit('UNLOAD_POSTS')
			console.log('Unloaded posts')
		},
		populatePosts: ({ commit, state }) => {
			fetch(state.query)
				.then(response => response.json())
				.then(data => {
					data.data.children.forEach(child => commit('ADD_POST', child.data))
					console.log('Populated posts')
				})
		},
		setSubreddit: ({ commit, state }, subreddit) => {
			commit('SET_SUBREDDIT', subreddit)
			console.log('Subreddit set to ' + state.subreddit)
			commit('SET_QUERY', 'https://www.reddit.com/r/' + subreddit + '/.json')
		},
		setQuery: ({ commit }, query) => {
			commit('SET_QUERY', query)
		},
	},
})
