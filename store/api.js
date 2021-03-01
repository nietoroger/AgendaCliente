export const state = () => ({

});

export const actions = {
  async getEspecialidades(context) {
    const url = `/especialidades?ambiente=f&modalidad=A&sucursal=1`;
    const data = await this.$axios.$get(url);
    return data;
  }


}
