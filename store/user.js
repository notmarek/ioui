export const state = () => ({
  loggedIn: (localStorage.getItem('jwt') && true) || false,
  userInfo: null,
})

export const getter = {
  getLoggedIn(state) {
    return state.loggedIn
  },
  getUserInfo(state) {
    return state.userInfo
  },
}

export const mutations = {
  logIn(state) {
    state.loggedIn = true
  },
  logOut(state) {
    state.loggedIn = false
    state.userInfo = null
  },
  setUserInfo(state, info) {
    state.userInfo = info
  },
}

export const actions = {
  logOut(ctx) {
    localStorage.removeItem('jwt')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('expiration')
    ctx.commit('logOut')
  },
  async logIn(ctx, { username, password }) {
    const res = await this.$axios.post('/na/user', {
      username,
      password,
      identifier: 'password',
    })
    if (res.data.status === 'ok') {
      localStorage.setItem('jwt', res.data.token)
      localStorage.setItem('refresh_token', res.data.refresh_token)
      localStorage.setItem('expiration', res.data.expiration)
      ctx.dispatch('fetchUserInfo')
    }
    return res.data
  },
  async fetchUserInfo(ctx) {
    const res = await this.$axios
      .get('/api/user/@me', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      })
      .catch((_) => {
        ctx.commit('logOut')
        return [false, null]
      })
    if (res.status === 200) {
      ctx.commit('logIn')
      ctx.commit('setUserInfo', res.data)
      return [true, res.data]
    }
    ctx.commit('logOut')
    return [false, null]
  },
}
