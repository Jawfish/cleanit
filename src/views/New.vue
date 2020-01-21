<template>
  <div>
    <app-main-view page="new" query="https://www.reddit.com/new/.json" />
  </div>
</template>

<script>
import AppMainView from '@/components/AppMainView'
export default {
  name: 'new',
  components: { AppMainView }
}
</script>
