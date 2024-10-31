import { mount } from '@vue/test-utils';
import KanbanBoard from '@/components/KanbanBoard.vue';
import { describe, it, expect, vi } from 'vitest';
import { reactive } from 'vue';

describe('KanbanBoard.vue', () => {
  it('renders the kanban columns with correct titles', () => {
    const wrapper = mount(KanbanBoard);

    expect(wrapper.find('.column-title').text()).toContain('To Do');
    expect(wrapper.findAll('.column-title').at(1)?.text()).toContain('In Progress');
    expect(wrapper.findAll('.column-title').at(2)?.text()).toContain('Done');
  });

  it('displays initial tasks in the correct columns', () => {
    const wrapper = mount(KanbanBoard);

    const inProgressTasks = wrapper.findAll('.kanban-column').at(1)?.findAll('.kanban-card');
    const doneTasks = wrapper.findAll('.kanban-column').at(2)?.findAll('.kanban-card');

    expect(inProgressTasks?.length).toBe(2);
    expect(doneTasks?.length).toBe(1);
  });

  });

