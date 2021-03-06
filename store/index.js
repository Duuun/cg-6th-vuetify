// 状態管理したい要素に名前をつけて、stateとしてexportする
export const state = () => ({
  sidebar: false,
  message: '初期メッセージ'
})

// 状態を変更する処理は、mutationとしてexportする
export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  setMessage (state, payload) {
    state.message = payload
  }
}

export const actions = {
  message (state) {
    return state.message
  }
}
