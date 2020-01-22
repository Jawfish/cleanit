<template>
	<div id="app">
		<app-nav-bar />
		<app-main-view />
	</div>
</template>
<script>
import AppMainView from '@/components/AppMainView'
import AppNavBar from '@/components/AppNavBar'

export default {
	components: {
		AppNavBar,
		AppMainView
	}
}
</script>
<style lang="postcss">
html {
	@apply bg-blue-900;
}

a {
	font-family: 'Rubik', sans-serif;
}
i {
	transition: color 250ms ease;
}
footer {
	@apply text-center py-2 text-gray-500;
}
</style>