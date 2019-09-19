<template>
  <div>
    <div>
      <chart></chart>
    </div>
    <appendix-inputs></appendix-inputs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Chart: () => import('../components/BarChart.vue'),
    AppendixInputs: () => import('../components/AppendixInputs.vue')
  }
})
export default class ResultPage extends Vue {}
</script>
