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

    let defaultAthletes = [
      {id: 1, name: 'Tom', gender: 'male', teamId: 1, marathonType: '10 KM'},
      {id: 2, name: 'Pauline', gender: 'female', teamId: 1, marathonType: '10 KM'},
      {id: 3, name: 'James Wairimu', gender: 'male', teamId: 1, marathonType: 'Full marathon (42 km)'},
      {id: 4, name: 'Timothy', gender: 'male', teamId: 2, marathonType: 'Full marathon (42 km)'},
      {id: 5, name: 'Stacy', gender: 'female', teamId: 2, marathonType: 'Half marathon (13.1 miles)'},
      {id: 6, name: 'Jenifer', gender: 'female', teamId: 2, marathonType: 'Ultra marathon'}
    ]

    let defaultTeams = [
      {id: 1, name: 'Team A', county: 'Nairobi', teamManager: 1},
      {id: 1, name: 'Team A', county: 'Nairobi', teamManager: 2},
    ]

    let races = []
    let raceResults = []

    return new Promise((resolve) => {
      // check if athletes exist
      let existingAthlete = localStorage.getItem("athletes")
      existingAthlete = existingAthlete ? JSON.parse(existingAthlete): [];
      if(existingAthlete.length === 0)
        localStorage.setItem("athletes", JSON.stringify(defaultAthletes))

      // check if users exists
      let existingUsers = localStorage.getItem("users")
      existingUsers = existingUsers ? JSON.parse(existingUsers): [];
      if(existingUsers.length === 0){
        existingUsers = defaultUsers
        localStorage.setItem("users", JSON.stringify(existingUsers))
      }

      // let users = localStorage.setItem("users", JSON.stringify(defaultUsers))
      localStorage.setItem("teams", JSON.stringify(defaultTeams))
      content.commit('setUsers', existingUsers)
    });
  },

  login: function ({commit, state}, userData) {

    let allUsers = state.allUsers
    let foundData = state.allUsers.find(
      user => (user.email === userData.email && user.password === userData.password)
    )
    if (foundData === undefined) {
      Notify.create({message: 'Unauthenticated', caption: 'User not found', color: 'danger', position: 'top'})
    } else {
      commit('setLoggedInUser', foundData);
      let currentUser = localStorage.setItem("currentUser", JSON.stringify(foundData))
      Notify.create({
        message: 'Authenticated',
        caption: 'Logged in Successfully',
        color: 'positive',
        position: 'top'
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
