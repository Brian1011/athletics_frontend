<template>
  <div class="q-px-md q-py-md">
    <q-card dark>
      <p class="text-h6 flex flex-center">Dark Form</p>
      <q-card-section>
        <q-form>
          <q-input color="primary" filled label="Name" dark>
            <template v-slot:prepend>
            </template>
          </q-input>
          <br>

          <q-input color="primary" filled label="Email" dark>
            <template v-slot:prepend></template>
          </q-input>
          <br>

          <q-input color="primary" filled label="Phone Number" dark>
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
        name: "darkForm",
        data(){
          return{ }
        },
      methods:{
        submit(){ }
      }
    }
</script>

<style scoped>

</style>
