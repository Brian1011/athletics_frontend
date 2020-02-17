<template>
  <div class="q-px-lg q-py-lg">
    <div class=""></div>
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <profile></profile>
      </div>
    </div>

    <br>
    <q-separator></q-separator>
    <br>

    <div class="row">
      <add-to-cart></add-to-cart>
    </div>

    <br>
    <q-separator></q-separator>
    <br>
  </div>
</template>

<script>
    import Profile from "./profile";
    import AddToCart from "./addToCart";
    export default {
        name: "exampleComponent",
      components: {AddToCart, Profile}
    }
</script>

<style scoped>

</style>
