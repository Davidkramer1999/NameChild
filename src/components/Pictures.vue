<template>
  <div class="Pictures">
    Pictures
    <button @click="addNameChild()">POST SOME DATA</button>
    <button @click="getNameChild()">GET DATA</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      childName: "",
    };
  },
  name: "Pictures",
  methods: {
    getNameChild() {
      try {
        fetch(
          "https://q3495uxw3e.execute-api.eu-central-1.amazonaws.com/getChildName"
        )
          .then((response) => response.json())
          .then((json) => (this.childName = json));
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
