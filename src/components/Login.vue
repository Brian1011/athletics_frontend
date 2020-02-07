<template>
    <div class="row">
      <div class="col-xs-12 col-sm-4 offset-sm-4 ">
        <q-card class="q-mt-xl">
          <center>
            <q-avatar size="150px">
              <q-img src="statics/images/person.png"></q-img>
            </q-avatar>
          </center>

          <q-card-section class="q-px-xl">
            <q-input color="purple-12" v-model="text" label="Email">
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>

            <br>

            <q-input color="purple-12" v-model="text" label="Password">
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>

            <br>
            <center>
              <q-btn color="primary" size='md'>Submit</q-btn>
            </center>

          </q-card-section>

        </q-card>
      </div>
    </div>
</template>

<script>
    export default {
        name: "loginComponent",
    }
</script>

<style scoped>

</style>
