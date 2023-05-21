<template>
  <div>
    <form>
      <div>
        <input type="text" v-model="name" ref="Ime" required placeholder="Moje ime" />
      </div>
      <div>
        <input type="text" v-model="choosingName" required placeholder="Tvoje ime" />
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
    checkSpecialCharacters(input) {
      const specialCharacters = /[`!@#$%^&*()_+\-=\\|,.<>?~]/;
      if (specialCharacters.test(input)) {
        specialCharacters.test(input);
        this.toast("Prosim ne vpisujte posebnih znakov");
        return false;
      } else {
        return true;
      }
    },
    toast(text) {
      return this.$toasted.show(text).goAway(3500);
    },
    checkForm(e) {
      if (!this.name) {
        this.toast("Prosim preverite vnešeno ime");
      }
      if (!this.choosingName) {
        this.toast("Prosim preverite polje spodnje polje");
      }
      if (!this.checkSpecialCharacters(this.choosingName)) {
        return; // add a return statement to exit the method
      }
      if (!this.checkSpecialCharacters(this.name)) {
        return; // add a return statement to exit the method
      }
      this.addNameChild();
    },
    addNameChild() {
      try {
        fetch(`${process.env.VUE_APP_TITLE}addChildName`, {
          method: "POST",
          body: JSON.stringify({
            nameChild: this.name,
            userName: this.choosingName,
          }),
        }).then((data) => {
          if (data?.message) {
            this.name = "";
            this.toast(`${this.choosingName}, se vidimo cež ${this.calculateBirth()}tednov `);
            this.choosingName = "";
          }
        });
      } catch (error) {
        this.toast("Nekaj je šlo narobe, poskusite ponovno");
        // ...
      }
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
