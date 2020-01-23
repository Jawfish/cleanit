<template>
	<div class="flex info">
		<div class="mr-2">
			<i class="mr-1 fas fa-chevron-up"></i>
			<span>{{ score }}</span>
		</div>
		<a :href="'https://www.reddit.com' + permalink" class="mx-2">
			<i class="mr-1 fas fa-comments"></i>
			<span>{{ comments }}</span>
		</a>
		<!-- SUBMITTER -->
		<div class="mx-2">
			<i class="mr-1 fas fa-user"></i>
			<span>{{ author }}</span>
		</div>
		<!-- TIME -->
		<div class="ml-2">
			<i class="mr-1 fas fa-clock"></i>
			<span>{{ time }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: ['score', 'comments', 'author', 'time', 'permalink']
}
</script>

<style>
</style>