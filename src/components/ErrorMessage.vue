<template>
    <div v-if="isVisible" class="error-message">
        {{ message }}
    </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
    props: {
        message: {
            type: String,
            default: '',
        },
    },
    setup(props) {
        const isVisible = ref(false);

        watch(
            () => props.message,
            (newVal) => {
                if (newVal) {
                    isVisible.value = true;
                } else {
                    isVisible.value = false;
                }
            }
        );

        return { isVisible };
    },
};
</script>

<style >
.error-message {
    color: red;
}
</style>
