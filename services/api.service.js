export class apiService {
  constructor({ $axios }) {
    this.axios = $axios;
  }
//baseURL: http://masterkey.fortidyndns.com:8082/mkodata/odata/
  async getEspecialidades() {
    const url = '/especialidades?$filter=activo eq 1&$orderby=descripcion asc';
    const res = await this.axios.$get(url);
    return res;
  }

  async getPrevisiones() {
    const url = '/previsiones?$filter=activo eq 1&$orderby=id asc';
    const res = await this.axios.$get(url);
    return res;
  }

  async getReserva(id) {
    const url = `/reservas('${id}')`;
    const res = await this.axios.$get(url);
    return res;
  }

  async getReservaConcreta(id, tipoId, identificacion) {
    identificacion = identificacion.replace(/\./g, '').replace(/\-/g, '');
    //identificacion = this.$utils.santizeRut(identificacion);
    const url = `/reservas?$filter=${tipoId == 'R' ? 'rut' : 'pasaporte'} eq '${identificacion}' and id eq '${id}' and codestado in (1,2)`;
    const res = await this.axios.$get(url);
    return res;
  }

  async getProfesional(id) {
    const url = `/profesionales(${id})`;
    const res = await this.axios.$get(url);
    return res;
  }
  async getProfesionalesEspecialidad(id) {
    const url=`/profesionales?$filter=codespecialidad eq ${id}&$orderby=descripcion`;
    const res = await this.axios.$get(url);
    return res;
  }

  async getEspecialidad(id) {
    const url = `/especialidades(${id})`;
    const res = await this.axios.$get(url);
    return res;
  }

  async anularReserva(id){
    const url = `/reservas('${id}')/anular`;
    const res = await this.axios.$post(url);
    return res;
  }

}
