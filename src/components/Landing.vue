<template>
  <div id="landing">
    <img :src="'/6710-eps.svg'" class="imagen" />
    <div class="my-btn d-flex align-center justify-center">
      <v-btn @click="move = true">Realizar pedido</v-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#landing {
  height: 100vh;
  width: 100vw;
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
