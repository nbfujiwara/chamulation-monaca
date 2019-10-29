<template>
  <div class="indexContainer">
    <div>
      <h2 class="subtitle">
        Chamulation
      </h2>
      <div>
        <v-btn color="primary" block class="ma-1" to="/form" nuxt>
          Start
        </v-btn>

        <hr class="mt-10 mb-5" />
        <v-btn color="default" block class="ma-1" to="/result" nuxt>
          とりあえずchart
        </v-btn>
        <v-btn color="default" block class="ma-1" to="/spdragtest" nuxt>
          SPドラッグ問題確認
        </v-btn>
        <v-btn color="default" block class="ma-1" to="/spdragtestt" nuxt>
          SPドラッグ問題確認2
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class IndexPage extends Vue {
  gotoPage(url) {
    this.$router.push({ path: url })
  }
}
</script>

<style scoped>
.indexContainer {
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
