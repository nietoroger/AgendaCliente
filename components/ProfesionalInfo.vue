<template>
  <div class="col-12 d-flex align-items-center bg-gris p-2 rounded-2">
    <div class="avatar-custom">
      <img src="@/assets/img/avatar-1.png" alt="avatar-medico" />
    </div>
    <div class="d-flex flex-column px-3">
      <label class="color-texto fw-bold">{{
        this.profesional.descripcion
      }}</label>
      <label class="color-texto">{{ especialidad.descripcion }}</label>
      <span class="color-rojo">{{ profesional.observacion }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  async fetch() {
    this.load();
  },
  name: "ProfesionalInfo",
  data() {
    return {
      profesional: {
        codigo: 0,
        descripcion: "",
        observacion: "",
        foto: "",
        codespecialidad: 0,
      },
      especialidad: {
        codigo: 0,
        descripcion: "",
      },
    };
  },
  computed: {
    ...mapState({
      reserva: (state) => state.reserva,
    }),
  },
  methods: {
    load() {
      this.loadProfesional(this.reserva.codmedico);
      this.loadEspecialidad(this.reserva.codespecialidad);
    },
    loadProfesional(id) {
      if (id != null) {
        this.$api.getProfesional(id).then((x) => {
          this.profesional.codigo = x.id;
          this.profesional.descripcion = x.descripcion;
          this.profesional.observacion = x.observacion;
          this.foto = x.foto;
        });
      }
    },
    loadEspecialidad(id) {
      if (id != null) {
        var res = this.$api.getEspecialidad(id).then((x) => {
          this.especialidad.codigo = x.id;
          this.especialidad.descripcion = x.descripcion;
        });
      }
    },
  },
};
</script>

<style scoped>
label {
  margin-bottom: 0em;
}
</style>
