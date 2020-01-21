<template>
  <div>
    <app-main-view page="hot" query="https://www.reddit.com/hot/.json" />
  </div>
</template>

<script>
import AppMainView from '@/components/AppMainView'
export default {
  name: 'hot',
  components: { AppMainView }
}
</script>
