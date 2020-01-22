<template>
	<div class="flex px-4 py-4 post">
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

				<!-- FLAIR -->
				<!-- <div class="flex text-xs text-gray-700">
		<div class="px-1 mx-1 bg-gray-400 rounded">{{type}}</div>
		<div
            v-for="(flair, index) in flairs"
            :key="index"
            class="px-1 mx-1 bg-gray-400 rounded"
		>{{flair}}</div>
				</div>-->
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
			<!-- CONTENT
		<div
        class="leading-tight text-left text-gray-900 content"
        v-if="post.selftext.length < 400"
		{{ post.selftext }}</div>
		<div
        class="leading-tight text-left text-gray-900 content"
        v-else
			>{{ post.selftext.substring(0,400) + '...' }}</div>-->
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

<style lang="postcss" scoped>
.content {
	max-width: 110ch;
}
.subreddit {
	cursor: pointer;
}
.thumbnail {
	width: 135px;
	height: 135px;
	display: none;
}
i {
	@apply text-gray-500;
}
@media only screen and (max-width: 768px) {
	.thumbnail {
		display: none;
	}
	.post {
		overflow: scroll;
		padding: 1rem 0 1rem 0;
	}
	.info {
		@apply py-1;
	}
	.content {
		@apply pr-2;
		max-width: 100%;
	}
}
</style>