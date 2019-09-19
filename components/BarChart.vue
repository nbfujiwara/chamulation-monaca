<template>
  <div>
    <div id="chart"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import * as c3 from 'c3'
import CalculateDao from '../libs/dao/CalculateDao'
import { appendixStateModule } from '~/store/modules/appendix'

@Component
export default class BarChart extends Vue {
  chart: c3.ChartAPI

  get appendixValuesForWait() {
    return appendixStateModule.valuesForWait
  }
  @Watch('appendixValuesForWait')
  onAppendixChanged(newVal: any, oldVal: any) {
    this.drawGraphData()
  }
  drawGraphData(): void {
    const balance = CalculateDao.getBalance()
    this.chart.load({
      columns: [
        ['老後支出', balance.outcome],
        ['年金', balance.incomePension],
        ['貯蓄など', balance.incomeSaving],
        ['その他収入', balance.incomeOther]
      ]
    })
  }

  mounted() {
    this.initChart()
    this.drawGraphData()
  }

  initChart(): void {
    this.chart = c3.generate({
      bindto: '#chart',
      size: {
        height: 200
      },
      data: {
        type: 'bar',
        labels: {
          format: (v, id, i, j) => {
            if (v === null) {
              return ''
            }
            return v + '万円'
          }
        },
        columns: [
          ['老後支出', 0],
          ['年金', 0],
          ['貯蓄など', 0],
          ['その他収入', 0]
        ],
        groups: [['年金', '貯蓄など', 'その他収入']],
        order: null
      },
      axis: {
        rotated: true
      }
    })
  }
}
</script>

<style scoped lang="scss"></style>
