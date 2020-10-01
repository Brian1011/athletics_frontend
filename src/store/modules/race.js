const state = () => ({
  allRaces: [],
  raceResults: [],
});

const getters = {

}

const mutations = {
  newRace(state, races){
    state.allRaces = races
  },
  newRaceResults(state, raceResults){
    state.raceResults = raceResults
  }
}

const actions = {
  addNewRace({commit}, raceData){
    // check if race exists
    let existingRaces = localStorage.getItem("races")
    existingRaces = existingRaces ? JSON.parse(existingRaces): [];
    existingRaces.push(
      {
        id: existingRaces.length,
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
          raceId: existingRaces.length - 1,
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

    // // check if race results exist
    // let existingRaceResults = localStorage.getItem("raceResults")
    // existingRaceResults = existingRaceResults ? JSON.parse(existingRaceResults): [];
    // if(existingRaceResults.length === 0){
    //   existingRaceResults = raceResults
    //   localStorage.setItem("raceResults", JSON.stringify(existingRaceResults))
    // }

    console.log(raceData);
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
