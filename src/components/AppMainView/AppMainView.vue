<template>
	<div id="app-main-view">
		<app-main-view-post class="post" v-for="(post, index) in posts" :key="index" :post="post" />
	</div>
</template>

<script>
import AppMainViewPost from './AppMainViewPost'
import { mapActions } from 'vuex'

export default {
	name: 'AppMainview',
	components: { AppMainViewPost },
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