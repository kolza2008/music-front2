<script>
    export default {
        props: [
            "artistName",
            "thumbnailURL"
        ],
    }
</script>

<template>
    <td></td>
    <td>
        <h3>{{ artistName }}</h3>
        <h5>Исполнитель</h5>
    </td>
</template>