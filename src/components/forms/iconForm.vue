<template>
  <div class="q-px-md">
    <q-card>
      <p class="text-h6 flex flex-center">Form with Icon(s)</p>
      <q-card-section>
        <q-form>
          <p class="text-body1 flex flex-center">Prepend Icon</p><br>
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
          <br><br>

          <q-separator></q-separator>
          <p class="text-body1 flex flex-center">Append Icon</p><br>
          <q-input color="primary" filled label="Username" >
            <template v-slot:append>
              <q-icon name="person" />
            </template>
          </q-input>
          <br>

          <q-input color="primary" filled label="Password" >
            <template v-slot:append>
              <q-icon name="lock" />
            </template>
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
        name: "iconForm"
    }
</script>

<style scoped>

</style>
