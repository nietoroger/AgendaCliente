<template>
  <div class="input-group mb-3">
    <select
      class="input-group-text"
      ref="tipo"
      :disabled="readonly"
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
      :readonly="readonly"
      :class="{ 'is-invalid': $v.value.identificacion.$error }"
      autofocus
      @input="handleChange"
    />
    <div v-if="!$v.value.identificacion.required" class="invalid-feedback">
      Valor obligatorio
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  mounted() {
    this.$v.$reset();
  },
  props: {
    value: {
      tipo: {
        type: String,
        default: "R",
      },
      identificacion: {
        type: String,
        default: "",
      },
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  validations: {
    value: {
      identificacion: {
        required,
      },
    },
  },
  computed: {
    identificacion: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    handleChange() {
      this.$emit("input", {
        tipo: this.$refs.tipo.value,
        identificacion: this.$refs.identificacion.value.toUpperCase(),
      });
      this.$v.$reset();
    },
    validate() {
      this.$v.$touch();
    },
    reset() {
      this.$v.$reset();
    },
  },
};
</script>

<style>
</style>
