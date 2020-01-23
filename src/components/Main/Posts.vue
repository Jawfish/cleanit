<template>
	<div id="app-main-view">
		<app-post class="post" v-for="(post, index) in posts" :key="index" :post="post" />
	</div>
</template>

<script>
import AppPost from './Post'
import { mapActions } from 'vuex'

export default {
	name: 'Posts',
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