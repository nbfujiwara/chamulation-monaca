<template>
  <v-app light>
    <link rel="stylesheet" href="/c3.min.css" />
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <div class="flex-grow-1"></div>
      <v-btn nuxt to="/" icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid fill-height pa-0>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: '年代で比較する',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '進路で比較する',
          to: '/work-type'
        }
      ],
      miniVariant: false,
      title: 'This is App Name'
    }
  }
}
</script>
