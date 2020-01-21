<template>
  <div class="px-8 py-4 mx-auto text-center bg-white rounded-b-sm shadow" id="app-main-view">
    <app-post
      class="post"
      v-for="post in posts"
      :key="post.permalink"
      :user="post.author"
      :text="post.selftext"
      :title="post.title"
      :score="post.ups"
      :link="post.url"
      :type="post.link_flair_type"
      :flairs="post.link_flair_richtext"
      :date="post.created_utc"
      :thumbnail="post.thumbnail"
    />
    <button class="bg-blue-200" @click="getPosts('https://www.reddit.com/r/wow/.json')">get posts</button>
  </div>
</template>

<script>
import AppPost from '@/components/AppPost'

export default {
  name: 'AppMainview',
  components: { AppPost },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    async getPosts(query) {
      fetch(query)
        .then(response => response.json())
        .then(data =>
          data.data.children.forEach(child => this.posts.push(child.data))
        )
      console.log(this.posts)
    }
  },
  mounted() {
    this.getPosts('https://www.reddit.com/.json')
  }
}
</script>

<style lang="postcss" scoped>
#app-main-view {
  max-width: 1175px;
}
.post:not(:first-child) {
  /* @apply my-4; */
}
.post:not(:last-child) {
  @apply border-b border-gray-300;
}
@media only screen and (max-width: 768px) {
  #app-main-view {
    max-width: 100vw;
    padding: 0;
  }
}
</style>