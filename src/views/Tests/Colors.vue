<template>
  <div class="container mx-auto">
    <h2>Les couleurs</h2>
    <div v-for="color in colors">
      <div class="flex font-black">
        <div
          class="flex-1 flex justify-center m-3 ml-0 p-5 rounded-xl shadow-xl"
          :class="[`bg-${color}`]"
        >
          <p class="uppercase text-6xl text-white">{{ color }}</p>
        </div>
        <div 
            class="flex-1 flex justify-center m-3 mr-0 p-5 rounded-xl shadow-xl"
            :class="['bg-gradient-to-tr',`gradient-${color}`]"
        >
          <p class="uppercase text-6xl text-white">{{ color }}</p>
        </div>
        <div 
            class="flex-1 flex justify-center m-3 mr-0 p-5 rounded-xl"            
        >
          <p 
            class="uppercase text-6xl text-transparent bg-clip-text filter drop-shadow-xl" 
            :class="['bg-gradient-to-tr',`gradient-${color}`]"
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

<style></style>
