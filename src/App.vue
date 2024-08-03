<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
//import PlayerPanel from './components/PlayerPanel.vue'
</script>

<script>
export default {
  data() {
    return {
      searchText: ""
    }
  },
  methods: {
    search() {
      console.log("search... : " + this.searchText)
      this.$router.push(`/search_/${this.searchText}`)
    }
  }
} 
</script>

<template>
  <div style="margin-bottom: 20px;">
    <input type="search" v-model="searchText" class="form-control rounded" style="width: 100%;" id="searchField" @change="search">
  </div>
  <audio controls src="https://s2.deliciouspeaches.com/get/music/20190409/The_Police_-_Every_Breath_You_Take_63389216.mp3" id="player" hidden></audio>
  <RouterView/>
</template>

<style>
body {
            background-color: black;
            color: white;
            font-family: Comfortaa;
            font-size: x-large;
            --bs-border-radius: 1.5rem;
        }
        h1 {
            font-size: 2rem;
            font-weight: 700;
        }
        h3 {
            font-size: 1.5rem;
            font-weight: 300;
        }
        #app {
            margin: 2%;
        }
        #length {
            margin-left: 4%;
            margin-right: 1%;
            width: 80%;
        }
        .track-controls {
            margin-top: 6%;
            margin-bottom: 2%;
        }
        #searchField {
            padding-left: 2%;
            padding-right: 2%;
        }
        .rounded {
            border-radius: 100px;
        }
</style>
