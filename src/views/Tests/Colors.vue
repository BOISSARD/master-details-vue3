<template>
  <div class="container">
    <h2>Les couleurs</h2>
    <div v-for="color in colors">
      <div class="flex flex-wrap lg:flex-nowrap lg:space-x-2 font-black overflow-hidden">
        <div
          class="conteneurColor shadow-xl"
          :class="[`bg-${color}`]"
        >
          <p class="textColor text-white">{{ color }}</p>
        </div>
        <div 
            class="conteneurColor shadow-xl"
            :class="['bg-gradient-to-tr',`gradient-${color}`]"
        >
          <p class="textColor text-white">{{ color }}</p>
        </div>
        <div 
            class="conteneurColor"            
        >
          <p 
            class="textColor text-transparent bg-clip-text filter drop-shadow-xl" 
            :class="['bg-gradient-to-r',`gradient-${color}`]"
          >{{ color }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "colors",
  data: () => ({
    colors: [
      "primary",
      "secondary",
      "neutral",
      "success",
      "warning",
      "error",
      "infos",
    ],
  }),
  computed: {},
};
</script>

<style lang="postcss">
.conteneurColor {
  @apply w-full flex justify-center my-1 px-5 py-2 rounded-xl
}
@screen lg {
  .conteneurColor {
    @apply w-1/3 py-5
  }
}

.textColor {
  @apply uppercase text-3xl
}
@screen lg {
  .textColor {
    @apply text-5xl
  }
}
</style>
