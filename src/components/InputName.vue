<template>
  <div>
    <form>
      <div>
        <input type="text" v-model="name" placeholder="Text" />
      </div>
      <div>
        <input
          type="text"
          v-model="choosingName"
          placeholder="Kdo je pomagal izbrati ime"
        />
      </div>
      <div><button @click="(e) => checkForm(e)">Pošlji</button></div>
    </form>
  </div>
</template>

<script>
export default {
  name: "InputName",
  data() {
    return {
      name: "",
      choosingName: "",
    };
  },

  methods: {
    checkForm(e) {
      e.preventDefault();
      if (this.name.length > 0 && this.choosingName.length > 0) {
        return this.addNameChild();
      }
      this.errors = [];
      if (!this.name) {
        let myToast = this.$toasted.show(" ");
        myToast.text("Prosim preverite vnešeno ime").goAway(3500);
      }
      if (!this.choosingName) {
        let myToast = this.$toasted.show(" ");
        myToast.text("Prosim preverite polje spodnje polje").goAway(3500);
      }
    },
    addNameChild() {
      fetch(`${process.env.VUE_APP_TITLE}addChildName`, {
        method: "POST",
        body: JSON.stringify({
          nameChild: this.name,
          userName: this.choosingName,
        }),
      })
        .then((response) => response.json())
        .then(() => {
          let myToast = this.$toasted.show(" ");
        myToast.text(`${this.choosingName} hvala za vaš glas`).goAway(3500);
        });
    },
  },
};
</script>

<style scoped>
button {
  height: 40px;
  border-radius: 30px;
  outline: none;
  text-align: center;
  padding: 0px 20px 0px 20px;
  border: 3px solid grey;
  font-size: 16px;
  cursor: pointer;
  background: lightblue;
  color: grey;
}
input {
  width: 100%;
  height: 40px;
  border-radius: 30px;
  outline: none;
  padding: 0px 40px 0px 20px;
  border: 3px solid grey;
  background: lightblue;
  font-size: 16px;
}
input:focus {
  border: 2px solid grey;
}

</style>
