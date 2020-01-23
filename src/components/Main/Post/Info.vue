<template>
	<div class="info">
		<div class="score">
			<i class="fas fa-chevron-up"></i>
			<span>{{ score }}</span>
		</div>
		<a :href="'https://www.reddit.com' + permalink" class="comments">
			<i class="fas fa-comments"></i>
			<span>{{ comments }}</span>
		</a>
		<div class="author">
			<i class="fas fa-user"></i>
			<span>{{ author }}</span>
		</div>
		<div class="time">
			<i class="fas fa-clock"></i>
			<span>{{ time }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: ['score', 'comments', 'author', 'time', 'permalink']
}
</script>