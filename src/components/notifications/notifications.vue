<template>
  <div>
    <q-card>
      <q-card-section>
        <p class="text-h6 flex">Types of Notifications (Default Notification)</p>
        <div class="row">
          <div class="col-lg-3 q-pr-md">
            <q-btn color="info" @click="triggerNotification('info','Info notification')">Info</q-btn>
          </div>

          <div class="col-lg-3 q-pr-md">
            <q-btn color="positive" @click="triggerNotification('positive', 'Success notification')">Positive</q-btn>
          </div>

          <div class="col-lg-3 q-pr-md">
            <q-btn color="negative" @click="triggerNotification('negative','Danger notification')">Negative</q-btn>
          </div>

          <div class="col-lg-3 q-pr-md">
            <q-btn color="warning" @click="triggerNotification('warning', 'Warning notification')">Warning</q-btn>
          </div>
        </div>

      </q-card-section>
    </q-card><br>

    <q-card>
      <q-card-section>
        <p class="text-h6 flex">Custom Notification Colours</p>
        <p class="text-body2 flex">If you feel like the default notification are limiting you can customize it to match your taste. <br> Below are just a few examples</p>
        <div class="row">
          <div class="col-lg-2 q-pr-md">
            <q-btn color="blue-grey" @click="triggerNotification('blue-grey ','Blue-Grey Colour')">blue-grey </q-btn>
          </div>

          <div class="col-lg-2 q-pr-md">
            <q-btn color="brown" @click="triggerNotification('brown', 'Brown Colour')">brown</q-btn>
          </div>

          <div class="col-lg-2 q-pr-md">
            <q-btn color="black" @click="triggerNotification('black','Black notification')">black</q-btn>
          </div>

          <div class="col-lg-2 q-pr-md">
            <q-btn color="pink" @click="triggerNotification('pink', 'Pink notification')">pink</q-btn>
          </div>

          <div class="col-lg-2 q-pr-md">
            <q-btn color="grey" @click="triggerNotification('grey', 'Grey notification')">grey</q-btn>
          </div>

          <div class="col-lg-2 q-pr-md">
            <q-btn color="purple" @click="triggerNotification('purple', 'Purple notification')">purple</q-btn>
          </div>
        </div>

      </q-card-section>
    </q-card><br>

    <q-card>
      <q-card-section>
        <p class="text-h6 flex">Notification Position</p>
        <p class="text-body2 flex">You can place notifications in any position as shown below. <br>I like the top-right :-)   </p>
        <div>
          <!--top-->
          <div class="row flex flex-center">
            <div class="col-lg-4 q-pr-md">
              <q-btn color="primary" @click="notificationPosition('primary','Info notification', 'top-left')">Primary</q-btn>
            </div>

            <div class="col-lg-4 q-pr-md">
              <q-btn color="positive" @click="notificationPosition('positive', 'Success notification', 'top')">Top</q-btn>
            </div>

            <div class="col-lg-4 q-pr-md">
              <q-btn color="negative" @click="notificationPosition('negative','Danger notification', 'top-right')">Top Right</q-btn>
            </div>
          </div><br>

          <!--center-->
          <div class="row flex flex-center">
            <div class="col-lg-4 q-pr-md">
              <q-btn color="primary" @click="notificationPosition('primary','Left notification', 'left')">Left</q-btn>
            </div>

            <div class="col-lg-4 q-pr-md">
              <q-btn color="positive" @click="notificationPosition('positive', 'Center notification', 'center')">Center</q-btn>
            </div>

            <div class="col-lg-4 q-pr-md">
              <q-btn color="negative" @click="notificationPosition('negative','Right notification', 'right')">Right</q-btn>
            </div>
          </div><br>

          <!--bottom-->
          <div class="row flex flex-center">
            <div class="col-lg-4 q-pr-md">
              <q-btn color="primary" @click="notificationPosition('primary','Bottom left notification', 'bottom-left')">Bottom Left</q-btn>
            </div>

            <div class="col-lg-4 q-pr-md">
              <q-btn color="positive" @click="notificationPosition('positive', 'Success notification', 'bottom')">Bottom</q-btn>
            </div>

            <div class="col-lg-4 q-pr-md">
              <q-btn color="negative" @click="notificationPosition('negative','Danger notification', 'bottom-right')">Bottom Right</q-btn>
            </div>
          </div>
        </div>


      </q-card-section>
    </q-card><br>
  </div>
</template>

<script>
    export default {
        name: "notifications",
        data(){
          return{

          }
        },
        methods:{
            triggerNotification(type, message){
              this.$q.notify({
                  message: type,
                  caption: message,
                  color:type,
                  position:'top-right'
                })
            },

          notificationPosition(type, message, position){
            this.$q.notify({
              message: position,
              caption: message,
              color:type,
              position: position
            })
          }
        }
    }
</script>

<style scoped>

</style>
