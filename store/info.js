export const state = () => ({
  siteInfo: null,
})

export const mutations = {
  setSiteInfo(state, info) {
    state.siteInfo = info
  },
}

export const getter = {
  getSiteInfo(state) {
    return state.siteInfo
  },
}

export const actions = {
  async fetchSiteInfo(ctx) {
    if (ctx.state.siteInfo) return ctx.state.siteInfo
    const res = await this.$axios.get('/na/info')
    ctx.commit('setSiteInfo', res.data)
    return res.data
  },
}
