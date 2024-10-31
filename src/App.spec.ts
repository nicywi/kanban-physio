import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import KanbanBoard from '@/components/KanbanBoard.vue';
import { describe, it, expect } from 'vitest';

describe('App.vue', () => {
  it('renders the KanbanBoard component', () => {
    const wrapper = mount(App);
    const kanbanBoard = wrapper.findComponent(KanbanBoard);
    expect(kanbanBoard.exists()).toBe(true);
  });
});
