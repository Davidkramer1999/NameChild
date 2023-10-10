<template>
    <section :class="sectionClass">
        <img :src="imageSrc" :class="imageClass" :data-aos="aosData['data-aos']"
            :data-aos-duration="aosData['data-aos-duration']" :data-aos-delay="aosData['data-aos-delay']" />
        <div :class="descriptionClass" v-html="content" :data-aos="aosData['data-aos']"
            :data-aos-duration="aosData['data-aos-duration']" :data-aos-delay="aosData['data-aos-delay']"></div>
    </section>
</template>

<script>
export default {
    props: ['sectionClass', 'imageClass', 'descriptionClass', 'imageSrc', 'aosData', 'content'],
}
</script>
