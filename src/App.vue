<script setup lang="ts">
import KanbanBoard from './components/KanbanBoard.vue';
</script>

<template>
  <div class="full-page">
    <KanbanBoard />
  </div>
</template>

<style scoped>

.full-page {
  height: 100vh;
  width: 100vw;
  justify-content: left;
  background-color: #FFFFFF;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
</style>
