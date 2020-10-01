import auth from "./auth";

const state = ()=>({
  allAthletes: [],
  runners: []
});

const getters = {
  allAthletes: state => state.allAthletes,
  allRunnersList: state => state.runners
}

const mutations = {
  setAthletes(state, athletes){
    state.allAthletes = athletes
  },
  setRunners(state, athletes){
    state.runners = athletes
  }
}

const actions = {
  registerAthlete({commit, state}, athleteData){
    let existingData = localStorage.getItem("athletes")
    existingData = existingData ? JSON.parse(existingData): [];
    existingData.push(
      {
        id: existingData.length + 1,
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
    // show based on usertype
    commit("setAthletes", existingData)
  },

  loadRunners({commit}){
    let racers = [];
    let existingData = localStorage.getItem("athletes")
    existingData = existingData ? JSON.parse(existingData): [];
    if(existingData.length > 0){
      for(let i=0; i<existingData.length; i++){
        racers.push(
          {
            value: existingData[i].id,
            label: existingData[i].name
          }
        )
      }

      console.log(racers);
      commit("setRunners", racers)
    }
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
