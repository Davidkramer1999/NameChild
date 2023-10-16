<template>
  <div>
    <InputText :type="type" :value="modelValue" @input="updateValue($event.target.value)" :placeholder="placeholder"
      class="custom-input" />
  </div>
</template>

<script>

export default {
  props: {
    type: String,
    modelValue: String,
    placeholder: String,
  },
  methods: {
    updateValue(value) {
      this.$emit("update:modelValue", value);
    },
  },
};
</script>

<style scoped>
input {
  width: 80% !important;
  height: 40px;
  border-radius: 30px;
  outline: none;
  padding: 0px 40px 0px 20px;
  border: 3px solid grey;
  background: lightblue;
  font-size: 20px;
  color: black;
}

input:focus {
  border: 4px solid grey;
}

@media screen and (max-width: 500px) {
  input {
    width: 83% !important;
    height: 40px;
    border-radius: 30px;
    outline: none;
    padding: 0px 20px 0px 20px;
    border: 3px solid grey;
    background: lightblue;
    font-size: 16px;
  }
}
</style>
