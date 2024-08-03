<template>
    <div id="player-panel">
        <img :src="thumbnail" class="thumbnail">
        <div class="track-info">
            <h1>{{name}}</h1>
            <h3>{{author}}</h3>
        </div>
        <div class="track-controls justify-content-center">
            <div style="display: inline-block;">
                <svg viewBox="0 0 24 24" width="75" height="75" @click="pause">
                    <!--<ellipse style="paint-order: fill markers; stroke: rgb(0, 0, 0); stroke-opacity: 0; fill: rgb(255, 255, 255);" cx="250" cy="250" rx="250" ry="250" transform="matrix(1, 0, 0, 1, -1.1368683772161603e-13, -5.684341886080802e-14)"/>-->
                    <g v-if="paused">
                        <path style="fill: rgb(255, 255, 255);" d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM10,8l6,4-6,4Z"/>
                    </g>
                    <g v-else>
                        <path style="fill: rgb(255, 255, 255);" d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM9,8h2v8H9Zm4,0h2v8H13Z"/>
                    </g>
                  </svg>
            </div>
            <div style="display: inline-block; width: 79%">
                <input type="range" id="length" min="0" v-bind:max="durationMS()" v-model="playbackTime"/>
            </div>
        </div>
        <div class="row justify-content-center">
            <svg class="col d-flex justify-content-end" viewBox="0 0 24 24" width="75" height="75">
                <path style="fill: rgb(255, 255, 255);" d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.01,9.01,0,0,1,12,21Zm-2-9,6-4v8ZM7,8H9v8H7Z"/>
            </svg>
            <p class="col" style="text-align: center;">{{playbackText()}} / {{lengthText()}}</p>
            <svg class="col" viewBox="0 0 24 24" width="75" height="75">
                <path style="fill: rgb(255, 255, 255);" d="M12,23A11,11,0,1,0,1,12,11.013,11.013,0,0,0,12,23ZM12,3a9,9,0,1,1-9,9A9.01,9.01,0,0,1,12,3Zm2,9L8,16V8Zm3,4H15V8h2Z"/>
            </svg>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
</script>

<script>
function fSeconds(data) {
  if (data < 10) {
    return `0${data}`;
  } else {
   return data.toString();
  }
}

export default {
    data() {
        return {
            message: 'Привет Vue!',
            paused: true,
            playbackTime: 0,
            name: "---",
            author: "---",
            thumbnail: "https://images.genius.com/826ad09d6eb4e271e068c394d63d5a1a.1000x1000x1.jpg",
            musicURL: ""
        }
    },
    props: [
        "trackID"
    ],
    watch: {
        playbackTime() {
        var diff = Math.abs(this.playbackTime - document.getElementById("player").currentTime);
        if(diff > 0.5) {
            document.getElementById("player").currentTime = this.playbackTime;
        } 
        }
    },
    mounted() {
        console.log(this.trackID)
        axios.get(`${this.$hostname}/api/track?id=${this.trackID}`).then(
            response => {this.name = response.data.name; this.author = response.data.author; this.thumbnail = response.data.thumbnail}
        )
        document.getElementById("player").src = `${this.$hostname}/api/trackFile?id=${this.trackID}`
    },
    methods: {
        updatePlaybackTime() {
            this.playbackTime = Math.floor(document.getElementById("player").currentTime)
        },
        pause() {
            console.log('pause')
            this.paused = !this.paused;
            if (this.paused) {
                document.getElementById("player").removeEventListener("timeupdate", this.updatePlaybackTime)
                document.getElementById("player").pause();
            } else {
                document.getElementById("player").addEventListener("timeupdate", this.updatePlaybackTime)
                document.getElementById("player").play();
            }
        }, 
        lengthText() {
            try {
                var dur = document.getElementById("player").duration;
                return `${Math.floor(dur / 60)}:${fSeconds(Math.floor(dur % 60))}`
            } catch {
                return "-:--"
            }
        },
        playbackText() {
            return `${Math.floor(this.playbackTime / 60)}:${fSeconds(this.playbackTime % 60)}`
        },
        durationMS() {
            try {
                return Math.floor(document.getElementById("player").duration)
            } catch {
                return 100
            }
        }
    },
    computed: {
        imageWidth() {
            return window.innerWidth;
        }
    }
}
</script>

<style>
    .thumbnail {
        margin-left: 5%;
        margin-right: 5%;
        width: 90%;
    }
    .track-info {
        margin-top: 2%;
    }
</style>