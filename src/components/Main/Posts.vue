<template>
	<div id="app-main-view">
		<transition-group name="fade">
			<app-post class="post" v-for="(post, index) in posts" :key="index" :post="post" />
		</transition-group>
	</div>
</template>

<script>
import AppPost from './Post/Post'
import { mapActions } from 'vuex'

export default {
	name: 'Posts',
	components: { AppPost },
	methods: mapActions(['populatePosts']),
	computed: {
		posts() {
			return this.$store.getters.posts
		},
		query() {
			return this.$store.getters.query
		},
		subredditUrl() {
			return this.$store.getters.subredditUrl
		}
	},
	created() {
		this.populatePosts(this.query)
	}
}
</script>