<template>
  <div id="pedido">
    <v-row>
      <v-col cols="12" md="6" class="izq d-flex align-center justify-center">
        <v-card class="mx-auto" max-width="500" outlined>
          <div class="mt-5">
            <h2 class="text-center font-weight-bold">Registrar pedido</h2>
          </div>
          <v-card-text>
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="nombre"
                      label="Nombre y Apellido"
                      required
                      filled
                      rounded
                      dense
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="ci"
                      label="CI"
                      required
                      filled
                      rounded
                      dense
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="direccion"
                      label="Direccion"
                      required
                      filled
                      rounded
                      dense
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="zona"
                      label="Zona"
                      required
                      filled
                      rounded
                      dense
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="telefono"
                      label="Telefono"
                      required
                      filled
                      rounded
                      dense
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="botellones"
                      label="Nro de botellones"
                      required
                      filled
                      rounded
                      dense
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row cols="12">
                  <v-btn>Confirmar</v-btn>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="der d-flex align-center justify-center">
        <img :src="'/764.png'" alt="Agua" class="" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nombre: "",
      ci: "",
      direccion: "",
      zona: "",
      telefono: "",
      botellones: null,
    };
  },
};
</script>

<style scoped>
#pedido {
  height: 100vh;
  width: 100vw;
}
.izq {
  /* background: orange; */
}
.der {
  /*background: yellow;*/
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}
.imagen {
  height: 100%;
  width: auto;
  background: red;
}
</style>
