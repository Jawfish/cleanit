<template>
	<div class="title-wrapper">
		<a :href="url" class="title">{{ title }}</a>
		<a :href="url" class="link">{{ url }}</a>
	</div>
</template>

<script>
export default {
	props: ['title', 'url']
}
</script>