<template>
  <div class="font-manrope">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (title = '') => {
    return title ? `CUBAMAX | ${title}` : 'CUBAMAX';
  },
  meta: [
    {
      name: 'description',
      content: 'Increíble aplicación de ayuda para cubanos'
    }
  ]
});
</script>
