<template>
    <div class="row">
      <div class="col-xs-12 col-md-4 offset-md-4 ">
        <q-card class="q-mt-xl">
          <center>
            <q-avatar size="150px">
              <q-img src="statics/images/person.png"></q-img>
            </q-avatar>
          </center>

          <q-card-section class="q-px-xl">
            <q-input color="primary" filled v-model="email" label="Email" >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>
            <br>

            <q-input color="primary" filled v-model="password" label="Password" type="password">
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>

            <br>
            <center>
              <q-btn color="primary" size='md' :loading=loading1 @click="openHomePage">Submit</q-btn>
            </center>

          </q-card-section>

        </q-card>
      </div>
    </div>
</template>

<script>
  import routes from "../router/routes";
    export default {
        name: "loginComponent",
        data () {
          return {
            loading1: false,
            email: '',
            password: '',
          }
        },

      methods: {
          openHomePage(){
            this.loading1 = true;

            setTimeout(()=>{
              this.loading1 = false;
              //this.$q.notify({message: 'Authenticated', caption:'Logged in Successfully', color:'primary', position:'top-right'})
            }, 2000)

            setTimeout(()=>{
              this.$q.notify({message: 'Authenticated', caption:'Logged in Successfully', color:'primary', position:'top-right'})
              //router.push({ name: 'homepage'})
            }, 2200)

            setTimeout(()=>{
             // routes.push({name: 'dashboard'})
              this.$router.push('/dashboard');
            }, 2500)
          }
      }
    }
</script>

<style scoped>

</style>
