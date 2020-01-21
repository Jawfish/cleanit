<template>
	<div class="px-8 py-2 mx-auto text-center bg-white rounded-sm" id="app-main-view">
		<app-post class="post" v-for="post in posts" :key="post.permalink" :post="post" />
	</div>
</template>

<script>
import AppPost from '@/components/AppPost'
import { mapActions } from 'vuex'

export default {
	name: 'AppMainview',
	props: ['page', 'query'],
	components: { AppPost },
	methods: mapActions(['populatePosts', 'unloadPosts']),
	computed: {
		posts() {
			return this.$store.getters.posts[this.page]
		}
	},
	created() {
		this.populatePosts({
			query: this.query,
			page: this.page
		})
	},
	destroyed() {
		this.unloadPosts(this.page)
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