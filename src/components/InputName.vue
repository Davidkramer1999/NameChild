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
import { useToast } from 'primevue/usetoast';
import { calculateWeeksDifference, validateSpecialChars } from './utilities/utilities';

export default {
  name: 'InputName',
  components: {
    CustomInput,
    CustomButton,
    ErrorMessage
  },
  setup() {
    const toast = useToast();

    function showToast(message, severity) {
      toast.add({ severity: severity, summary: message, life: 3000 });
    }

    return {
      showToast
    };
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
        this.showToast('Validation failed', 'error');
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

        if (response) {
          this.showToast(`${this.choosingName}, se vidimo cež ${calculateWeeksDifference('28.7.2023')} tednov`, 'success');
          return true;
        }
      } catch (error) {
        this.showToast('An error occurred', 'error');
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
