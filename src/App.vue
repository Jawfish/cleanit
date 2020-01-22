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

<style lang="scss">
html {
	@apply bg-blue-900;
}

a {
	font-family: 'Rubik', sans-serif;
}

nav {
	width: 100%;
	position: fixed;
	.nav-link {
		@apply px-2 text-gray-100;
		transition: all 250ms ease;
		&:hover {
			@apply text-yellow-500;
			background-position-y: 100%;
		}
	}
	.search {
		@apply text-gray-500;
	}
}
#app-main-view {
	max-width: 1175px;
	&:empty {
		display: none;
	}
	.post {
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
