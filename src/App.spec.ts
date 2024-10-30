// src/App.spec.ts
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';
import { expect, test } from 'vitest';
import { createVuetify } from 'vuetify';

// Create a simple router for the test
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HelloWorld, // Replace with your component or a stub
    },
    {
      path: '/about',
      component: HelloWorld, // Replace with your component or a stub
    },
  ],
});

// Create a Vuetify instance
const vuetify = createVuetify();

test('renders a Vuetify button', async () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router, vuetify],
    },
  });
  
  await router.isReady(); // Wait for the router to be ready
  
  expect(wrapper.html()).toContain('Hello Vuetify');
});

test('renders without crashing', async () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router, vuetify],
    },
  });
  
  await router.isReady(); // Wait for the router to be ready
  
  expect(wrapper.exists()).toBe(true);
});
