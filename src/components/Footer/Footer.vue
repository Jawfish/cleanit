// TODO: quick links to trending/hot/top here
<template>
	<footer
		class="flex justify-between w-full px-8 py-1 py-4 mx-auto text-2xl text-gray-900 bg-white border-t-2 border-blue-500"
	>
		<div class="footer-link" :to="{ name: 'home' }">
			<i class="fas fa-copyright"></i> Copyright or something
		</div>
		<div class="footer-link" :to="{ name: 'Hot' }">
			<i class="fas"></i> More stuff here
		</div>
		<div class="footer-link" :to="{ name: 'Top' }">
			<i class="fas"></i> Im a footer
		</div>

		<div class="footer-link" :to="{ name: 'placholder' }">
			<!-- Scroll to top -->
			<i class="fas fa-level-up-alt"></i> Top
		</div>
	</footer>
</template>
<script>
export default {
	name: 'AppFooter',
	data() {
		return {}
	}
}
</script>
