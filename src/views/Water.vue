<template>
  <div id="water">
    <div class="box" v-bind:class="{ move: move }">
      <img :src="'/6710-eps.svg'" class="imagen" />
      <div class="my-btn d-flex align-center justify-center">
        <v-btn @click="move = true">Realizar pedido</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      move: false,
    };
  },
};
</script>

<style scoped>
#water {
}
.box {
  height: 100vh;
  width: 50vw;
  position: relative;
  transition: all 3s ease-in-out;
  -webkit-transition: all 3s ease-in-out;
  -moz-transition: all 3s ease-in-out;
  -o-transition: all 3s ease-in-out;
  -ms-transition: all 3s ease-in-out;
}
.move {
  transform: translate(100%, 0);
  -webkit-transform: translate(100%, 0);
  -moz-transform: translate(100%, 0);
  -o-transform: translate(100%, 0);
  -ms-transform: translate(100%, 0);
}
.imagen {
  height: 100%;
  width: auto;
  position: absolute;
  top: 0;
}
.my-btn {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
