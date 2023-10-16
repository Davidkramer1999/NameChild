<template>
  <div class="Pictures">
    Results: {{ childName }}
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
        fetch("https://q3495uxw3e.execute-api.eu-central-1.amazonaws.com/getChildName")
          .then((response) => response.json())
          .then((json) => (this.childName = json));
      } catch (e) {
        console.log("There was an error fetching the data");
      }
    },
  },
};
</script>
