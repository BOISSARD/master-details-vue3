<template>
<div>
<h2>Liste des tests :</h2>
<ul class="list-disc list-inside m-2">
    <router-link
        v-for="route in routes"
        :to="`${path}${route.path}`"
        :key="route.name"
    >
        <li class="text-xl">
            {{route.name}}
        </li>
    </router-link>
</ul>
</div>
</template>

<script>
export default {
    name: "testslist",
    computed: {
        routes() {
            let retour = []
            let routes = this.$router.options.routes.filter(r => r.path.includes("/tests"))
            if(routes.length){
                routes[0].children
                .filter(r => !!r.path)
                .map(r => {
                    retour.push(r)
                })
            }
            return retour
        },
        path() {
            let path = this.$router.currentRoute.value.fullPath
            return path[path.length -1] !== "/" ? `${path}/` : path
        }
    },
    created() {
        // console.log(this.routes, this.path)
    }
}
</script>

<style>

</style>