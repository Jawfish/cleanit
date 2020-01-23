<template>
	<nav class="flex justify-between px-8 pt-2 pb-3 text-2xl text-gray-600 bg-blue-800 shadow-lg">
		<AppNavBarSearch class="m-2" />
		<div class="flex items-center justify-between mb-1 leading-tight nav-links">
			<app-nav-bar-link name="Home" query="https://www.reddit.com/r/all/.json" icon="fa-home" />
			<app-nav-bar-link name="Hot" query="https://www.reddit.com/hot/.json" icon="fa-fire" />
			<app-nav-bar-link name="Top" query="https://www.reddit.com/top/.json" icon="fa-thumbs-up" />
			<app-nav-bar-link name="Rising" query="https://www.reddit.com/rising/.json" icon="fa-rocket" />
			<app-nav-bar-link name="New" query="https://www.reddit.com/new/.json" icon="fa-star" />
		</div>
	</nav>
</template>
<script>
import AppNavBarSearch from './AppNavBarSearch'
import AppNavBarLink from './AppNavBarLink'

export default {
	name: 'AppNavBar',
	components: { AppNavBarSearch, AppNavBarLink }
}
</script>