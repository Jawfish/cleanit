<template>
	<div class="flex items-center px-4 bg-gray-800 rounded-sm">
		<h3>r/</h3>
		<form
			@submit.prevent="unloadPosts(), setQuery('https://www.reddit.com/r/' + subreddit + '/.json'), populatePosts()"
		>
			<input
				type="text"
				name="search"
				v-model="subreddit"
				class="mr-3 leading-tight text-gray-200 bg-transparent border-none appearance-none search focus:outline-none"
			/>
			<button type="submit" class="submit">GO</button>
		</form>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	name: 'AppNavBarSearch',
	methods: mapActions(['unloadPosts', 'setQuery', 'populatePosts']),
	data() {
		return {
			subreddit: ''
		}
	}
}
</script>