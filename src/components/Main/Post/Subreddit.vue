<template>
	<div
		class="subreddit"
		:href="'https://www.reddit.com/' + subreddit"
		@click="setSubreddit(subreddit)"
	>r/{{subreddit}}</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	props: ['subreddit'],
	methods: mapActions(['setSubreddit'])
}
</script>