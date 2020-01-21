<template>
	<div id="app">
		<app-nav-bar class />
		<router-view class="pt-24 router-view" />
		<footer>hi</footer>
	</div>
</template>
<script>
import AppNavBar from '@/components/AppNavBar'
import { mapActions } from 'vuex'

export default {
	components: {
		AppNavBar
	},
	methods: mapActions(['populatePosts', 'unloadPosts'])
}
</script>
<style lang="postcss">
html {
	@apply bg-blue-900;
}

a {
	font-family: 'Rubik', sans-serif;
}
i {
	transition: color 250ms ease;
}
footer {
	@apply text-center py-2 text-gray-500;
}
</style>