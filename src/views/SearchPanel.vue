<script setup>
import axios from "axios";
import SongView from '../components/SongView.vue'
import AlbumView from "../components/AlbumView.vue";
import ArtistView from "../components/ArtistView.vue";
</script>

<script>
    export default {
        props : {
            query: String
        },
        data() {
            return {
                items : []
            }
        },
        methods: {
            parseAndRender() {
                console.log("че за хуйня: " + this.query)
                axios.get(`${this.$hostname}/api/search?d=${this.query}`).then(
                    response => {this.items = response.data}
                )
            }
        },
        mounted() {
            console.log("че за хуйня: " + this.query)
            axios.get(`${this.$hostname}/api/search?d=${this.query}`).then(
                response => {this.items = response.data}
            )
        }
    }
</script>

<template>
    <table>
        <tr v-for="i in items">
            <SongView :trackName="i.trackName" :artistName="i.artistName" :thumbnailURL="i.thumbnail" :duration="i.duration" :trackID="i.id" v-if="i.type=='track'"/>
            <AlbumView :albumName="i.name" :artistName="i.artistName" :thumbnailURL="i.thumbnail" v-if="i.type=='album'"/>
            <ArtistView :artistName="i.name" v-if="i.type=='artist'"/>
        </tr>
    </table>
</template>