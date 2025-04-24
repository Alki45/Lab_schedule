<template>
  <div class="min-h-screen bg-slate-100">
    <!-- Layout Wrapper -->
    <div class="flex min-h-screen">
      <!-- Sidebar -->
      <aside class="w-[260px] bg-white border-r border-gray-200 p-6 shadow-emerald-400">
        <h2 class="text-2xl font-bold text-blue-700 mb-6">CSE-Lab</h2>

        <!-- Sidebar Navigation -->
          <div class=" flex flex-col justify-between h-full px-[10px] space-y-[10px]">
            <nav class="space-y-3">
              <button 
                @click="setView('loadDistribution')" 
                :class="buttonClass('loadDistribution')" class="font-semibold font-serif text-xl">
                Load Distribution
              </button>

              <button 
                @click="setView('assignment')" 
                :class="buttonClass('assignment')"
                class="flex items-center justify-between w-full py-3 px-4 rounded-md shadow hover:bg-blue-500 transition duration-300 font-semibold font-serif text-xl">
                <span>Assignment</span>
                <svg class="w-5 h-5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7"/>
                </svg>
              </button>

              <button 
                @click="setView('Lab-room')" 
                :class="buttonClass('Lab-room')" class="font-semibold font-serif text-xl">
                Lab Room
              </button>

              <button 
                @click="setView('assistant')" 
                :class="buttonClass('assistant')" class="font-semibold font-serif text-xl">
                Lab Assistants
              </button>

              <button 
                @click="setView('lecturer')" 
                :class="buttonClass('lecturer') " class="font-semibold font-serif text-xl">
                Lecturers
              </button>

              <button 
                @click="setView('department')" 
                :class="buttonClass('department')" class="font-semibold font-serif text-xl">
                Department
              </button>
              
            </nav>

            <div class="h-[50px]">
                        <div class=" text-blue-600">
                        <router-link to="/setting " class=" inline-flex relative items-center py-2 px-[20px] w-full font-semibold font-serif text-2xl" >
                          <svg class="w-[37px] h-[37px] text-blue-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"/>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                          </svg>
                          Setting
                        </router-link>
                    
                      </div>
            

        </div>

        </div>
      
        
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
            <LecturerManager/>
            
          </div>
        </section>

        
      </main>
    </div>
  </div>
</template>

<script>
import LabRoomManager from './LabRoom.vue';
import AssistantManager from './AssistanPage.vue';
import LecturerManager from './LecturerPage.vue';

export default {
  name: "AdminDashboard",
  components: {
    LabRoomManager,
    AssistantManager,
    LecturerManager
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