<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h1 class="kanban-title">Nikola's Kanban Board</h1>
      </v-col>
    </v-row>
    
    <v-row class="kanban-container" justify="start">
      <!-- "To Do" Column -->
      <v-col class="fixed-width-col" cols="12" md="auto">
        <v-card class="kanban-column">
          <v-card-title class="column-title">To Do</v-card-title>
          <draggable
            v-model="board.todo"
            :group="{ name: 'tasks' }"
            @end="updateStatus('todo')"
          >
            <template #item="{ element }">
              <v-card class="kanban-card mb-2">
                <v-card-title class="card-title">{{ element.title }}</v-card-title>
                <v-card-text class="card-description">{{ element.description }}</v-card-text>
              </v-card>
            </template>
          </draggable>

          <!-- Add Task Form -->
          <v-row class="add-task-form mb-4">
            <v-col cols="12">
              <v-card-title class="card-title">Add new task:</v-card-title>
              <v-text-field 
                v-model="newTask.title" 
                label="Task Title" 
                outlined 
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea 
                v-model="newTask.description" 
                label="Task Description" 
                outlined 
                dense
              ></v-textarea>
            </v-col>
            <v-col cols="12" class="text-center">
              <v-btn class="add-task-button" @click="addTask">Add Task</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- "In Progress" Column -->
      <v-col class="fixed-width-col" cols="12" md="auto">
        <v-card class="kanban-column">
          <v-card-title class="column-title">In Progress</v-card-title>
          <draggable
            v-model="board.inProgress"
            :group="{ name: 'tasks' }"
            @end="updateStatus('inProgress')"
          >
            <template #item="{ element }">
              <v-card class="kanban-card mb-2">
                <v-card-title class="card-title">{{ element.title }}</v-card-title>
                <v-card-text class="card-description">{{ element.description }}</v-card-text>
              </v-card>
            </template>
          </draggable>
        </v-card>
      </v-col>

      <!-- "Done" Column -->
      <v-col class="fixed-width-col" cols="12" md="auto">
        <v-card class="kanban-column">
          <v-card-title class="column-title">Done</v-card-title>
          <draggable
            v-model="board.done"
            :group="{ name: 'tasks' }"
            @end="updateStatus('done')"
          >
            <template #item="{ element }">
              <v-card class="kanban-card mb-2">
                <v-card-title class="card-title">{{ element.title }}</v-card-title>
                <v-card-text class="card-description">{{ element.description }}</v-card-text>
              </v-card>
            </template>
          </draggable>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import draggable from 'vuedraggable';

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

// Reactive object for new task inputs
const newTask = reactive({
  title: '',
  description: '',
});

// Function to add a new task
function addTask() {
  if (newTask.title && newTask.description) {
    board.todo.push({
      id: Date.now(),
      title: newTask.title,
      description: newTask.description,
    });
    // Reset the input fields
    newTask.title = '';
    newTask.description = '';
  } else {
    alert('Please provide a title and description for the task.');
  }
}

// Function to update the task status when dragging is complete
function updateStatus(column: string) {
  console.log(`Tasks updated in the ${column} column`);
  console.log(board);
}

</script>

<style scoped>
.kanban-title {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #371110;
  text-align: left;
  padding-left: 20px;
  padding-top: 20px;
  font-size: 24px;
  font-weight: bold;
}

.kanban-container {
  gap: 20px;
  padding: 20px;
}

.fixed-width-col {
  max-width: 300px;
  min-width: 300px;
}

.kanban-column {
  background-color: #FFF9F3;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #371110;
}

.column-title {
  font-size: 20px;
  color: #371110;
  font-weight: 800;
}

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

.card-title  {
  font-size: 18px;
  color: #371110;
  font-weight: 600;
}

.card-description {
  font-size: 14px;
  color: #371110;
  margin-top: 5px;
}

.kanban-card:hover .card-title,
.kanban-card:hover .card-description {
  color: #FFF9F3;
}

.add-task-button {
  background-color: #371110;
  color: #FFF9F3;
  border-radius: 10px;
  padding: 10px 20px;
}
</style>
