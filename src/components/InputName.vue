<template>
  <div>
    <form>
      <div>
        <CustomInput type="text" v-model="name" placeholder="Moje ime" />
        <ErrorMessage :message="nameError" />
      </div>
      <div>
        <CustomInput type="text" v-model="choosingName" placeholder="Tvoje ime" />
        <ErrorMessage :message="choosingNameError" />
      </div>
      <div>
        <CustomButton @click="checkForm">Pošlji</CustomButton>
      </div>
    </form>
  </div>
</template>

<script>
import CustomInput from './CustomInput.vue';
import CustomButton from './CustomButton.vue';
import ErrorMessage from './ErrorMessage.vue';
import { postRequest } from './services/apiService';
import { calculateWeeksDifference, validateSpecialChars } from './utilities/utilities';
import { infoToast, errorToast } from './ToastHandler';

export default {
  name: 'InputName',
  components: {
    CustomInput,
    CustomButton,
    ErrorMessage
  },
  data() {
    return {
      name: '',
      choosingName: '',
      nameError: '',
      choosingNameError: ''
    };
  },
  methods: {
    validateForm() {
      let isValid = true;

      this.nameError = '';
      this.choosingNameError = '';

      if (!this.name) {
        this.nameError = 'Name is required';
        isValid = false;
      }

      if (!this.choosingName) {
        this.choosingNameError = 'Choosing name is required';
        isValid = false;
      }

      if (!validateSpecialChars(this.name) || !validateSpecialChars(this.choosingName)) {
        console.log("faiil");
        errorToast('Validation failed', 'error');
        isValid = false;
      }

      return isValid;
    },
    async submitForm() {
      try {
        const payload = {
          nameChild: this.name,
          userName: this.choosingName
        };
        const response = await postRequest(`${process.env.VUE_APP_URL}/addChildName`, payload);
        console.log(response, 'response');

        infoToast(`${this.choosingName}, se vidimo cež ${calculateWeeksDifference('28.7.2023')} tednov`, 'success');

      } catch (error) {
        errorToast('An error occurred', 'error');
      }
      return false;
    },
    async checkForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
        const isSuccess = await this.submitForm();
        if (isSuccess) {
          this.name = '';
          this.choosingName = '';
        }
      }
    }
  }
};
</script>

<style ></style>
