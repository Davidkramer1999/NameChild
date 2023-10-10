<template>
    <section :class="sectionClass">
        <img :class="imageClass" :src="imageSrc" :alt="imageAlt" v-bind="aosData" />
        <div :class="descriptionClass" v-bind="aosData">
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
    props: ['sectionClass', 'imageClass', 'descriptionClass', 'imageSrc', 'imageAlt', 'aosData']
}
</script>
