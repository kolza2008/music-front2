<script>
    export default {
        props: [
            "albumName",
            "artistName",
            "thumbnailURL"
        ],
        created() {
            console.log(this.albumName, this.thumbnailURL)
        }
    }
</script>

<template>
    <td>
        <img :src="thumbnailURL">
    </td>
    <td>
        <h3>{{ albumName }}</h3>
        <h5>{{ artistName }}</h5>
    </td>
</template>