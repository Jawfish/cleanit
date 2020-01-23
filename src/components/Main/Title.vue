<template>
	<div>
		<div>
			<!-- TITLE -->
			<a
				:href="url"
				class="mb-1 text-xl leading-none text-left text-gray-800"
				v-if="title.length < 240"
			>{{ title }}</a>
			<a
				:href="url"
				class="mb-1 text-xl leading-tight text-left text-gray-800"
				v-else
			>{{ title.substring(0,240) + '...' }}</a>
		</div>
		<div class="flex flex-col items-start text-gray-600">
			<!-- LINK -->

			<a
				:href="url"
				class="mb-1 italic leading-none text-left text-gray-500"
				v-if="url.length < 90"
			>{{ url }}</a>
			<a
				:href="url"
				class="mb-1 italic leading-none text-left text-gray-500"
				v-else
			>{{ url.substring(0,90) + '...' }}</a>
		</div>
	</div>
</template>

<script>
export default {
	props: ['title', 'url']
}
</script>

<style>
</style>