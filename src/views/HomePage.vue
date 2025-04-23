<template>
    <div class="bg-gray-100 ">
        <div class=" flex">
      <!-- Main Content Section -->
      <div class="p-6 max-w-7xl mx-auto">
        <h1 class="text-4xl font-bold text-blue-800 mb-6">Efficient Lab Resource Management</h1>
        <p class="text-lg mb-6 text-gray-700">
          LabSync streamlines the complex process of managing lab assistants, courses, and lab rooms for your university. 
          Eliminate scheduling conflicts and optimize resource allocation with our intuitive scheduling system.
        </p>
  
        <!-- Action Links (Buttons) -->
        <div class="flex space-x-6 mt-6">
          <router-link
            to="/lab-schedule"
            class="inline-block px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            View Lab Schedule
          </router-link>
          <router-link
            to="/manage-assistant"
            class="inline-block px-8 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition duration-300 shadow-lg"
          >
            Manage Assistant
          </router-link>
        </div>
         

 
        </div>
        <!-- Sample Lab Schedule Section -->
        <div class="max-w-7xl mx-auto mt-12 text-center">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Here is a sample Lab Schedule</h2>
        <img src="../assets/image/Screenshot from 2025-04-22 13-00-54.png" alt="Sample Lab Schedule" class="w-full rounded-xl shadow-xl">
      </div>
  
        </div>


      <!-- Key Features Section -->
      <div class="p-10 ml-12">
        <h1 class="text-center text-3xl font-semibold text-blue-800 mb-8">Key Features</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Feature Card -->
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <svg class="w-[48px] h-[48px] text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M10.915 2.345a2 2 0 0 1 2.17 0l7 4.52A2 2 0 0 1 21 8.544V9.5a1.5 1.5 0 0 1-1.5 1.5H19v6h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h1v-6h-.5A1.5 1.5 0 0 1 3 9.5v-.955a2 2 0 0 1 .915-1.68l7-4.52ZM17 17v-6h-2v6h2Zm-6-6h2v6h-2v-6Zm-2 6v-6H7v6h2Z" clip-rule="evenodd"/>
            <path d="M2 21a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"/>
            </svg>

            <h2 class="font-semibold text-xl text-blue-800">Department & Course Management</h2>
            <p class="text-gray-600">Easily organize departments, semesters, and courses with detailed information, including course codes and group structures.</p>
          </div>
  
          <!-- Feature Card -->
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <svg class="w-12 h-12 text-green-700 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
            </svg>
            <h2 class="font-semibold text-xl text-green-700">Staff & Lab Assistant Management</h2>
            <p class="text-gray-600">Maintain comprehensive records of lecturers and lab assistants, including their availability and assignment preferences.</p>
          </div>
  
          <!-- Feature Card -->
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <svg class="w-[48px] h-[48px] text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clip-rule="evenodd"/>
            </svg>

            <h2 class="font-semibold text-xl text-red-600">Conflict-Free Scheduling</h2>
            <p class="text-gray-600">Automatically detect and prevent scheduling conflicts to ensure lab assistants are never double-booked.</p>
          </div>
  
          <!-- Feature Card -->
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <svg class="w-[48px] h-[48px] text-yellow-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 5v14M9 5v14M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
            </svg>

            <h2 class="font-semibold text-xl text-yellow-600">Resource Allocation</h2>
            <p class="text-gray-600">Efficiently assign lab rooms to course groups based on capacity requirements and equipment availability.</p>
          </div>
  
          <!-- Feature Card -->
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <svg class="w-[48px] h-[48px] text-purple-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/>
            </svg>

            <h2 class="font-semibold text-xl text-purple-700">Visual Timetables</h2>
            <p class="text-gray-600">View lab schedules in an intuitive visual format with color-coding to identify courses, groups, and conflicts.</p>
          </div>
  
          <!-- Feature Card -->
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <svg class="w-[48px] h-[48px] text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"/>
            </svg>

            <h2 class="font-semibold text-xl text-orange-700">Reporting & Analytics</h2>
            <p class="text-gray-600">Generate reports on lab assistant workloads, room utilization, and identify unassigned groups needing attention.</p>
          </div>
        </div>

      </div>

      <!--LabSync Usage Start Section-->
      <div class=" bg-blue-800 text-center items-center py-10">

        <h1 class="text-3xl text-white font-serif font-semibold mt-4">Ready to Optimize Your Lab Resources?</h1>
        <p class=" text-xl text-white font-sans mt-4 py-16">Start organizing your university's lab resources efficiently and eliminate scheduling conflicts with LabSync.</p>

        <router-link class="text-xl text-blue font-serif font-semibold mt-10 px-4 py-4 rounded-md bg-slate-300">Get Started</router-link>




      </div>

      <footer class=" text-center ml-10">
        
            <FooterComp />

      </footer>

    </div>
  </template>


  <script>
  
  import FooterComp from '../components/FooterComp.vue';
  export default {
    name: 'HomePage',
    components:{
        FooterComp,
    }
  }
  </script>
  
  <style scoped>
 
  </style>
  