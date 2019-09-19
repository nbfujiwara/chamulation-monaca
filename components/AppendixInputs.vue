<template>
  <div class="container d-block">
    <div class="fromGroup mb-5">
      <p class="label">浪費度合い（相場平均からのズレ）</p>
      <v-slider
        v-model="outRate"
        thumb-label
        min="-50"
        max="100"
        class="ml-5 mr-5"
        @change="onChangeOutRate"
      >
        <template v-slot:append>
          <v-text-field
            v-model="outRate"
            class="mt-0 pt-0"
            hide-details
            single-line
            type="number"
            suffix="%"
            style="width: 80px"
            @change="onChangeOutRate"
          ></v-text-field>
        </template>
      </v-slider>
    </div>
    <div class="fromGroup mb-5">
      <p class="label">退職する年齢</p>
      <v-slider
        v-model="retireAge"
        thumb-label
        min="50"
        max="100"
        class="ml-5 mr-5"
        @change="onChangeRetireAge"
      >
        <template v-slot:append>
          <v-text-field
            v-model="retireAge"
            class="mt-0 pt-0"
            hide-details
            single-line
            type="number"
            suffix="才"
            style="width: 80px"
            @change="onChangeRetireAge"
          ></v-text-field>
        </template>
      </v-slider>
    </div>
    <div class="fromGroup mb-5">
      <p class="label">追加資産</p>
      <v-slider
        v-model="fortune"
        thumb-label
        min="0"
        max="10000"
        step="10"
        class="ml-5 mr-5"
        @change="onChangeFortune"
      >
        <template v-slot:append>
          <v-text-field
            v-model="fortune"
            class="mt-0 pt-0"
            hide-details
            single-line
            type="number"
            suffix="万円"
            style="width: 100px"
            @change="onChangeFortune"
          ></v-text-field>
        </template>
      </v-slider>
    </div>
    <div class="fromGroup mb-5">
      <p class="label">死んじゃう年齢</p>
      <v-slider
        v-model="dieAge"
        thumb-label
        min="60"
        max="100"
        class="ml-5 mr-5"
        @change="onChangeDieAge"
      >
        <template v-slot:append>
          <v-text-field
            v-model="dieAge"
            class="mt-0 pt-0"
            hide-details
            single-line
            type="number"
            suffix="才"
            style="width: 80px"
            @change="onChangeDieAge"
          ></v-text-field>
        </template>
      </v-slider>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ChatContextLogic, { IQuestion } from '../libs/ChatContextLogic'
import { appendixStateModule } from '~/store/modules/appendix'

@Component
export default class AppendixInputs extends Vue {
  private outRate: number = appendixStateModule.outRate
  private retireAge: number = appendixStateModule.retireAge
  private fortune: number = appendixStateModule.fortune
  private dieAge: number = appendixStateModule.dieAge

  onChangeOutRate(arg) {
    appendixStateModule.setOutRate(arg)
  }
  onChangeRetireAge(arg) {
    appendixStateModule.setRetireAge(arg)
  }
  onChangeFortune(arg) {
    appendixStateModule.setFortune(arg)
  }
  onChangeDieAge(arg) {
    appendixStateModule.setDieAge(arg)
  }
  mounted() {}
}
</script>

<style scoped lang="scss">
.container {
}
.fromGroup {
  width: 95vw;
  display: block;

  .label {
    text-align: left;
    font-weight: bold;
  }
}
</style>
