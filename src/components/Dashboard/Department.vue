<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div class="w-full max-w-xl bg-white shadow-lg rounded-xl p-8 space-y-6">
        <div class="text-center">
          <h1 class="text-3xl font-bold text-gray-800">Manage Departments</h1>
          <p class="text-gray-500 mt-1 text-sm">Add department info below</p>
        </div>
  
        <!-- Form Fields -->
        <div class="space-y-4">
          <div>
            <label class="block text-gray-700 font-medium mb-1" for="department">
              Department Name
            </label>
            <input
              id="department"
              v-model="department"
              type="text"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Software Engineering"
            />
          </div>
  
          <div>
            <label class="block text-gray-700 font-medium mb-1" for="school">
              School
            </label>
            <input
              id="school"
              v-model="school"
              type="text"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. School of Computing"
            />
          </div>
  
          <div>
            <label class="block text-gray-700 font-medium mb-1" for="university">
              University
            </label>
            <input
              id="university"
              v-model="university"
              type="text"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. ASTU"
            />
          </div>
        </div>
  
        <!-- Submit Button -->
        <div class="text-center">
          <button
            @click="addDepartment"
            class="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Department
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Department",
    data() {
      return {
        department: "",
        school: "",
        university: "",
      };
    },
    methods: {
      addDepartment() {
        if (this.department && this.school && this.university) {
          alert(
            `Added:\nDepartment: ${this.department}\nSchool: ${this.school}\nUniversity: ${this.university}`
          );
          this.department = "";
          this.school = "";
          this.university = "";
        } else {
          alert("Please fill in all fields.");
        }
      },
    },
  };
  </script>
  