<template>
  <div class="input-group mb-3">
    <select
      class="input-group-text"
      ref="cbTipo"
      :value="value.tipo"
      @change="handleChange"
    >
      <option value="R" selected>Rut</option>
      <option value="P">Pasaporte</option>
    </select>
    <input
      type="text"
      ref="identificacion"
      class="form-control"
      :value="value.identificacion"
      autofocus
      @input="handleChange"
    />
  </div>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  props: ["value"],
  data() {
    return {
      //tipo: "R",
    };
  },
  validations: {
    identificacion: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(20),
    },
  },
  methods: {
    handleChange() {
      //this.$refs.txtIdentificacion.focus();
      //this.$v.value.identificacion.$touch();
      this.$emit("input", {
        tipo: this.$refs.cbTipo.value,
        identificacion: this.$refs.identificacion.value.toUpperCase(),
      });
    },
  },
};
</script>

<style>
</style>
