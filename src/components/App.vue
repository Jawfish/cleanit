<template>
	<div id="app">
		<app-nav-bar />
		<app-posts />
	</div>
</template>
<script>
import AppPosts from '@/components/Main/Posts'
import AppNavBar from '@/components/Header/Nav'

export default {
	components: {
		AppNavBar,
		AppPosts
	}
}
</script>

<style lang="scss">
html {
	@apply bg-blue-900;
}

a {
	font-family: 'Rubik', sans-serif;
}

nav {
	@apply flex justify-between px-8 pt-2 pb-3 text-2xl text-gray-600 bg-blue-800 shadow-lg fixed;
	width: 100%;
	top: 0;
	left: 0;
	.nav-link {
		@apply mx-1 text-gray-100;
		transition: all 250ms ease;
		i {
			@apply mx-1;
		}
		&:hover {
			cursor: pointer;
			@apply text-yellow-500;
			background-position-y: 100%;
		}
		// nav-links; outer container
		&s {
			@apply flex items-center justify-between mb-1 leading-tight;
		}
	}
	.search {
		@apply text-gray-500;
	}
}
#app-main-view {
	@apply mt-20 pt-2 mb-4 px-8 py-2 mx-auto text-center bg-white rounded-sm;
	max-width: 1175px;
	&:empty {
		display: none;
	}
	#post {
		@apply flex px-4 py-4;
		.content {
			max-width: 110ch;
		}
		.subreddit {
			cursor: pointer;
		}
		.thumbnail {
			width: 135px;
			height: 135px;
			display: none;
		}
		&:not(:last-child) {
			@apply border-b border-gray-300;
		}
	}
}

@media only screen and (max-width: 1250px) {
	nav {
		@apply text-xl;
	}
}
@media only screen and (max-width: 860px) {
	nav {
		width: 100vw;
	}
	nav i {
		display: none;
	}
}

@media only screen and (max-width: 860px) {
	div {
		height: 3rem;
	}
}

@media only screen and (max-width: 768px) {
	#app-main-view {
		max-width: 100vw;
		padding: 0;
	}
}

@media only screen and (max-width: 768px) {
	.thumbnail {
		display: none;
	}
	.post {
		overflow: scroll;
		padding: 1rem 0 1rem 0;
	}
	.info {
		@apply py-1;
	}
	.content {
		@apply pr-2;
		max-width: 100%;
	}
}
</style>
