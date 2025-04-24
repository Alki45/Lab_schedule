<template>
    <div class="min-h-screen bg-gray-100 w-full">
      <!-- Top Navigation Buttons -->
      <div class="max-w-7xl mx-auto mb-6 flex justify-center gap-6">
        <button
          @click="currentView = 'all'"
          :class="{'bg-blue-500 text-white': currentView === 'all'}"
          class="px-6 py-3 w-full text-center rounded-lg font-semibold hover:bg-blue-600 transition duration-200 shadow"
        >
          All Lecturer
        </button>
  
        <button
          @click="currentView = 'add'"
          :class="{'bg-blue-500 text-white': currentView === 'add'}"
          class="px-4 py-3 w-full text-center rounded-lg font-semibold hover:bg-blue-600 transition duration-200 shadow"
        >
          Add Lecturer
        </button>
  
        <button
          @click="currentView = 'manage'"
          :class="{'bg-blue-500 text-white': currentView === 'manage'}"
          class="px-6 py-3 w-full text-center rounded-lg font-semibold hover:bg-blue-600 transition duration-200 shadow"
        >
          Manage Lecturer
        </button>
      </div>
  
      <!-- Add Lecturer Section -->
      <div v-if="currentView === 'add'" class="max-w-7xl mx-auto p-8">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-extrabold text-blue-700">Add New Lecturer</h1>
        </div>
  
        <!-- Form Fields -->
        <div class="grid grid-cols-2 gap-10">
          <div>
            <label class="block font-medium text-gray-700">Lecturer Name</label>
            <input v-model="Lecturer.name" type="text" class="input" placeholder="e.g. Abebe Kebede" />
          </div>
          <div>
            <label class="block font-medium text-gray-700">Department</label>
            <input v-model="Lecturer.department" type="text" class="input" placeholder="e.g. SE or CSE" />
          </div>
          <div>
            <label class="block font-medium text-gray-700">Phone Number</label>
            <input v-model="Lecturer.phone_number" type="number" class="input" placeholder="990909090" />
          </div>
          <div>
            <label class="block font-medium text-gray-700">Academic Year</label>
            <input v-model="Lecturer.year" type="text" class="input" placeholder="e.g. 2024 G.C" />
          </div>
          <div>
            <label class="block font-medium text-gray-700">Lecturer Employee ID</label>
            <input v-model="Lecturer.Employee_ID" type="text" class="input" placeholder="e.g. /00013/17" />
          </div>
          <div>
            <label class="block font-medium text-gray-700">Office Number</label>
            <input v-model="Lecturer.office_number" type="text" class="input" placeholder="e.g. Block B, Room 204" />
          </div>
          <div>
            <label class="block font-medium text-gray-700">Profile Picture URL</label>
            <input v-model="Lecturer.profile_picture" type="text" class="input" placeholder="https://example.com/photo.jpg" />
          </div>
          <div class="sm:col-span-2">
            <label class="block font-medium text-gray-700">Description</label>
            <textarea v-model="Lecturer.description" rows="3" class="input resize-none" placeholder="Describe the Lecturer..."></textarea>
          </div>
        </div>
  
        <!-- Submit Button -->
        <div class="text-center mt-8">
          <button
            @click="submitLecturer"
            class="bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Add Lecturer
          </button>
        </div>
      </div>
  
      <!-- Manage Lecturer Section -->
