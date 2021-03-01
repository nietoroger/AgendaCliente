<template>
  <div
    class="bg-blanco home-agenda-body"
    style="height: 100vh; display: flex; flex-direction: column"
  >
    <logo></logo>

    <div class="container-fluid d-flex justify-content-center my-auto">
      <div class="row justify-content-center" style="margin-bottom: 5%">
        <div class="d-flex flex-sm-row flex-column justify-content-center">
          <h1 class="me-2 color-texto">Bienvenido,</h1>
          <h1 class="fw-bold color-texto">busca acá tu hora al médico</h1>
        </div>
        <div class="col-12 col-md-10 col-lg-9">
          <LazyFiltroInicial />
          <div class="d-flex mx-3 mt-4">
            <b-img
              src="~/assets/img/anular-hora.svg"
              class="icon-agenda me-2"
              alt="anular"
            ></b-img>
            <NuxtLink class="color-texto h5 m-0" to="/anular">
              Anular una hora</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
</style>
