<template>
    <nav class="fixed w-full z-30 top-0 bg-transparent">
      <div class="w-full flex flex-wrap items-center justify-between mt-0 py-2 px-2 lg:px-4 ">
        <div class="flex items-center">
        	<router-link to="/">
				<a class="font-black uppercase text-2xl text-transparent bg-clip-text bg-gradient-to-r gradient-primary" href="#">
					<svg class="h-6 fill-current inline relative -top-0.5 mr-1 text-primary-moins" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
						<rect x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
						<path
							class="plane-take-off"
							d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
						/>
					</svg>Entrainement
				</a>
            </router-link>
        </div>
        <div class="hidden sm:flex items-center w-auto z-20" >
          <ul class="list-reset space-x-4 mx-4">
			<router-link v-for="tab of navTabs" :key="tab.name"
				:to="tab.url" 
				tag="li" 
				active-class="nav-tab-active"
				class="tab"
			>{{tab.name}}</router-link>
          </ul>
          <button 
		  	class="py-4 px-8 rounded-full font-bold shadow opacity-75 text-white hover:underline hover:shadow-inner bg-gradient-to-tr gradient-primary hover:bg-gradient-to-br"
		   >
            Action
          </button>
        </div>
      </div>
      <hr class="h-0.5 bg-gradient-to-r gradient-primary opacity-50 my-0 py-0" />
    </nav>
    <router-view class="mt-14 sm:mt-24"/><!-- mt-14 lg:mt-24 -->
</template>

<script lang="ts">
export default {
	data: () => ({
		navTabs: [
			{name: "Contacts", url: "/contacts"},
			{name: "Tests", url: "/tests"},
			{name: "Autres", url: "/autres"},
		]
	})
}
</script>

<style lang="postcss">
.tab-hover {
	@apply border-b-2 border-black
}
.tab:hover {
	@apply tab-hover
}
.nav-tab-active {
	@apply font-bold tab-hover
}
</style>