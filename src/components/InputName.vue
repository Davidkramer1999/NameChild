<template>
  <div>
    <form>
      <div>
        <input
          type="text"
          v-model="name"
          ref="Ime"
          @change="checkSpecialCharacters(name)"
          placeholder="Moje ime"
        />
      </div>
      <div>
        <input
          type="text"
          v-model="choosingName"
          @change="checkSpecialCharacters(choosingName)"
          placeholder="Tvoje ime"
        />
      </div>
      <div><button @click="(e) => checkForm(e)">Pošlji</button></div>
    </form>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "InputName",
  data() {
    return {
      name: "",
      choosingName: "",
    };
  },
  computed: {},

  methods: {
    calculateBirth() {
      const date = moment("28.7.2023", "DD.MM.YYYY");
      const dateToday = moment();
      return date.diff(dateToday, "weeks");
    },
    checkSpecialCharacters(name) {
      if (!name) {
        return;
      }
      const specialCharacters = /[`!@#$%^&*()_+\-=\\|,.<>?~]/;
      let myToast = this.$toasted
        .show("Prosim ne vpisujte posebnih znakov")
        .goAway(3500);
      return specialCharacters.test(name) ? myToast : name;
    },
    checkForm(e) {
      e.preventDefault();

      if (this.name && this.age) {
        return this.addNameChild();
      }
      if (!this.name) {
        let nameToast = this.$toasted.show(" ");
        nameToast.text("Prosim preverite vnešeno ime").goAway(3500);
      }
      if (!this.choosingName) {
        let choosingNameToast = this.$toasted.show(" ");
        choosingNameToast.text("Prosim preverite polje Tvoje ime").goAway(3500);
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
          this.name = "";
          this.choosingName;
          myToast
            .text(
              `${
                this.choosingName
              }, se vidimo cež ${this.calculateBirth()}tednov `
            )
            .goAway(3500);
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
  font-size: 20px;
  cursor: pointer;
  background: lightblue;
  color: grey;
  font-weight: 600;
}
input {
  width: 80% !important;
  height: 40px;
  border-radius: 30px;
  outline: none;
  padding: 0px 40px 0px 20px;
  border: 3px solid grey;
  background: lightblue;
  font-size: 20px;
  font-weight: 600;
}
input:focus {
  border: 2px solid grey;
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
