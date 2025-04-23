<template>
  <div class="bg-gray-200 p-3 rounded-lg flex items-center justify-between">
    <!-- Logo Section -->
    <div class="logo flex items-center space-x-3 ml-3 ">
      <svg class="w-[48px] h-[48px] text-blue-800" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.383 4.076a6.5 6.5 0 0 0-6.887 3.95A5 5 0 0 0 7 18h3v-4a2 2 0 0 1-1.414-3.414l2-2a2 2 0 0 1 2.828 0l2 2A2 2 0 0 1 14 14v4h4a4 4 0 0 0 .988-7.876 6.5 6.5 0 0 0-5.605-6.048Z"/>
        <path d="M12.707 9.293a1 1 0 0 0-1.414 0l-2 2a1 1 0 1 0 1.414 1.414l.293-.293V19a1 1 0 1 0 2 0v-6.586l.293.293a1 1 0 0 0 1.414-1.414l-2-2Z"/>
      </svg>
      <h1 class="font-semibold text-blue-800 text-2xl">LabSync</h1>
    </div>

    <!-- Navigation Links -->
    <div class="flex space-x-4 ml-auto items-center">
      <router-link to="/" class="text-blue-800 font-semibold px-4 py-2 rounded-md bg-gray-300 hover:bg-blue-200 transition">Home</router-link>
      <router-link to="/dashboard" class="text-blue-800 font-semibold px-4 py-2 rounded-md bg-gray-300 hover:bg-blue-200 transition">Dashboard</router-link>
      <router-link to="/courses" class="text-blue-800 font-semibold px-4 py-2 rounded-md bg-gray-300 hover:bg-blue-200 transition">Courses</router-link>
      <router-link to="/schedule" class="text-blue-800 font-semibold px-4 py-2 rounded-md bg-gray-300 hover:bg-blue-200 transition">Schedule</router-link>
      
      <!-- User Icon -->
      <router-link to="/profile" class="flex flex-col items-center  text-blue-800 hover:bg-blue-200 p-2 rounded-md transition" aria-label="Profile">
        <svg class="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="square" stroke-linejoin="round" stroke-width="2"
            d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
        </svg>
        <span class="text-xs font-semibold">Profile</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>
