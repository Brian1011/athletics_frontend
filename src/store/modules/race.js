const state = () => ({
  allRaces: [],
  allRacesResults: [],
  raceResult: [],
});

const getters = {
  allRaces: state => state.allRaces,
  raceResult: state => state.raceResult
}

const mutations = {
  newRace(state, races){
    state.allRaces = races
  },
  newRaceResults(state, raceResults){
    state.allRacesResults = raceResults
  },
  selectedRace(state, race){
    state.raceResult = race;
  },
}

const actions = {
  addNewRace({commit}, raceData){
    // check if race exists
    let existingRaces = localStorage.getItem("races")
    existingRaces = existingRaces ? JSON.parse(existingRaces): [];
    existingRaces.push(
      {
        id: existingRaces.length + 1,
        raceName: raceData.raceName,
        venue: raceData.venue,
        county: raceData.county,
        gender: raceData.gender,
        distance: raceData.distance
      }
    )

    localStorage.setItem("races", JSON.stringify(existingRaces))
    commit("newRace", existingRaces)

    // race results
    let existingRaceResults = localStorage.getItem("raceResults")
    existingRaceResults = existingRaceResults ? JSON.parse(existingRaceResults): [];
    for(let i=0; i<raceData.runners.length; i++)
    {
      existingRaceResults.push(
        {
          id: existingRaces.length,
          raceId: existingRaces.length,
          athleteId: raceData.runners[i].value,
          athleteName: raceData.runners[i].label,
          seconds: 0,
          totalParticipants: raceData.runners.length
        }
      )
    }
    localStorage.setItem("raceResults", JSON.stringify(existingRaceResults))
    commit("newRaceResults", existingRaceResults)

    Notify.create({
      message: 'Success',
      caption: raceData.raceName + " has been added successfully",
      color: 'positive',
      position: 'top'
    })
    console.log(raceData);
  },

  loadRaces({commit}){
    // races
    let existingRaces = localStorage.getItem("races")
    existingRaces = existingRaces ? JSON.parse(existingRaces): [];
    commit("newRace", existingRaces);

    // race results
    let existingRaceResults = localStorage.getItem("raceResults")
    existingRaceResults = existingRaceResults ? JSON.parse(existingRaceResults): [];
    commit("newRaceResults", existingRaceResults)
  },

  selectedRace({commit, state}, selectedRace){
    let foundData = state.allRacesResults.filter(
      results => (results.raceId === selectedRace.id)
    )

    if(foundData === undefined){
      Notify.create({
        message: 'Error',
        caption: 'No racers found for this race',
        color: 'danger',
        position: 'top'
      })
    } else {
      commit("selectedRace", foundData)
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
