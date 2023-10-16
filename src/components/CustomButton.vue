<template>
  <div>
    <button @click="handleClick" class="custom-button">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style scoped>
.custom-button {
  height: 40px;
  border-radius: 30px;
  outline: none;
  text-align: center;
  padding: 0px 20px;
  border: 3px solid grey;
  font-size: 20px;
  cursor: pointer;
  background: lightblue;
  color: grey;
}
</style>
