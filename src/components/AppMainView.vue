<template>
	<div class="px-8 py-2 pt-20 mx-auto text-center bg-white rounded-sm" id="app-main-view">
		<app-post class="post" v-for="(post, index) in posts" :key="index" :post="post" />
	</div>
</template>

<script>
import AppPost from './AppPost.vue'
import { mapActions } from 'vuex'

export default {
	name: 'AppMainview',
	components: { AppPost },
	methods: mapActions(['populatePosts', 'unloadPosts']),
	computed: {
		posts() {
			return this.$store.getters.posts
		},
		query() {
			return this.$store.getters.query
		}
	},
	created() {
		this.populatePosts(this.query)
	}
}
</script>

<style lang="postcss" scoped>
#app-main-view {
	max-width: 1175px;
}
#app-main-view:empty {
	display: none;
}
.post:not(:first-child) {
	/* @apply my-4; */
}
.post:not(:last-child) {
	@apply border-b border-gray-300;
}
@media only screen and (max-width: 768px) {
	#app-main-view {
		max-width: 100vw;
		padding: 0;
	}
}
</style>