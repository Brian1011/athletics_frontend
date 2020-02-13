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
            <validated-form/>
          </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-6">
          <coloured-form></coloured-form>
        </div>
      </div>

    </div>
</template>

<script>
    import BasicForm from "./basicForm";
    import DarkForm from "./darkForm";
    import IconForm from "./iconForm";
    import ValidatedForm from "./validatedForm";
    import ColouredForm from "./colouredForm";
    export default {
      name: "formComponents",
      components: {ColouredForm, ValidatedForm, IconForm, DarkForm, BasicForm}
    }
</script>

<style scoped>

</style>
