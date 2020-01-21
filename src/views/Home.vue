<template>
  <div>
    <app-main-view page="home" query="https://www.reddit.com/r/all/.json" />
  </div>
</template>

<script>
import AppMainView from '@/components/AppMainView'
export default {
  name: 'home',
  components: { AppMainView }
}
</script>
