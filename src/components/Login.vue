<template>
    <div class="row">
      <div class="col-xs-12 col-md-6 offset-md-3 ">
        <q-card dark>
          <q-img src=""></q-img>
        </q-card>

        <q-card-section>
          <q-input>
            <template v-slot: prepend>
              <q-icon name="event"></q-icon>
            </template>
          </q-input>
        </q-card-section>
      </div>
    </div>
</template>

<script>
    export default {
        name: "loginComponent"
    }
</script>

<style scoped>

</style>
