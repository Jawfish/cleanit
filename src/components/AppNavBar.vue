// TODO: quick links to trending/hot/top here
<template>
  <nav class="flex justify-between pt-2 pb-3 text-2xl text-gray-600 bg-blue-800 shadow-lg">
    <AppNavBarSearch class="m-2" />

    <div class="flex items-center justify-between mb-1 leading-tight nav-links">
      <router-link class="nav-link" :to="{ name: 'home' }">
        <i class="mr-2 fas fa-home"></i>
        <span>Home</span>
      </router-link>
      <router-link class="nav-link" :to="{ name: 'hot' }">
        <i class="mr-2 fas fa-fire"></i>
        <span>Hot</span>
      </router-link>
      <router-link class="nav-link" :to="{ name: 'top' }">
        <i class="mr-2 fas fa-thumbs-up"></i>
        <span>Top</span>
      </router-link>

      <router-link class="nav-link" :to="{ name: 'rising' }">
        <i class="mr-2 fas fa-rocket"></i>
        <span>Rising</span>
      </router-link>
      <router-link class="nav-link" :to="{ name: 'new' }">
        <i class="mr-2 fas fa-star"></i>
        <span>New</span>
      </router-link>
    </div>
  </nav>
</template>
<script>
import AppNavBarSearch from '@/components/AppNavBarSearch'

export default {
  name: 'AppNavBar',
  components: { AppNavBarSearch },
  data() {
    return {}
  }
}
</script>

<style lang="postcss" scoped>
nav {
  width: 100%;
  position: fixed;
}

.fas {
  @apply text-gray-100;
}
.nav-icon {
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
}
.nav-link {
  @apply px-2  text-gray-100;

  transition: all 250ms ease;
}
.nav-link:hover {
  @apply text-yellow-500;
  background-position-y: 100%;
}
.nav-link:hover i {
  @apply text-yellow-500;
}
.router-link-exact-active {
  @apply border-b-2 border-yellow-500;
  background-position-y: 5%;
}
.router-link-exact-active > i {
  @apply text-yellow-500;
}
.search {
  min-width: 100px;
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
</style>
