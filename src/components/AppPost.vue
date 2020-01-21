<template>
  <div class="flex px-4 py-4 post">
    <!-- THUMBNAIL -->
    <img
      v-if="thumbnail !== 'self' && thumbnail !== 'default' && thumbnail !== 'nsfw'"
      :src="thumbnail"
      class="self-center rounded-sm thumbnail"
    />

    <div class="flex flex-col items-start justify-between h-auto ml-4">
      <div class="flex flex-col items-start"></div>
    </div>
    <div class="flex flex-col">
      <div class="flex items-center">
        <!-- TITLE -->
        <a
          :href="link"
          class="text-xl leading-none text-left text-gray-800"
          v-if="title.length < 240"
        >{{ title }}</a>
        <div
          class="text-xl leading-none text-left text-gray-800"
          v-else
        >{{ title.substring(0,240) + '...' }}</div>

        <!-- FLAIR -->
        <!-- <div class="flex text-xs text-gray-700">
          <div class="px-1 mx-1 bg-gray-400 rounded">{{type}}</div>
          <div
            v-for="(flair, index) in flairs"
            :key="index"
            class="px-1 mx-1 bg-gray-400 rounded"
          >{{flair}}</div>
        </div>-->
      </div>
      <div class="flex flex-col items-start text-gray-600">
        <!-- LINK -->
        <a
          :href="link"
          class="italic leading-none text-left text-gray-500"
          v-if="link.length < 90"
        >{{ link }}</a>
        <a
          :href="link"
          class="italic leading-none text-left text-gray-500"
          v-else
        >{{ link.substring(0,90) + '...' }}</a>

        <div class="flex info">
          <!-- SCORE -->
          <div>
            <i class="mr-1 fas fa-thumbs-up"></i>
            <span>{{ score }}</span>
          </div>
          <!-- SUBMITTER -->
          <div class="mx-4">
            <i class="mr-1 fas fa-user"></i>
            <span>{{ user }}</span>
          </div>
          <!-- TIME -->
          <div>
            <i class="mr-1 fas fa-clock"></i>
            <span>{{ date }}</span>
          </div>
        </div>
      </div>
      <!-- CONTENT -->
      <div class="leading-tight text-left text-gray-900 content" v-if="text.length < 400">{{ text }}</div>
      <div
        class="leading-tight text-left text-gray-900 content"
        v-else
      >{{ text.substring(0,400) + '...' }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPost',
  data() {
    return {
      truncatedLink: ''
    }
  },
  props: [
    'title',
    'link',
    'user',
    'score',
    'text',
    'type',
    'flairs',
    'date',
    'thumbnail'
  ]
}
</script>

<style lang="postcss" scoped>
.content {
  max-width: 110ch;
}
.thumbnail {
  width: 135px;
  height: 135px;
  display: none;
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