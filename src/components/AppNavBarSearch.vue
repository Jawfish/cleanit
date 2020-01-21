<template>
	<div class="flex items-center px-4 bg-gray-800 rounded-sm">
		<h3>r/</h3>
		<input
			type="text"
			name="search"
			id="search"
			class="mr-3 leading-tight text-gray-200 bg-transparent border-none appearance-none focus:outline-none"
		/>
	</div>
</template>

<script>
export default {
	name: 'AppNavBarSubSearch'
}
</script>

<style lang="postcss" scoped>
*::placeholder {
	@apply text-gray-500;
}
* {
	@apply text-gray-500;
}
@media only screen and (max-width: 860px) {
	div {
		height: 3rem;
	}
}
</style>












// <form class="w-full max-w-sm">
//   <div class="flex items-center py-2 border-b border-b-2 border-teal-500">
//     <input class="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name">
//     <button class="flex-shrink-0 px-2 py-1 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded hover:bg-teal-700 hover:border-teal-700" type="button">
//       Sign Up
//     </button>
//     <button class="flex-shrink-0 px-2 py-1 text-sm text-teal-500 border-4 border-transparent rounded hover:text-teal-800" type="button">
//       Cancel
//     </button>
//   </div>
// </form>