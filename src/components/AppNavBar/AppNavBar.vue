<template>
	<nav>
		<app-nav-bar-search />
		<div class="nav-links">
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