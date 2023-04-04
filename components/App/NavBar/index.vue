<template>
  <div class="not-sr-only md:sr-only">
    <div class="navbar__tracking__container">
      <AppNavBarTracking />
    </div>
  </div>
  <div class="sr-only md:not-sr-only">
    <div class="navbar__bar-phone__container">
      <div class="flex flex-row justify-center w-[275px]">
        <AppNavBarPhone />
      </div>
    </div>
  </div>
  <div class="navbar__bar-options__container">
    <AppNavBarLogo />
    <AppNavBarOptions />
  </div>
</template>
