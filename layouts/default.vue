<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title>
        {{ title }}
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        v-if="$store.state.user.loggedIn"
        color="primary"
        elevation="1"
        outlined
        @click.prevent="logout()"
        >Logout</v-btn
      >
      <v-btn
        v-if="!$store.state.user.loggedIn"
        color="primary"
        elevation="1"
        to="/user/login"
      >
        Login
      </v-btn>
      <v-divider
        v-if="!$store.state.user.loggedIn"
        class="mx-4"
        vertical
      ></v-divider>
      <v-btn
        v-if="!$store.state.user.loggedIn"
        color="primary"
        elevation="1"
        outlined
        to="/user/register"
      >
        Register
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      fixed: false,
      title: 'iO (Animu next generation)',
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logOut')
    },
  },
}
</script>
