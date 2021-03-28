<template>
  <div>
    <div class="d-sm-flex mt-4">
      <select
        ref="cbPrevision"
        v-model.trim.lazy="$v.prevision.$model"
        class="form-select form-select-lg mb-3 me-4"
        :class="{ 'is-invalid': $v.prevision.$error }"
        required
      >
        <option disabled selected value="null">Tu previsión</option>
        <option v-for="p in previsiones" :key="p.id" :value="p">
          {{ p.descripcion }}
        </option>
      </select>

      <select
        v-model="$v.especialidad.$model"
        class="form-select form-select-lg mb-3 me-4"
        :class="{ 'is-invalid': $v.especialidad.$error }"
        required
      >
        <option disabled selected value="null">Especialidad</option>
        <option v-for="p in especialidades" :key="p.id" :value="p">
          {{ p.descripcion }}
        </option>
      </select>
      <button
        type="submit"
        class="btn boton-azul col-12 col-md-2 mb-3"
        @click="Medicos"
      >
        Buscar
      </button>
    </div>
  </div>
</template>

<script>
import { required, minValue } from "vuelidate/lib/validators";
export default {
  async fetch() {
    this.getPrevisiones();
    this.getEspecialidades();
  },
  data() {
    return {
      previsiones: [],
      especialidades: [],
      prevision: null,
      especialidad: null,
    };
  },
  validations: {
    prevision: {
      required,
    },
    especialidad: { required },
  },
  methods: {
    async getPrevisiones() {
      await this.$api.getPrevisiones().then((x) => {
        this.previsiones = x.value;
      });
    },
    async getEspecialidades() {
      await this.$api.getEspecialidades().then((x) => {
        this.especialidades = x.value;
      });
    },
    Medicos() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store.dispatch("setEspecialidad", this.especialidad);
        this.$store.dispatch("setPrevision", this.prevision);
        this.$router.push("/medicos");
      } else {
        console.log("no valid");
      }
    },
  },
};
</script>

<style>
</style>
