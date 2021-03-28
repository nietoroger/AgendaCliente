<template>
  <div class="row card-medico col-12 col-sm-10 col-md-10 col-lg-10 col-xl-8 my-2">
    <div class="col-sm-5 d-flex justify-content-left align-self-center px-3">
      <div class="avatar-custom">
        <img src="@/assets/img/avatar.png" alt="avatar-medico" />
      </div>
      <div class="d-flex flex-column px-3">
        <label class="color-texto fw-bold">{{ this.profesional.descripcion }}</label>
        <span class="color-rojo">{{ profesional.observacion }}</span>
      </div>
    </div>
    <div class="col-sm-7 d-flex flex-column px-1 mt-3 mt-sm-0">
      <div class="col-sm d-flex justify-content-center align-items-center mb-2">
        <div class="col text-center">
          <img
            src="~/assets/img/chevron-left-solid.svg"
            class="flechas-horas"
            alt="flecha izquierda"
          />
        </div>

        <div class="col-2 text-center d-flex flex-column" v-for="fecha in fechas" :key="fecha">
          <span class="color-texto fw-bold">{{ $moment(fecha).format("ddd") }}</span>
          <span>{{ $moment(fecha).format("D MMM") }}</span>
        </div>

        <div class="col text-center">
          <img
            src="~/assets/img/chevron-right-solid.svg"
            class="flechas-horas"
            alt="flecha derecha"
          />
        </div>
      </div>

      <div class="col text-center"></div>
    </div>
    <!-- <div class="align-self-center mt-2">
                    <button type="button" class="btn boton-outline-azul">Ver más horas</button>
    </div>-->
  </div>
</template>

<script>
export default {
  props: ["profesional", "fechas"],
  name: "CardProfesional",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
label {
  margin-bottom: 0em;
}
.timeline-horizontal:before {
  background: linear-gradient(to right, #255c99 50%, #f2f2f2 50%);
}
</style>
