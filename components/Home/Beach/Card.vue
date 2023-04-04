<script setup>
import { computed } from 'vue';
const props = defineProps({
  cardData: {
    type: Object,
    default: () => ({})
  }
});
const title = computed(() => props.cardData?.title || '');
const image = computed(() => props.cardData?.image || '');
</script>

<template>
  <div
    class="home__beach__card-container navbar__bar-options__img--hover"
  >
    <div class="home__beach__card-container-internal">
      <img loading="lazy" :alt="title" :title="title" :src="image" />
      <span class="home__beach__card--text">{{ title }}</span>
    </div>
  </div>
</template>