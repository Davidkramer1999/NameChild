<!-- ToastHandler.vue -->
<template>
  <div></div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const showToast = (text, type) => {
  const severity = type === 'success' ? 'success' : 'error';
  const summary = type === 'success' ? 'Success' : 'Error';
  toast.add({ severity, summary, detail: text, life: 3000 });
};

import { defineExpose } from 'vue';
defineExpose({ showToast });
</script>
