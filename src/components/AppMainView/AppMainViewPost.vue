<template>
	<div id="post">
		<!-- THUMBNAIL -->
		<img
			v-if="post.thumbnail !== 'self' && post.thumbnail !== 'default' && post.thumbnail !== 'nsfw'"
			:src="post.thumbnail"
			class="self-center rounded-sm thumbnail"
		/>

		<div class="flex flex-col items-start justify-between h-auto ml-4">
			<div class="flex flex-col items-start"></div>
		</div>
		<div class="flex flex-col">
			<!-- SUBREDDIT -->
			<span
				:href="'https://www.reddit.com/' + post.subreddit_name_prefixed"
				class="self-start text-xs text-gray-500 subreddit"
				@click="setSubreddit(post.subreddit)"
			>{{post.subreddit_name_prefixed}}</span>
			<div class="flex items-center">
				<!-- TITLE -->
				<a
					:href="post.url"
					class="mb-1 text-xl leading-none text-left text-gray-800"
					v-if="post.title.length < 240"
				>{{ post.title }}</a>
				<a
					:href="post.url"
					class="mb-1 text-xl leading-tight text-left text-gray-800"
					v-else
				>{{ post.title.substring(0,240) + '...' }}</a>
			</div>
			<div class="flex flex-col items-start text-gray-600">
				<!-- LINK -->
				<a
					:href="post.url"
					class="mb-1 italic leading-none text-left text-gray-500"
					v-if="post.url.length < 90"
				>{{ post.url }}</a>
				<a
					:href="post.url"
					class="mb-1 italic leading-none text-left text-gray-500"
					v-else
				>{{ post.url.substring(0,90) + '...' }}</a>

				<div class="flex info">
					<!-- SCORE -->
					<div class="mr-2">
						<i class="mr-1 fas fa-chevron-up"></i>
						<span>{{ post.ups }}</span>
					</div>
					<a :href="'https://www.reddit.com' + post.permalink" class="mx-2">
						<i class="mr-1 fas fa-comments"></i>
						<span>{{ post.num_comments }}</span>
					</a>
					<!-- SUBMITTER -->
					<div class="mx-2">
						<i class="mr-1 fas fa-user"></i>
						<span>{{ post.author }}</span>
					</div>
					<!-- TIME -->
					<div class="ml-2">
						<i class="mr-1 fas fa-clock"></i>
						<span>{{ post.created_utc }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	name: 'AppPost',
	data() {
		return {
			truncatedLink: ''
		}
	},
	props: ['post'],
	methods: mapActions(['setSubreddit'])
}
</script>
