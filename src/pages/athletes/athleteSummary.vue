<template>
  <div>
    <q-card>
      <q-card-section>
        <q-row>
          <div class="text-subtitle1">Number of races: {{athleteData.number_of_races}}</div>
          <div class="text-subtitle1">Average Distance (Metres): {{athleteData.average_distance}}</div>
          <div class="text-subtitle1">Seconds Spent (Seconds): {{athleteData.seconds_spent}}</div>
          <div class="text-subtitle1">Average Speed (Km/Hr): {{athleteData.average_speed}}</div>
        </q-row>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "athleteSummary",
  props: {
    athleteData: Object
  }
}
</script>

<style scoped>

</style>
