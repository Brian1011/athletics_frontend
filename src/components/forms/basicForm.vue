<template>
    <div class="q-px-md">
      <q-card>
        <p class="text-h6 flex flex-center">Basic Form</p>
        <q-card-section>
          <q-form @submit="submit">
            <q-input color="primary" filled label="Name"></q-input>
            <br>

            <q-input color="primary" filled label="Email" ></q-input>
            <br>

            <q-input color="primary" filled label="Phone Number" ></q-input>
            <br>

            <q-btn color="primary" size='md' :loading=loading1 @click="openHomePage">Submit</q-btn>
          </q-form>
        </q-card-section>
      </q-card>

    </div>
</template>

<script>
    export default {
        name: "basicForm",
        data(){
          return{

          }
        },
      methods:{
          submit(){

          }
      }
    }
</script>

<style scoped>

</style>
