<template>
  <div>
    <!-- Filtro médicos -->
    <div class="bg-blanco linea-baja-azul fixed">
      <div class="col-12 col-md-6 col-lg-6 mx-auto pt-3">
        <!-- <h2 class="text-center text-sm-start color-azul pt-2 fw-bold">Reserva de hora</h2> -->
        <div class="d-flex flex-column flex-sm-row">
          <div class="d-flex flex-column col-sm-5 col-md-6 col-lg-5 mx-1">
            <!-- Select debe "traer" la especialidad que se buscó en el Home -->
            <select
              class="form-select form-select-lg mb-3"
              v-model="especialidad"
              @change="getProfesionales"
            >
              <option v-for="p in especialidades" :key="p.id" :value="p">{{ p.descripcion }}</option>
            </select>
          </div>
          <div class="d-flex flex-column col-sm-5 col-md-5 col-lg-5 mx-1">
            <div class="d-flex">
              <select class="form-select form-select-lg col-12 mb-3" aria-label=".form-select-lg">
                <option v-for="p in profesionales" :key="p.id" :value="p">{{ p.descripcion }}</option>
              </select>
              <!-- Desaparece en =<576px -->
              <button
                type="button"
                class="btn boton-azul d-none d-sm-block mb-3 btn-buscar-medicos mx-3"
              >Buscar</button>
            </div>
          </div>

          <!-- Desaparece en >576px -->
          <button type="button" class="btn boton-azul col-12 mb-3 d-block d-sm-none">Buscar</button>
        </div>
      </div>
    </div>
    <!-- Medio de atención -->
    <div class="d-flex justify-content-center my-3">
      <b-button-group>
        <b-button variant="outline-primary" @click="modalidad = 'P'">Presencial</b-button>
        <b-button variant="outline-primary" @click="modalidad = 'T'">Telemedicina</b-button>
      </b-button-group>
    </div>
    <!-- Mensaje convenio seleccionado -->
    <div class="d-flex justify-content-center">
      <div class="col-12 col-sm-10 col-md-10 col-lg-10 col-xl-8 bg-blanco mt-4 p-3 rounded-3">
        <h5
          class="color-azul fw-bold mb-0"
        >Mostrando médicos con convenio {{ prevision.descripcion }}</h5>
      </div>
    </div>

    <pre>{{ this.conConvenio }}</pre>

    <div class="d-flex flex-column align-items-center" id="todos">
      <CardProfesional
        :profesional="profesional"
        :fechas="fechas"
        v-for="profesional in profesionales"
        :key="profesional.id"
      />
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.getEspecialidades();
    this.getProfesionales();
    this.getFechas();
  },
  name: "medicos",
  data() {
    return {
      modalidad: "P",
      fecha: null,
      fechas: [],
      especialidades: [],
      profesionales: [],
    };
  },
  computed: {
    prevision: {
      get() {
        return this.$store.state.prevision;
      },
    },
    especialidad: {
      get() {
        return this.$store.state.especialidad;
      },
      set(value) {
        this.$store.dispatch("setEspecialidad", value);
      },
    },
    conConvenio: {
      get() {
        //return this.profesionales.filter((x) => x.codespecialidad == this.especialidad.id);
        return this.profesionales
          .filter((x) => x.LNKProfesionalConvenio.length > 0)
          .filter((y) => y.idconvenio == "10-10");
      },
    },
  },
  methods: {
    async getEspecialidades() {
      await this.$api.getEspecialidades().then((x) => {
        this.especialidades = x.value;
      });
    },
    async getProfesionales() {
      await this.$api
        .getProfesionalesEspecialidad(this.especialidad.id)
        .then((x) => {
          this.profesionales = x.value;
        });
    },
    getFechas() {
      //Genera arreglo de 5 dias desde la fecha actual.
      this.fechas = [];
      this.fecha = this.$moment();
      this.fechas.push(this.$moment());
      for (var i = 1; i <= 4; ++i) {
        this.fechas.push(this.$moment(this.fecha).add(i, "days"));
      }
      //console.log(this.fechas);
    },
  },
};
</script>

<style>
</style>
