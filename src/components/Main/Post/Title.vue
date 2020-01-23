<template>
	<div class="title-wrapper">
		<a :href="url" class="title" v-if="title.length < 240">{{ title }}</a>
		<a :href="url" class="link" v-if="url.length < 90">{{ url }}</a>
	</div>
</template>

<script>
export default {
	props: ['title', 'url']
}
</script>