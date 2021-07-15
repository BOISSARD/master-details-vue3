<template>
    <div v-resize="onResizeTotal" :class="[...rootClasses]" :style="{paddingTop: `${navHeight}px`,}"><!-- pt-14 sm:pt-24    :style="{...rootStyle}" -->
        <!-- {{rootClasses}} ($event, 'nav')
		 v-resize="onResizeNav" -->
		<nav ref="nav" class="fixed w-full z-30 top-0 bg-white shadow">
            <div class="w-full flex flex-wrap items-center justify-between mt-0 py-2 px-2 lg:px-4">
                <div class="flex items-center">
                    <router-link to="/">
                        <a
                            class="
                                font-black
                                uppercase
                                text-2xl text-transparent
                                bg-clip-text bg-gradient-to-r
                                gradient-primary
                            "
                            href="#"
                        >
                            <svg
                                class="
                                    h-6
                                    fill-current
                                    inline
                                    relative
                                    -top-0.5
                                    mr-1
                                    text-primary-moins
                                "
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512.005 512.005"
                            >
                                <rect
                                    x="16.539"
                                    y="425.626"
                                    width="479.767"
                                    height="50.502"
                                    transform="matrix(1,0,0,1,0,0)"
                                />
                                <path
                                    class="plane-take-off"
                                    d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                                /></svg
                            >Entrainement
                        </a>
                    </router-link>
                </div>
				<!-- {{navHeight}} {{rootHeight}} {{footerHeight}} -->
                <div class="hidden sm:flex items-center w-auto z-20">
                    <ul class="list-reset space-x-4 mx-4">
                        <router-link
                            v-for="tab of navTabs"
                            :key="tab.name"
                            :to="tab.url"
                            tag="li"
                            active-class="nav-tab-active"
                            class="tab"
                            >{{ tab.name }}</router-link
                        >
                    </ul>
                    <button
                        class="
                            py-4
                            px-8
                            rounded-full
                            font-bold
                            shadow
                            opacity-75
                            text-white
                            hover:underline
                            hover:shadow-inner
                            bg-gradient-to-tr
                            gradient-primary
                            hover:bg-gradient-to-br
                        "
                    >
                        Action
                    </button>
                </div>
            </div>
            <hr class="h-0.5 bg-gradient-to-r gradient-primary opacity-50 my-0 py-0"/>
        </nav>
		<!--  v-resize="onResizeRoot" -->
		<div ref="root" :style="{minHeight: `calc(100% - ${footerHeight}px`}">
	        <router-view />
		</div>
		<!-- v-resize="onResizeFooter" -->
        <footer ref="footer" class="bg-gray-200 w-full h-10"></footer>
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    data: () => ({
        navTabs: [
            { name: "Contacts", url: "/contacts" },
            { name: "Tests", url: "/tests" },
            { name: "Autres", url: "/autres" },
        ],
		refsData: {},
		rootHeight: 0,
		navHeight: 0,
		footerHeight: 0,
		offsetFooter: 0, //16,
    }),
    computed: {
		pageIsSmallerThanWindow() {
			return this.navHeight + this.rootHeight + this.footerHeight
		},
		rootClasses() {
			let classes = []
			if(this.pageIsSmallerThanWindow <= window.innerHeight) {
				classes.push("h-screen")
			}
			// console.log("rootClasses", this.pageIsSmallerThanWindow, window.innerHeight, classes)
			return classes
		},
    },
    methods: {
		onResizeTotal(dim){ this.onResize(dim, 'total')},
		onResizeNav(dim){ this.onResize(dim, 'nav')},
		onResizeRoot(dim){ this.onResize(dim, 'root')},
		onResizeFooter(dim){ this.onResize(dim, 'footer')},
		onResize(dim, el) {
			let height = dim && dim.height
			// console.log("onResize", height, el, this.rootHasChildren())
			// setTimeout(() => {
			switch(el) {
				case "nav": if(height) this.navHeight = height; break;
				case "root": if(height) this.rootHeight = height; break;
				case "footer": 
					if(height) this.footerHeight = this.rootHasChildren() ? height + this.offsetFooter : height; 
				break;
				default: 
					console.log("onResize", el, this.rootHasChildren(), this.refsData.root && this.refsData.root)
					this.navHeight = this.refsData.nav && this.refsData.nav.clientHeight || 0
					this.rootHeight = this.refsData.root && this.refsData.root.clientHeight || 0
					this.footerHeight = this.refsData.footer ? this.rootHasChildren() ? this.refsData.footer.clientHeight + this.offsetFooter : this.refsData.footer.clientHeight : 0
					console.log("onResize", el, this.navHeight, this.rootHeight, this.footerHeight)
					break;
			}
			// }, 200)
		},
		rootHasChildren() {
			// console.log(this.refsData.root, this.refsData.root && this.refsData.root.childNodes)
			let retour = false
			this.refsData.root.childNodes.forEach(child => {
				let nodeName = String(child.nodeName).toLowerCase()
				// console.log(child.nodeType, nodeName)
				let acceptedTypes = [1]
				if(acceptedTypes.includes(child.nodeType) && nodeName !== "object"){
					retour = true
				}
			})
			return retour
		}
    },
	mounted() {
		this.refsData = this.$refs
		// console.log("mounted"); 
		// setTimeout(() => {
			this.onResizeTotal(null)
		// }, 200)
	},
	watch: {
		// 'refsData.root.clientHeight'() {
		// 	console.log('refsData.root.clientHeight', this.refsData.root.clientHeight)
		// }
	}
});
</script>

<style lang="postcss">
.tab-hover {
    @apply border-b-2 border-black;
}
.tab:hover {
    @apply tab-hover;
}
.nav-tab-active {
    @apply font-bold tab-hover;
}
</style>