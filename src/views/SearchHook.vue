<template>
    <h1>Loading...</h1>
</template>

<script>
    export default {
        props : {
            query: String
        },
        created() {
            console.log("Created: "+this.query)
            this.$router.push(`/search/${this.query}`)
        }
    }
</script>