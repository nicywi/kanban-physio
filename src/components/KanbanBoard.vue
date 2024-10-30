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
/* Container and Column Styling */
.kanban-container {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #FFECBE;
  gap: 20px;
}

.kanban-title {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #371110;
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}

/* Column Headers */
.kanban-column h2 {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 20px;
  color: #371110;
  border-bottom: 2px solid #371110;
  padding-bottom: 5px;
  margin-bottom: 10px;
  text-align: center;
}

.kanban-column {
  width: 30%;
  background-color: #FFF9F3;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #371110;
}

/* Card Styling */
.kanban-card {
  background-color: #F2B7B4;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.kanban-card:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  background-color: #88706F;
}

.kanban-card:hover h3{
  color: #FFF9F3;
}

.kanban-card:hover p{
  color: #FFF9F3;
}

.kanban-card h3 {
  font-size: 18px;
  color: #371110;
  font-weight: 600;
  margin: 0;
}

.kanban-card p {
  font-size: 14px;
  color: #371110;
  margin-top: 5px;
}
</style>
