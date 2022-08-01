export const state = () => ({
  siteInfo: null,
})

export const getter = {
  getSiteInfo(state) {
    return state.siteInfo
  },
}

export const actions = {
  async fetchSiteInfo(state) {
    if (state.siteInfo) return state.siteInfo
    const res = await this.$axios.get('/na/info')
    state.apiInfo = res.data
    return res.data
  },
}
