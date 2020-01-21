<template>
  <div id="app">
    <app-nav-bar class />
    <router-view class="pt-24 router-view" />
    <footer>hi</footer>
  </div>
</template>
<script>
import AppNavBar from '@/components/AppNavBar'
export default {
  components: {
    AppNavBar
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