<script setup lang="ts">

const toggleMenu = ref(false);

function isOpenMenuToggle() {
  toggleMenu.value = !toggleMenu.value
}
</script>

<template>
  <v-app>
    <v-layout class="rounded rounded-md">
      <LayoutAside :menu-toggle="toggleMenu" />
      <LayoutHeader :is-open-menu-toggle="isOpenMenuToggle" />
      <v-main class="d-flex align-center justify-center" style="min-height: 300px; background-color: #FAFAFA;">
        <v-container>
          <NuxtPage/>
        </v-container>
      </v-main>
      <!-- <LayoutFooter class=""/> -->
  </v-layout>
  </v-app>
</template>