<template>
  <div id="divDetalles">
    <h5 class="text-center text-sm-start color-azul">Detalles de la reserva</h5>
    <div class="col-12 d-flex flex-column mb-3">
      <ProfesionalInfo />
      <Calendarioreserva />
    </div>
    <!-- Botón Anular -->
    <b-button class="btn boton-azul col-12" @click="$emit('AbrirModal')">
      Anular reserva
    </b-button>
  </div>
</template>

<script>
import calendarioreserva from "@/components/calendarioreserva.vue";
export default {
  components: { calendarioreserva },
  mounted() {
    //this.load();
  },
  name: "detallereserva",
  props: ["reserva"],
  data() {
    return {
      profesional: {
        codigo: 0,
        descripcion: "",
        observacion: "",
        codespecialidad: 0,
      },
      especialidad: {
        codigo: 0,
        descripcion: "",
      },
    };
  },
  methods: {
  },
};
</script>

<style scoped>
label {
  margin-bottom: 0em;
}
</style>
