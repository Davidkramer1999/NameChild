<template>
  <div class="Pictures">
    Pictures
    <button @click="(e) => addNameChild()">POST SOME DATA</button>
    <button @click="() => getNameChild()">GET DATA</button>
    {{ childName }}
  </div>
</template>

<script>
console.log(process.env.VUE_APP_TITLE);

export default {
  data() {
    return {
      childName: null,
    };
  },
  name: "Pictures",
  props: {
    msg: String,
  },

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
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
