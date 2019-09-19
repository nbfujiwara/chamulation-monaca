<template>
  <div class="chatBalloon">
    <div class="chatBody">
      <div v-if="isChoiceType(question.inputType)">
        <v-btn
          v-for="(item, i) in question.choices"
          :key="i"
          :to="item.to"
          color="primary"
          class="ma-1"
          @click="selectChoice(item.value)"
          >{{ item.label }}</v-btn
        >
      </div>
      <div v-if="isSliderType(question.inputType)" class="sliderBlock">
        <v-slider
          v-model="sliderValue"
          thumb-label="always"
          :min="sliderMin"
          :max="sliderMax"
          class="mt-10"
        ></v-slider>
        <v-btn color="primary" @click="decideSlide">決定</v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ChatContextLogic, { IQuestion } from '../libs/ChatContextLogic'

@Component
export default class InputBalloon extends Vue {
  @Prop()
  public question: IQuestion

  private sliderValue: number = 0
  private sliderMin: number = 0
  private sliderMax: number = 100

  mounted() {
    this.sliderMax = this.question.maxValue
    this.sliderMin = this.question.minValue
    this.sliderValue = this.question.defaultValue
  }
  isChoiceType(type) {
    return ChatContextLogic.INPUT_TYPE_CHOICE === type
  }
  isSliderType(type) {
    return ChatContextLogic.INPUT_TYPE_SLIDER === type
  }

  selectChoice(value) {
    this.$emit('select', value)
  }
  decideSlide() {
    this.$emit('select', this.sliderValue)
  }
}
</script>

<style scoped lang="scss">
.sliderBlock {
  width: 70vw;
}
.chatBalloon {
  margin: 10px 0;

  .chatBody {
    display: inline-block;
    position: relative;
    margin: 0 10px 0 0;
    padding: 8px;
    max-width: 80%;
    border-radius: 12px;
    background: #30e852;
    font-size: 15px;
  }
  .chatBody:after {
    content: '';
    position: absolute;
    top: 3px;
    right: -19px;
    border: 8px solid transparent;
    border-left: 18px solid #30e852;
    -webkit-transform: rotate(-35deg);
    transform: rotate(-35deg);
  }
}
</style>
