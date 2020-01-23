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
* {
	font-family: 'Rubik', sans-serif;
}
html {
	@apply bg-blue-900;
}
nav {
	@apply flex justify-between px-8 py-3 text-2xl text-gray-600 bg-blue-800 shadow-lg leading-none fixed;
	width: 100%;
	top: 0;
	left: 0;
	.nav-link {
		@apply mx-1 text-gray-100 leading-none;
		transition: all 150ms ease;
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
	.post {
		@apply flex flex-col px-4 py-4 items-start text-gray-400;
		transition: all 0.5s;
		&:not(:last-child) {
			@apply border-b border-gray-300;
		}
		.title-wrapper {
			@apply flex flex-col;
			.title {
				@apply mb-1 text-xl leading-none text-left text-gray-800;
				transition: all 149ms ease;
				&:hover {
					@apply text-gray-600;
				}
			}
			.link {
				@apply text-sm mb-1 italic leading-none text-left text-gray-500;
			}
		}
		.subreddit {
			@apply self-start text-xs text-gray-500;
			cursor: pointer;
		}
		.info {
			@apply flex text-gray-500 justify-between;
			.score,
			.comments,
			.author,
			.time {
				@apply text-sm;
				&:not(:first-child) {
					@apply mx-1;
				}
				i {
					@apply mx-1 text-gray-400;
				}
			}
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

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
