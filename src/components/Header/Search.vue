<template>
	<div class="search">
		<h3>r/</h3>
		<form
			@submit.prevent="unloadPosts(), setQuery('https://www.reddit.com/r/' + subreddit + '/.json'), populatePosts(), setSubreddit(subreddit)"
		>
			<input type="text" name="search" v-model="subreddit" />
			<button type="submit" class="submit">GO</button>
		</form>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	name: 'AppNavBarSearch',
	methods: mapActions([
		'unloadPosts',
		'setQuery',
		'populatePosts',
		'setSubreddit'
	]),
	data() {
		return {
			subreddit: ''
		}
	}
}
</script>