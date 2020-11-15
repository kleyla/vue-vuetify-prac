<template>
  <div id="pedido">
    <div
      class="formulario d-flex align-center justify-center"
      :class="{ showForm: move }"
    >
      <Formulario />
    </div>
    <div id="landing">
      <v-row class="box" v-bind:class="{ move: move }">
        <v-col cols="12" md="6" class="d-flex flex-column align-center">
          <h2 class="white--text pt-5">Vue</h2>
          <v-row>
            <img :src="'./botellones-agua.png'" class="imagen" />
          </v-row>
          <v-row>
            <v-btn @click="move = true">Realizar pedido</v-btn>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <v-card flat class="mx-auto my-12" max-width="500">
            <v-card-title>Title</v-card-title>
            <v-card-text>
              <p>
                Turns out semicolon-less style is easier and safer in TS because
                most gotcha edge cases are type invalid as well
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Formulario from "../components/Formulario.vue";

export default {
  components: {
    Formulario,
  },
  data() {
    return {
      move: false,
    };
  },
};
</script>

<style scoped>
#pedido {
  position: relative;
  height: 100vh;
  width: 100vw;
}
.formulario {
  width: 50%;
  height: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 4s ease-in-out;
  /*display: none !important;*/
  /*transition: opacity 2s linear;*/
  /* background-color: red; */
}
.showForm {
  visibility: visible;
  /*display: block !important;*/
  opacity: 1;
}
.landing {
  position: absolute;
  top: 0;
  z-index: 100;
}
.box {
  height: 100vh;
  width: 100vw;
  /*position: relative;*/
  transition: all 3s ease-in-out;
  -webkit-transition: all 3s ease-in-out;
  -moz-transition: all 3s ease-in-out;
  -o-transition: all 3s ease-in-out;
  -ms-transition: all 3s ease-in-out;
  z-index: 100;
  /*overflow: hidden;*/
  background: #b2fefa; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #0ed2f7,
    #b2fefa
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #0ed2f7,
    #b2fefa
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.move {
  transform: translate(50%, 0);
  -webkit-transform: translate(50%, 0);
  -moz-transform: translate(50%, 0);
  -o-transform: translate(50%, 0);
  -ms-transform: translate(50%, 0);
}
.imagen {
  height: 100%;
  width: 100%;
  z-index: 100;
  /*position: absolute;*/
  /*  top: 0;*/
}
.my-btn {
  position: absolute;
  top: 50vh;
  left: 30vw;
}
@media (max-width: 960px) {
  .formulario {
    width: 100%;
  }
  .box {
    width: 100%;
    height: auto;
  }
  .imagen {
    width: 100%;
  }
  .move {
    transform: translate(0, 100%);
    -webkit-transform: translate(0, 100%);
    -o-transform: translate(0, 100%);
    -moz-transform: translate(0, 100%);
  }
}
</style>
