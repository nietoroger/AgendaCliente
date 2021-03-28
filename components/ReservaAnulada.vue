<template>
  <div class="d-flex justify-content-center pb-4">
    <div class="card-1">
      <div class="mb-4">
        <h3 class="text-center color-azul fw-bold">Reserva anulada</h3>
      </div>
      <div class="col-12 d-flex flex-column mb-4">
        <div class="mb-2">
          <h5 class="text-center color-azul">
            Estos son los detalles de la reserva que anulaste
          </h5>
        </div>
        <ProfesionalInfo />
        <calendarioreserva />
      </div>
      <button type="button" class="col-12 btn boton-azul" @click="inicio">
        Volver al inicio
      </button>
      <!-- <button
        type="button"
        onclick="window.location='./agenda-medicos.html';"
        class="col-12 btn btn-secondary mt-4"
      >
        Reservar otra hora
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    inicio() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>