<!-- Manage Lecturer Section -->
                    <div v-if="currentView === 'manage'" class="w-full px-6 py-8">
                    <h2 class="text-2xl font-bold text-emerald-700 mb-6 text-center">Manage Lecturer</h2>

                    <div class="overflow-x-auto">
                        <table class="min-w-full bg-white shadow rounded-lg overflow-hidden">
                        <thead class="bg-blue-100 text-blue-800 font-semibold">
                            <tr>
                            <th class="py-3 px-4 text-left">Name</th>
                            <th class="py-3 px-4 text-left">Department</th>
                            <th class="py-3 px-4 text-left">Phone</th>
                            <th class="py-3 px-4 text-left">Year</th>
                            <th class="py-3 px-4 text-left">ID</th>
                            <th class="py-3 px-4 text-left">Office</th>
                            <th class="py-3 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            v-for="(lec, index) in LecturerList"
                            :key="index"
                            class="border-t"
                            >
                            <td class="px-4 py-2">
                                <input v-if="lec.editing" v-model="lec.name" class="input" />
                                <span v-else>{{ lec.name }}</span>
                            </td>
                            <td class="px-4 py-2">
                                <input v-if="lec.editing" v-model="lec.department" class="input" />
                                <span v-else>{{ lec.department }}</span>
                            </td>
                            <td class="px-4 py-2">
                                <input v-if="lec.editing" v-model="lec.phone_number" class="input" />
                                <span v-else>{{ lec.phone_number }}</span>
                            </td>
                            <td class="px-4 py-2">
                                <input v-if="lec.editing" v-model="lec.year" class="input" />
                                <span v-else>{{ lec.year }}</span>
                            </td>
                            <td class="px-4 py-2">
                                <input v-if="lec.editing" v-model="lec.Employee_ID" class="input" />
                                <span v-else>{{ lec.Employee_ID }}</span>
                            </td>
                            <td class="px-4 py-2">
                                <input v-if="lec.editing" v-model="lec.office_number" class="input" />
                                <span v-else>{{ lec.office_number }}</span>
                            </td>
                            <td class="px-4 py-2 flex gap-2">
                                <button
                                @click="toggleEdit(index)"
                                class="px-3 py-1 bg-yellow-400 text-white text-sm rounded hover:bg-yellow-500"
                                >
                                {{ lec.editing ? 'Save' : 'Edit' }}
                                </button>
                                <button
                                @click="deleteLecturer(index)"
                                class="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                                >
                                Delete
                                </button>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                    
  
      <!-- All Lecturer Section -->
      <div v-if="currentView === 'all'" class=" mx-auto bg-white shadow-lg rounded-xl p-10">
        <h2 class="text-2xl font-bold text-purple-700 mb-4 text-center">All Lecturer</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(c, index) in LecturerList"
            :key="index"
            class="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition duration-300 p-5"
          >
            <img
              :src="c.profile_picture || 'https://via.placeholder.com/100x100.png?text=No+Image'"
              alt="Lecturer Photo"
              class="w-24 h-24 object-cover rounded-full mx-auto mb-3 border shadow"
            />
            <h3 class="text-xl font-bold text-blue-700 mb-1 text-center">{{ c.name }}</h3>
            <p class="text-sm text-gray-600 mb-1 text-center">ID: <span class="font-medium">{{ c.Employee_ID }}</span></p>
            <p class="text-sm text-gray-600 mb-1 text-center">Department: <span class="font-medium">{{ c.department }}</span></p>
            <p class="text-sm text-gray-600 mb-1 text-center">Phone: <span class="font-medium">{{ c.phone_number }}</span></p>
            <p class="text-sm text-gray-600 mb-1 text-center">Year: <span class="font-medium">{{ c.year }}</span></p>
            <p class="text-sm text-gray-600 mb-1 text-center">Office: <span class="font-medium">{{ c.office_number }}</span></p>
            <p class="text-sm text-gray-600 text-center">Note: <span class="italic">{{ c.description }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </template><script>
import { lecturers } from '../sampledata/lecturers.js';

export default {
  name: "LecturerManager",
  data() {
    return {
      currentView: "all",
      Lecturer: {
        name: "",
        department: "",
        phone_number: "",
        year: "",
        Employee_ID: "",
        description: "",
        profile_picture: "",
        office_number: "",
      },
      LecturerList: [],
    };
  },
  mounted() {
    // Initialize the LecturerList and add the 'editing' property
    this.LecturerList = lecturers.map(l => ({ ...l, editing: false }));
  },
  methods: {
    // Method to handle submission 
    submitLecturer() {
      if (Object.values(this.Lecturer).every((v) => v !== "")) {
        this.LecturerList.push({ ...this.Lecturer });
        alert("✅ Lecturer added successfully!");
        this.Lecturer = {
          name: "",
          department: "",
          phone_number: "",
          year: "",
          Employee_ID: "",
          description: "",
          profile_picture: "",
          office_number: "",
        };
        this.currentView = "all";
      } else {
        alert("⚠️ Please fill all the fields.");
      }
    },
    // Method to toggle edit mode for a specific lecturer
    toggleEdit(index) {
      const lec = this.LecturerList[index];
      lec.editing = !lec.editing; 
    },
    // Method to delete a lecturer from the list
    deleteLecturer(index) {
      if (confirm('Are you sure you want to delete this lecturer?')) {
        this.LecturerList.splice(index, 1);
      }
    }
  }
};
</script>

  <style scoped>
  .input {
    @apply w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500;
  }
  </style>
  