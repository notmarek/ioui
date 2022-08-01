<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">Log in</v-card-title>
        <v-card-text>
          <v-form ref="form" @submit.prevent="logIn">
            <v-text-field v-model="username" label="Username" required>
            </v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              label="Password"
              required
            >
            </v-text-field>
            <v-btn color="primary" type="submit"> Login </v-btn>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/"> Go back home </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
    return {
      username: null,
      password: null,
    }
  },
  methods: {
    logIn() {
      this.$store
        .dispatch('user/logIn', {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.$router.push('/')
        })
    },
  },
}
</script>
