// TODO: quick links to trending/hot/top here
<template>
  <nav
    class="flex items-center justify-between px-8 py-2 mx-auto text-2xl text-gray-600 bg-white border-blue-400 rounded-b-sm shadow"
  >
    <router-link class="nav-link" :to="{ name: 'home' }">
      <i class="fas fa-home"></i> Home
    </router-link>
    <router-link class="nav-link" :to="{ name: 'hot' }">
      <i class="fas fa-fire"></i> Hot
    </router-link>
    <router-link class="nav-link" :to="{ name: 'top' }">
      <i class="fas fa-chart-bar"></i> Top
    </router-link>
    <AppSearch class="h-16 search" />

    <router-link class="nav-link" :to="{ name: 'all' }">
      <i class="fas fa-stream"></i> All
    </router-link>
    <router-link class="nav-link" :to="{ name: 'rising' }">
      <i class="fas fa-chart-line"></i> Rising
    </router-link>
    <router-link class="nav-link" :to="{ name: 'new' }">
      <i class="fas fa-star"></i> New
    </router-link>
  </nav>
</template>
<script>
import AppSearch from '@/components/AppSearch'

export default {
  name: 'AppNavbar',
  components: { AppSearch },
  data() {
    return {}
  }
}
</script>

<style lang="postcss" scoped>
nav {
  max-width: 1200px;
}
.fas {
  @apply text-blue-400;
}
.nav-link {
  @apply px-2  text-gray-800;
  background-position-y: -0%;
  background-image: linear-gradient(white 50%, #63b3ed 50%);
  transition: all 250ms ease;
  transition-property: background, color;
  background-size: 2px;
  background-size: auto 200%;
}
.nav-link:hover {
  @apply text-gray-100;
  background-position-y: 100%;
}

.nav-link:hover i {
  @apply text-gray-100;
}
.router-link-exact-active {
  @apply text-gray-900;
  background-position-y: 5%;
}
@media only screen and (max-width: 768px) {
  nav {
    @apply pb-20;
    width: 100vw;
    font-size: 1rem;
  }
  nav i {
    display: none;
  }
  .search {
    @apply mx-auto;
    position: absolute;
    top: 3rem;
    width: 85vw;
    left: auto;
  }
}
</style>
