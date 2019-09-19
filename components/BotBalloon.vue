<template>
  <div class="chatBalloon chatPartner">
    <div class="chatFace">
      <v-icon class="chatImage" x-large>mdi-account-circle</v-icon>
    </div>
    <div class="chatBody">
      <div class="chatSerif">{{ serif }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BotBalloon extends Vue {
  @Prop()
  public serif: string
}
</script>

<style scoped lang="scss">
.chatBalloon {
  width: 100%;
  margin: 10px 0;
  overflow: hidden;

  .chatFace {
    float: left;
    margin-right: -50px;
    width: 40px;

    .chatImage {
      width: 100%;
      height: auto;
      color: #fff;
    }
  }
  .chatBody {
    width: 100%;
    text-align: left;
  }

  .chatSerif {
    display: inline-block;
    position: relative;
    margin: 0 0 0 50px;
    padding: 10px;
    max-width: 70%;
    border-radius: 12px;
    background: #edf1ee;
  }

  .chatSerif:after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 3px;
    left: -19px;
    border: 8px solid transparent;
    border-right: 18px solid #edf1ee;
    -webkit-transform: rotate(35deg);
    transform: rotate(35deg);
  }
}
</style>
