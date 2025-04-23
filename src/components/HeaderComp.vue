<template>
    <div class="  bg-gray-200  p-3 rounded-lg flex items-center justify-between">
      <!-- Logo Section -->
      <div class="logo flex space-x-3 ml-3">
        <svg class="w-[48px] h-[48px] text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.383 4.076a6.5 6.5 0 0 0-6.887 3.95A5 5 0 0 0 7 18h3v-4a2 2 0 0 1-1.414-3.414l2-2a2 2 0 0 1 2.828 0l2 2A2 2 0 0 1 14 14v4h4a4 4 0 0 0 .988-7.876 6.5 6.5 0 0 0-5.605-6.048Z"/>
          <path d="M12.707 9.293a1 1 0 0 0-1.414 0l-2 2a1 1 0 1 0 1.414 1.414l.293-.293V19a1 1 0 1 0 2 0v-6.586l.293.293a1 1 0 0 0 1.414-1.414l-2-2Z"/>
        </svg>
        <h1 class="font-semibold text-blue-800 text-2xl py-4">LabSync</h1>
      </div>
  
      <!-- Navigation Links Section  -->
      <div class="flex space-x-4 ml-auto">
        <router-link to="/" class="text-blue-800 font-semibold px-4 py-2 rounded-md hover:bg-blue-200 transition">Dashboard</router-link>
        <router-link to="/courses" class="text-blue-800 font-semibold px-4 py-2 rounded-md hover:bg-blue-200 transition">Courses</router-link>
        <router-link to="/lab-assistants" class="text-blue-800 font-semibold px-4 py-2 rounded-md hover:bg-blue-200 transition">Lab Assistants</router-link>
        <router-link to="/lecturers" class="text-blue-800 font-semibold px-4 py-2 rounded-md hover:bg-blue-200 transition">Lecturers</router-link>
        <router-link to="/lab-rooms" class="text-blue-800 font-semibold px-4 py-2 rounded-md hover:bg-blue-200 transition">Lab Rooms</router-link>
        <router-link to="/schedule" class="text-blue-800 font-semibold px-4 py-2 rounded-md hover:bg-blue-200 transition">Schedule</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>

  </style>
  