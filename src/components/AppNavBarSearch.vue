// TODO: when a user types in a subreddit, set the subreddit in the store
<template>
	<div class="flex items-center px-4 bg-gray-800 rounded-sm">
		<h3>r/</h3>
		<input
			type="text"
			name="search"
			v-model="subreddit"
			class="mr-3 leading-tight text-gray-200 bg-transparent border-none appearance-none search focus:outline-none"
		/>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	name: 'AppNavBarSubSearch',
	methods: mapActions(['setSubreddit']),
	computed: {
		subreddit() {
			return this.$store.getters.subreddit
		}
	}
}
</script>