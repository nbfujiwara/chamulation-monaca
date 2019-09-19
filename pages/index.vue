<template>
  <div class="container">
    <div>
      <h2 class="subtitle">
        Chamulation
      </h2>
      <div>
        <v-btn color="primary" block class="ma-1" @click="gotoPage('/form')">
          Start
        </v-btn>
        <v-btn color="primary" block class="ma-1" to="/form" nuxt>
          Start2
        </v-btn>
        <v-btn color="primary" block class="ma-1" to="/result" nuxt>
          とりあえずchart
        </v-btn>
        <v-btn color="primary" block class="ma-1" to="/spdragtest" nuxt>
          SPドラッグ問題確認
        </v-btn>
        <v-btn color="primary" block class="ma-1" to="/spdragtestt" nuxt>
          SPドラッグ問題確認2
        </v-btn>
      </div>

      <v-slider thumb-label="always" class="mt-10"></v-slider>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class WorkTypeSelect extends Vue {
  gotoPage(url) {
    this.$router.push({ path: url })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  display: block;
}
</style>
