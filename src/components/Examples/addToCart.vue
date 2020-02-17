<template>
    <div class="row">
      <q-card class="my-card q-mx-sm q-my-sm" v-for="item in items">
        <q-img src="statics/images/red.jpeg"></q-img>

        <q-card-section>
          <div class="text-h6">Angry Birds 2 (Multi Player)</div>
          <div class="text-subtitle2">Ksh {{item.price}}</div>
        </q-card-section>

        <q-card-actions>
          <q-btn color="positive" class="full-width" label="Add to cart" @click="addToCart">
            <q-icon name="shopping_cart"></q-icon>
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>
</template>

<script>
  export default {
    name: "addToCart",
    data(){
      return{
        items:[
          {price: '4000'},
          {price: '4800'},
          {price: '9000'},
          {price: '400'},
          {price: '8900'},
          {price: '7800'},
        ]
      }
    },
    methods:{
      addToCart(){
        this.$q.notify({message: 'Success', caption:'Added to cart Successfully', color:'positive', position:'bottom-right'})
      }
    }
  }
</script>

<style scoped>

</style>
