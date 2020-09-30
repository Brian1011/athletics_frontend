const state = ()=>({
  allAthletes: [],

});

const getters = {
  allAthletes: state => state.allAthletes
}

const mutations = {
  setAthletes(state, athletes){
    state.allAthletes = athletes
  }
}

const actions = {
  registerAthlete({commit, state}, athleteData){
    let existingData = localStorage.getItem("athletes")
    existingData = existingData ? JSON.parse(existingData): [];
    existingData.push(
      {
        id: existingData.length,
        name: athleteData.name,
        gender: athleteData.gender,
        teamId: athleteData.teamId,
        marathonType: athleteData.marathonType
      }
    )
    localStorage.setItem("athletes", JSON.stringify(existingData))
    commit("setAthletes", existingData)
    Notify.create({
      message: 'Success',
      caption: athleteData.name + " has been added successfully",
      color: 'positive',
      position: 'top'
    })
  },

  loadAthletes({commit}){
    let existingData = localStorage.getItem("athletes")
    existingData = existingData ? JSON.parse(existingData): [];
    commit("setAthletes", existingData)
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
