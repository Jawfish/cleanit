<template>
	<div class="post">
		<app-subreddit :subreddit="post.subreddit" />
		<app-title :title="post.title" :url="post.url" />
		<app-info
			:score="post.ups"
			:comments="post.num_comments"
			:author="post.author"
			:time="post.created_utc"
			:permalink="post.permalink"
		/>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import AppInfo from './Info'
import AppSubreddit from './Subreddit'
import AppTitle from './Title'

export default {
	name: 'Post',
	components: {
		AppInfo,
		AppSubreddit,
		AppTitle
	},
	props: ['post'],
	methods: mapActions(['setSubreddit'])
}
</script>
