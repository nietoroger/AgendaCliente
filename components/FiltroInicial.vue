<template>
  <div class="d-sm-flex mt-4">
    <select
      class="form-select form-select-lg mb-3 me-4"
      aria-label=".form-select-lg"
    >
      <option selected value="0">Tu previsión</option>
      <option v-for="p in previsiones" :key="p.id">
        {{ p.descripcion }}
      </option>
    </select>
    <select
      class="form-select form-select-lg mb-3 me-4"
      aria-label=".form-select-lg"
    >
      <option selected value="0">Especialidad</option>
      <option v-for="p in especialidades" :key="p.id">
        {{ p.descripcion }}
      </option>
    </select>
    <button type="button" class="btn boton-azul col-12 col-sm-2 mb-3">
      Buscar
    </button>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.getPrevisiones();
    this.getEspecialidades();
  },
  data() {
    return {
      previsiones: [],
      especialidades: [],
    };
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
  },
};
</script>

<style>
</style>
