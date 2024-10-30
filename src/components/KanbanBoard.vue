<template>
  <div>
    <h1>Kanban Board</h1>
    <div class="kanban-container">
      <div class="kanban-column">
        <h2>To Do</h2>
        <draggable
          v-model="board.todo"
          :group="{ name: 'tasks' }"
          @end="updateStatus('todo')"
        >
          <template #item="{ element }">
            <div class="kanban-card">
              <h3>{{ element.title }}</h3>
              <p>{{ element.description }}</p>
            </div>
          </template>
        </draggable>
      </div>

      <div class="kanban-column">
        <h2>In Progress</h2>
        <draggable
          v-model="board.inProgress"
          :group="{ name: 'tasks' }"
          @end="updateStatus('inProgress')"
        >
          <template #item="{ element }">
            <div class="kanban-card">
              <h3>{{ element.title }}</h3>
              <p>{{ element.description }}</p>
            </div>
          </template>
        </draggable>
      </div>

      <div class="kanban-column">
        <h2>Done</h2>
        <draggable
          v-model="board.done"
          :group="{ name: 'tasks' }"
          @end="updateStatus('done')"
        >
          <template #item="{ element }">
            <div class="kanban-card">
              <h3>{{ element.title }}</h3>
              <p>{{ element.description }}</p>
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import draggable from 'vuedraggable'; // Import the draggable component

// Define the type for a task
interface Task {
  id: number;
  title: string;
  description: string;
}

// Reactive object to hold the board's status and tasks
const board = reactive({
  todo: [
    { id: 1, title: 'Task 1', description: 'Description of task 1' } as Task,
    { id: 2, title: 'Task 2', description: 'Description of task 2' } as Task,
  ],
  inProgress: [
    { id: 3, title: 'Task 3', description: 'Description of task 3' } as Task,
  ],
  done: [] as Task[],
});

// Function to update the task status when dragging is complete
function updateStatus(column: string) {
  console.log(`Tasks updated in the ${column} column`);
  console.log(board); // Additional check to see the board state after an update
}
</script>

<style scoped>
.kanban-container {
  display: flex;
  justify-content: space-between;
}
.kanban-column {
  width: 30%;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
}
.kanban-card {
  background-color: white;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
</style>
