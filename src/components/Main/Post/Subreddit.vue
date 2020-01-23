<template>
	<div
		class="subreddit"
		:href="'https://www.reddit.com/' + subreddit"
		@click="unloadPosts(), setQuery('https://www.reddit.com/r/' + subreddit + '/.json'), populatePosts()"
	>r/{{subreddit}}</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	props: ['subreddit'],
	methods: mapActions([
		'setSubreddit',
		'setQuery',
		'unloadPosts',
		'populatePosts'
	])
}
</script>