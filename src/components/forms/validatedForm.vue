<template>
  <div class="q-px-md">
    <q-card>
      <p class="text-h6 flex flex-center">Form with Validation</p>
      <q-card-section>
        <q-form @submit="submit">
          <q-input color="primary" filled label="Name">
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>
          <br>

          <q-input color="primary" filled label="Email" >
            <template v-slot:prepend>
              <q-icon name="mail" />
            </template>
          </q-input>
          <br>

          <q-input color="primary" filled label="Phone Number" >
            <template v-slot:prepend>
              <q-icon name="phone" />
            </template>
          </q-input>
          <br>

          <q-btn color="primary" size='md' :loading=loading1 @click="" >Submit</q-btn>
          <q-btn color="primary" size='md' :loading=loading1 @click="" class="q-ml-sm">Clear</q-btn>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
    export default {
      name: "validatedForm",
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
