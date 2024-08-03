<script>
    function fSeconds(data) {
        if (data < 10) {
            return `0${data}`;
        } else {
            return data.toString();
        }
    }

    export default {
        props: [
            "trackName",
            "artistName",
            "thumbnailURL",
            "duration",
            "trackID"
        ],
        computed: {
            durationText() {
                var sec = Math.round(this.duration / 1000);
                return `${fSeconds(Math.floor(sec / 60))}:${fSeconds(sec % 60)}`
            }
        },
        methods: {
            onTouch() {
                console.log("ref: " + this.trackID)
                this.$router.push(`/track/${this.trackID}`)
            }
        }
    }
</script>

<template>
            <td @click="onTouch()"><img :src="thumbnailURL"></td>
            <td @click="onTouch()">
                <h3>{{ trackName }}</h3>
                <h5>{{ artistName }}</h5>
            </td>
            <td style="text-align: right" @click="onTouch()">
                <h6> {{ durationText }}</h6>
            </td>
</template>