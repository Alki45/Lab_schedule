<template>
  <div class="min-h-screen bg-slate-100">
    <!-- Layout Wrapper -->
    <div class="flex min-h-screen">
      <!-- Sidebar -->
      <aside class="w-[260px] bg-white border-r border-gray-200 p-6 shadow-md">
        <h2 class="text-2xl font-bold text-blue-700 mb-6">CSE-Lab</h2>

        <!-- Sidebar Navigation -->
        <nav class="space-y-3">
          <button 
            @click="setView('loadDistribution')" 
            :class="buttonClass('loadDistribution')">
            Load Distribution
          </button>

          <button 
            @click="setView('assignment')" 
            :class="buttonClass('assignment')"
            class="flex items-center justify-between w-full py-3 px-4 rounded-md shadow hover:bg-blue-500 transition duration-300">
            <span>Assignment</span>
            <svg class="w-5 h-5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7"/>
            </svg>
          </button>

          <button 
            @click="setView('Lab-room')" 
            :class="buttonClass('Lab-room')">
            Lab Room
          </button>

          <button 
            @click="setView('assistant')" 
            :class="buttonClass('assistant')">
            Lab Assistants
          </button>

          <button 
            @click="setView('labAssigned')" 
            :class="buttonClass('labAssigned')">
            Lecturers
          </button>

          <button 
            @click="setView('department')" 
            :class="buttonClass('department')">
            Department
          </button>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-8">
        <section>
          <h1 class="text-2xl font-semibold text-gray-700 mb-4">Admin Dashboard</h1>

          <div v-if="currentView === 'loadDistribution'">
            <p>Load Distribution content...</p>
          </div>
          <div v-if="currentView === 'assignment'">
            <p>Assignment content...</p>
          </div>
          <div v-if="currentView === 'Lab-room'">
            <LabRoomManager />
          </div>
          <div v-if="currentView === 'assistant'">
            <AssistantManager />
          </div>
          <div v-if="currentView === 'labAssigned'">
            <p>Lab Assigned content...</p>
          </div>
          <div v-if="currentView === 'department'">
            <p>Department content...</p>
          </div>
          <div v-if="currentView === 'schedule'">
            <p>Schedule content...</p>
          </div>
          <div v-if="currentView === 'lecturer'">
            <p>Lecturer content...</p>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import LabRoomManager from './LabRoom.vue';
import AssistantManager from './AssistanPage.vue';

export default {
  name: "AdminDashboard",
  components: {
    LabRoomManager,
    AssistantManager,
  },
  data() {
    return {
      currentView: '',
    };
  },
  methods: {
    setView(view) {
      this.currentView = view;
    },
    buttonClass(viewName) {
      return [
        'block w-full text-center py-3 px-4 rounded-md transition duration-300 shadow',
        this.currentView === viewName
          ? 'bg-blue-600 text-white'
          : 'bg-gray-100 text-blue-800 hover:bg-blue-500 hover:text-white'
      ];
    },
  },
};
</script>

<style scoped>
</style>