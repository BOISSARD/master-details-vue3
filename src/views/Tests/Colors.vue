<template>
  <div class="container mx-auto">
    <h2>Les couleurs</h2>
    <div v-for="color in colors">
      <div class="flex font-black">
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

<style>
.conteneurColor {
  @apply flex-1 flex justify-center m-3 p-5 rounded-xl
}

.textColor {
  @apply uppercase text-5xl
}
</style>
