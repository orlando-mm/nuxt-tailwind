<script setup>
const cards = [
  {
    title: 'Remesas',
    image: '/icons/remesas.svg'
  },
  {
    title: 'Tienda',
    image: '/icons/tienda.svg'
  },
  {
    title: 'Recargas',
    image: '/icons/recargas.svg'
  },
  {
    title: 'Viajes',
    image: '/icons/viajes.svg'
  },
  {
    title: 'Consulado',
    image: '/icons/consulado.svg'
  },
  {
    title: 'Paquete',
    image: '/icons/paquete.svg'
  },
  {
    title: 'Hotel',
    image: '/icons/hotel.svg'
  },
  {
    title: 'Auto',
    image: '/icons/auto.svg'
  }
];
</script>

<template>
  <div class="home__beach__grid-container">
    <div v-for="(card, index) in cards" :key="index">
      <HomeBeachCard :card-data="card" />
    </div>
  </div>
</template>
