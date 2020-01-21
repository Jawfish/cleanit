<template>
  <div>
    <app-main-view page="rising" query="https://www.reddit.com/rising/.json" />
  </div>
</template>

<script>
import AppMainView from '@/components/AppMainView'
export default {
  name: 'rising',
  components: { AppMainView }
}
</script>
