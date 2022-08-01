export const state = () => ({
  loggedIn: false,
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
  },
  setUserInfo(state, info) {
    state.userInfo = info
  },
}

export const actions = {
  async fetchApiInfo(state) {
    const res = await this.$axios.get('/api/3')

    state.apiInfo = res.data
    return res.data
  },
  async fetchUserInfo(state) {
    const res = await this.$axios
      .get('/api/3/user', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('bak-token')}`,
        },
      })
      .catch((_) => {
        return [false, null]
      })
    if (res.status === 200) {
      state.loggedIn = true
      state.userInfo = res.data
      return [true, res.data.FullName]
    }
    return [false, null]
  },
}
