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
import { defineComponent } from 'vue';
import { useToast } from 'primevue/usetoast'; // Import useToast
import CustomInput from './CustomInput.vue';
import CustomButton from './CustomButton.vue';
import { postRequest } from './services/apiService'
import { ref } from 'vue'
import { calculateWeeksDifference, validateSpecialChars } from './utilities/utilities'
import ErrorMessage from './ErrorMessage.vue';

export default defineComponent({
  name: 'InputName',
  components: {
    CustomInput,
    CustomButton,
    ErrorMessage
  },
  setup() {
    const name = ref('');
    const choosingName = ref('');
    const toast = useToast();
    const nameError = ref('');
    const choosingNameError = ref('')
    const showToast = (message, severity) => {
      toast.add({ severity: severity, summary: message, life: 3000 });
    };


    const validateForm = (name, choosingName) => {
      let isValid = true;

      // Reset error messages
      nameError.value = '';
      choosingNameError.value = '';

      if (!name) {
        nameError.value = 'Name is required'; // Set error message
        isValid = false;
      }

      if (!choosingName) {
        choosingNameError.value = 'Choosing name is required'; // Set error message
        isValid = false;
      }

      if (!validateSpecialChars(name) || !validateSpecialChars(choosingName)) {
        showToast('Validation failed', 'error');
        isValid = false;
      }

      return isValid;
    };


    const submitForm = async (name, choosingName) => {
      try {
        const payload = {
          nameChild: name,
          userName: choosingName,
        };

        const response = await postRequest(`${process.env.VUE_APP_TITLE}addChildName`, payload);

        if (response) {
          showToast(`${choosingName}, se vidimo cež ${calculateWeeksDifference('28.7.2023')} tednov`, 'success');
          return true;
        }
      } catch (error) {
        showToast(`An error occurred`, 'error');
      }

      return false;
    };

    const checkForm = async (e) => {
      e.preventDefault();
      console.log(name, choosingName, 'name, choosingName');
      if (validateForm(name.value, choosingName.value)) {
        const isSuccess = await submitForm(name.value, choosingName.value);
        console.log(isSuccess, 'isSuccess');
        if (isSuccess) {
          name.value = '';
          choosingName.value = '';
        }
      }
    };

    return {
      name,
      choosingName,
      showToast,
      checkForm,
      nameError, // add this
      choosingNameError
    };
  },
});
</script>

<style scoped></style>
