const state = ()=>({
  allUsers: [],
  currentUser: '',
})

const getters = {

}

const mutations = {
  setUsers(state, users){
    state.allUsers = users
  },

  setLoggedInUser(state, user){
    state.currentUser = user
  }
}

const actions = {
  setDefaultUsers(content){
    let defaultUsers = [
      {id: 1, name: 'Bloom test', email: 'bloom2@gmail.com', password: '12345', userType: 'admin', },
      {id: 2, name: 'Team manager', email: 'manager@gmail.com', password: '12345', userType: 'team_manager', team: 1},
    ];

    let defaultTeams = []
    let athletes = []
    let races = []
    let raceResults = []

    return new Promise((resolve) => {
      let users = localStorage.setItem("users", JSON.stringify(defaultUsers))
      content.commit('setUsers', defaultUsers)
    });
  },

  login: function ({commit, state}, userData) {

    let allUsers = state.allUsers
    let foundData = state.allUsers.find(
      user => (user.email === userData.email && user.password === userData.password)
    )
    if (foundData === undefined) {
      Notify.create({message: 'Unauthenticated', caption: 'User not found', color: 'danger', position: 'top-right'})
    } else {
      commit('setLoggedInUser', foundData);
      let currentUser = localStorage.setItem("currentUser", JSON.stringify(foundData))
      Notify.create({
        message: 'Authenticated',
        caption: 'Logged in Successfully',
        color: 'primary',
        position: 'top-right'
      })
      this.$router.push('/dashboard')
    }
  },

  logout(){
    localStorage.removeItem("currentUser");
    this.$router.push('/')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

import { Notify } from 'quasar'
import router from '../../router/routes'
