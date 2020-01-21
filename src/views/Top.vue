<template>
  <div>
    <app-main-view page="top" query="https://www.reddit.com/top/.json" />
  </div>
</template>

<script>
import AppMainView from '@/components/AppMainView'
export default {
  name: 'top',
  components: { AppMainView }
}
</script>
