<template>
    <div>
        <q-card>
          <q-card-section>
            <div class="text-h4 flex flex-center">Profile</div><br>
            <div class="row">
              <div class="col-xs-12 col-md-5 flex flex-center">
                <q-avatar size="150px">
                  <q-img src="statics/images/person.png"></q-img>
                </q-avatar>
                <q-separator vertical/>
              </div>

              <div class="col-xs-12 col-md-7 ">
                <q-form class="q-pl-lg ">
                  <q-input color="primary" filled label="Name"></q-input>
                  <br>

                  <q-input color="primary" filled label="Email" ></q-input>
                  <br>

                  <q-input color="primary" filled label="Phone Number" ></q-input>
                  <br>

                  <q-btn color="primary" size='md'>Submit</q-btn>
                </q-form>
              </div>
            </div>
          </q-card-section>
        </q-card>
    </div>
</template>

<script>
    export default {
        name: "profile"
    }
</script>

<style scoped>

</style>
