<template>
  <div class="q-px-md">
    <q-card>
      <p class="text-h6 flex flex-center">Form with Validation</p>
      <q-card-section>
        <q-form @submit="submit">
          <q-input color="primary" filled label="Name" v-model="name" :rules="[val=>val && val.length>3 || 'Name requires more than 2 characters']">
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>
          <br>

          <q-input color="primary" filled label="Email" v-model="email" :rules="[val=>val && validateEmail(val) || 'Enter a valid email']">
            <template v-slot:prepend>
              <q-icon name="mail" />
            </template>
          </q-input>
          <br>

          <q-input color="primary" filled label="Phone Number" v-model="phone" :rules="[val=>val && validatePhone(val) || 'Phone number has to be numeric and only 10 digits']">
            <template v-slot:prepend>
              <q-icon name="phone" />
            </template>
          </q-input>
          <br>

          <q-btn color="primary" size='md' type="submit">Submit</q-btn>
          <q-btn color="primary" size='md' @click="onReset" class="q-ml-sm">Clear</q-btn>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
    export default {
      name: "validatedForm",
      data(){
        return{
          name: null,
          email: null,
          phone: null,
          loading1: false,
        }
      },
      methods:{
        submit(){
            this.validateEmail(this.email);
            this.$q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'Submitted'
            })
        },
        onReset(){
          this.name=null;
          this.email = null;
          this.phone = null;
          //this.$refs.input.resetValidation()
        },
       validateEmail(email) {
          let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
        },
        validatePhone(phone){
          return phone.match(/\d/g).length===10;
        }
      }
    }
</script>

<style scoped>

</style>
