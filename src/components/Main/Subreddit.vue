<template>
	<span
		:href="'https://www.reddit.com/' + subreddit"
		class="self-start text-xs text-gray-500 subreddit"
		@click="setSubreddit(subreddit)"
	>{{subreddit}}</span>
</template>

<script>
export default {
	props: ['subreddit']
}
</script>

<style>
</style>