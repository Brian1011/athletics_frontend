<template>
    <div class="q-px-lg q-py-lg">
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <basic-form></basic-form>
        </div>

        <div class="col-xs-12 col-md-6">
          <dark-form/>
        </div>
      </div>

      <br>
      <q-separator/>
      <br>

      <div class="row">
          <div class="col-xs-12 col-md-6">
            <icon-form></icon-form>
          </div>

          <div class="col-xs-12 col-md-6">
            <dark-form/>
          </div>
      </div>
    </div>
</template>

<script>
    import BasicForm from "./basicForm";
    import DarkForm from "./darkForm";
    import IconForm from "./iconForm";
    export default {
        name: "formComponents",
      components: {IconForm, DarkForm, BasicForm}
    }
</script>

<style scoped>

</style>
