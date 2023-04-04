<script setup>
const group1 = [
  {
    title: 'Palma',
    image: '/icons/palma.svg'
  },
  {
    title: 'Email',
    image: '/icons/email.svg'
  },
  {
    title: 'Ubicación',
    image: '/icons/ubicacion.svg'
  }
];
const group2 = [
  {
    title: 'Facebook',
    image: '/icons/facebook.svg'
  },
  {
    title: 'Instagram',
    image: '/icons/instagram.svg'
  },
  {
    title: 'Twitter',
    image: '/icons/twitter.svg'
  },
  {
    title: 'Youtube',
    image: '/icons/youtube.svg'
  },
  {
    title: 'Consulado',
    image: '/icons/google.svg'
  }
];
</script>
<template>
  <div class="flex justify-center">
    <div class="flex flex-row justify-between items-end w-[850px]">
      <div class="flex flex-row">
        <div v-for="(img, index) in group1" :key="index">
          <img loading="lazy" :src="img.image" :alt="img.title" :title="img.title" class="w-[51px] h-[41px] mr-2" />
        </div>
      </div>
      <div class="flex flex-col">
        <span class="footer__row-icons-text">encuentranos en</span>
        <div class="flex flex-row">
          <div v-for="(img, index) in group2" :key="index">
            <img loading="lazy" :src="img.image" :alt="img.title" :title="img.title" class="w-[51px] h-[41px] mr-2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
