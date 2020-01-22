<template>
	<nav class="flex justify-between pt-2 pb-3 text-2xl text-gray-600 bg-blue-800 shadow-lg">
		<AppNavBarSearch class="m-2" />
		<div class="flex items-center justify-between mb-1 leading-tight nav-links">
			<div
				class="nav-link"
				@click="unloadPosts(), setQuery('https://www.reddit.com/r/all/.json'), populatePosts() "
			>
				<i class="mr-2 fas fa-home"></i>
				<span>Home</span>
			</div>
			<div
				class="nav-link"
				@click="unloadPosts(),setQuery('https://www.reddit.com/hot/.json'), populatePosts()"
			>
				<i class="mr-2 fas fa-fire"></i>
				<span>Hot</span>
			</div>
			<div
				class="nav-link"
				@click="unloadPosts(),setQuery('https://www.reddit.com/top/.json'), populatePosts()"
			>
				<i class="mr-2 fas fa-thumbs-up"></i>
				<span>Top</span>
			</div>
			<div
				class="nav-link"
				@click="unloadPosts(),setQuery('https://www.reddit.com/rising/.json'), populatePosts()"
			>
				<i class="mr-2 fas fa-rocket"></i>
				<span>Rising</span>
			</div>
			<div
				class="nav-link"
				@click="unloadPosts(),setQuery('https://www.reddit.com/new/.json'), populatePosts()"
			>
				<i class="mr-2 fas fa-star"></i>
				<span>New</span>
			</div>
		</div>
	</nav>
</template>
<script>
import AppNavBarSearch from '@/components/AppNavBarSearch'
import { mapActions } from 'vuex'

export default {
	name: 'AppNavBar',
	components: { AppNavBarSearch },
	methods: mapActions(['setQuery', 'populatePosts', 'unloadPosts'])
}
</script>