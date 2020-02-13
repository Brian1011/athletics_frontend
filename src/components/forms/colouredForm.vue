<template>
  <div class="q-px-md q-py-md">
    <q-card class="bg-secondary">
      <p class="text-h6 text-white flex flex-center">Coloured Form</p>
      <q-card-section>
        <q-form>
          <q-input color="white" filled label="Name" class="bg-secondary" dark>
            <template v-slot:prepend>
            </template>
          </q-input>
          <br>

          <q-input color="white" filled label="Email" dark>
            <template v-slot:prepend></template>
          </q-input>
          <br>

          <q-input color="white" filled label="Phone Number" dark>
            <template v-slot:prepend></template>
          </q-input>
          <br>

          <q-btn color="primary" size='md'>Submit</q-btn>
        </q-form>
      </q-card-section>
    </q-card>

  </div>
</template>

<script>
    export default {
        name: "colouredForm",
        data(){
          return{

          }
        }
    }
</script>

<style scoped>

</style>
