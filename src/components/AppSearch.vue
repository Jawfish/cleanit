<template>
  <div class="flex items-center px-4 bg-gray-200 border-2 border-gray-200 rounded">
    <h3>r/</h3>
    <input
      type="text"
      name="search"
      id="search"
      class="mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
    />
    <!-- <button
      class="px-2 py-1 text-white bg-blue-500 border-2 border-blue-500 rounded hover:bg-blue-400 hover:border-blue-400"
      type="button"
    >GO</button>-->
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
*::placeholder {
  @apply text-gray-500;
}
* {
  @apply text-gray-500;
}
div {
  height: 3rem;
}
div:focus-within {
  @apply border-blue-400 border-2;
}
</style>












// <form class="w-full max-w-sm">
//   <div class="flex items-center py-2 border-b border-b-2 border-teal-500">
//     <input class="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name">
//     <button class="flex-shrink-0 px-2 py-1 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded hover:bg-teal-700 hover:border-teal-700" type="button">
//       Sign Up
//     </button>
//     <button class="flex-shrink-0 px-2 py-1 text-sm text-teal-500 border-4 border-transparent rounded hover:text-teal-800" type="button">
//       Cancel
//     </button>
//   </div>
// </form>