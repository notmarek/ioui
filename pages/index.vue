<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Welcome to Io (Animu next generation)
        </v-card-title>
        <v-card-text> ${{ site_info }} </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      site_info: this.$store.state.info.siteInfo,
    }
  },
  async mounted() {
    if (!this.$store.state.info.siteInfo) {
      await this.$store.dispatch('info/fetchSiteInfo')
    }
    this.site_info = this.$store.state.info.siteInfo
  },
}
</script>
