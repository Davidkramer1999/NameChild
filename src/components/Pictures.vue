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
    addNameChild() {
      fetch(
        "https://q3495uxw3e.execute-api.eu-central-1.amazonaws.com/addChildName",
        {
          method: "POST",
          body: JSON.stringify({ nameChild: "aaaaaa", userName: "bbbbb" }),
        }
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
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

<style scoped>
</style>
