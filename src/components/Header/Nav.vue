<template>
	<nav>
		<app-search />
		<div class="nav-links">
			<app-link name="Home" query="https://www.reddit.com/r/all/.json" icon="fa-home" />
			<app-link name="Hot" query="https://www.reddit.com/hot/.json" icon="fa-fire" />
			<app-link name="Top" query="https://www.reddit.com/top/.json" icon="fa-thumbs-up" />
			<app-link name="Rising" query="https://www.reddit.com/rising/.json" icon="fa-rocket" />
			<app-link name="New" query="https://www.reddit.com/new/.json" icon="fa-star" />
		</div>
	</nav>
</template>
<script>
import AppSearch from './Search'
import AppLink from './Link'

export default {
	name: 'Nav',
	components: { AppSearch, AppLink }
}
</script>