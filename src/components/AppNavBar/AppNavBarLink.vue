<template>
	<div class="nav-link" @click="unloadPosts(), setQuery(query), populatePosts()">
		<i class="fas" :class="icon"></i>
		<span>{{ name }}</span>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	props: ['query', 'icon', 'name'],
	methods: mapActions(['setQuery', 'populatePosts', 'unloadPosts'])
}
</script>