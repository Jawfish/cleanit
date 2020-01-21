<template>
  <div id="app">
    <app-nav-bar class="relative z-10" />
    <router-view class="router-view" />
    <app-footer class="app-footer" />
  </div>
</template>
<script>
import AppNavBar from '@/components/AppNavBar'
import AppFooter from '@/components/AppFooter'
export default {
  components: {
    AppNavBar,
    AppFooter
  }
}
</script>
<style lang="postcss">
body {
  @apply bg-gray-100 text-gray-900;
}
a {
  font-family: 'Rubik', sans-serif;
}
i {
  transition: color 250ms ease;
}

.app-footer {
  position: fixed;
  bottom: 0;
}
</style>