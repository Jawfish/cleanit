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