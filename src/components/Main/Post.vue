<template>
	<div id="post">
		<!-- <app-thumbnail :thumbnail="post.thumbnail" /> -->
		<div class="flex flex-col">
			<app-subreddit :subreddit="post.subreddit_name_prefixed" />
			<div class="flex items-center">
				<app-title :title="post.title" :url="post.url" />
				<app-info
					:score="post.ups"
					:comments="post.num_comments"
					:author="post.author"
					:time="post.created_utc"
					:permalink="post.permalink"
				/>
			</div>
		</div>
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
