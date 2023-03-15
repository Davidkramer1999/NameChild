<template>
  <div>
    <form  >
        <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for=" error in errors" v-bind:key="error">{{ error }}</li>
    </ul>
  </p>
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
    <div><button @click= "(e) => checkForm(e)">Pošlji</button></div>
</form>
  </div>
</template>

<script>
export default {
  name: "InputName",
  data() {
    return {
      errors: [],
      name: "",
      choosingName: "",
    };
  },

  methods: {
    checkForm (e)  {
      if (this.name.length > 0  && this.choosingName.length > 0) {
        return this.addNameChild();
      }

      this.errors = [];
      console.log(this.errors);
      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.choosingName) {
        this.errors.push('Age required.');
      }

      e.preventDefault();
    },
    addNameChild() {
      fetch(`${process.env.VUE_APP_TITLE}addChildName`,
        {
          method: "POST",
          body: JSON.stringify({
            nameChild: this.name,
            userName: this.choosingName,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
  }
}
</script>

<style scoped>
button {
  height: 40px;
  border-radius: 30px;
  outline: none;
  text-align: center;
  padding: 0px 20px 0px 20px;
  border: 2px solid #333;
  font-size: 16px;
  cursor: pointer;
}
input {
  width: 100%;
  height: 40px;
  border-radius: 30px;
  outline: none;
  padding: 0px 40px 0px 20px;
  border: 2px solid #333;
  font-size: 16px;
}
input:focus {
  border: 2px solid mediumslateblue;
}

.bar {
  width: 170px;
  height: 170px;
  border-radius: 10px;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 40px;
  box-shadow: 0px 0px 20px 0px #272727;
  visibility: hidden;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  transition: all 0.3s;
}
img:focus + .bar {
  top: 60px;
  visibility: visible;
  opacity: 1;
}
.bar:focus {
  top: 60px;
  visibility: visible;
  opacity: 1;
}
p {
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
}
p:hover {
  background: mediumslateblue;
  color: white;
}
</style>
