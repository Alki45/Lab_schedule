<template>
    <div class="min-h-screen bg-gray-200 py-4">
      <!-- Top Navigation Buttons -->
      <div class="max-w-3xl mx-auto mb-6 flex justify-center gap-6">
        <button
          @click="currentView = 'all'"
          :class="{'bg-blue-500': currentView === 'all'}"
          class="px-6 py-3 w-full bg-gray-300 text-center rounded-lg font-semibold hover:bg-blue-600 transition duration-200 shadow "
        >
          All Courses
        </button>
  
        <button
          @click="currentView = 'add'"
          :class="{'bg-blue-500': currentView === 'add'}"
          class="px-4 py-3 w-full bg-gray-300 text-center rounded-lg font-semibold hover:bg-blue-600 transition duration-200 shadow"
        >
          Add Course
        </button>
  
        <button
          @click="currentView = 'manage'"
          :class="{'bg-blue-500': currentView === 'manage'}"
          class="px-6 py-3 w-full bg-gray-300 text-center rounded-lg font-semibold hover:bg-blue-600 transition duration-200 shadow"
        >
          Manage Courses
          <h1></h1>
        </button>
      </div>
  
      <!-- Add Course Section -->
      <div v-if="currentView === 'add'" class="max-w-3xl mx-auto p-8">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-extrabold text-blue-700">Add New Course</h1>
        </div>
  
        <!-- Form Fields -->
        <div class="grid grid-cols-2  gap-10">
          <div>
            <label class="block font-medium text-gray-700">Course Name</label>
            <input v-model="course.name" type="text" class="input" placeholder="e.g. AI & ML" />
          </div>
          <div>
            <label class="block font-medium text-gray-700">Department</label>
            <input v-model="course.department" type="text" class="input" placeholder="e.g. Software" />
          </div>
          <div>
            <label class="block font-medium text-gray-700">Credit Hour</label>
            <input v-model="course.credit" type="number" class="input" placeholder="e.g. 3" />
          </div>
          <div>
            <label class="block font-medium text-gray-700">Semester</label>
            <input v-model="course.semester" type="text" class="input" placeholder="e.g. 1st" />
          </div>
          <div>
            <label class="block font-medium text-gray-700">Year</label>
            <input v-model="course.year" type="text" class="input" placeholder="e.g. 2nd Year" />
          </div>
          <div>
            <label class="block font-medium text-gray-700">Course Code</label>
            <input v-model="course.code" type="text" class="input" placeholder="e.g. CSE101" />
          </div>
          <div>
            <label class="block font-medium text-gray-700">Lecture Hours</label>
            <input v-model="course.lectureHours" type="number" class="input" />
          </div>
          <div>
            <label class="block font-medium text-gray-700">Lab Hours</label>
            <input v-model="course.labHours" type="number" class="input" />
          </div>
          <div class="sm:col-span-2">
            <label class="block font-medium text-gray-700">Description</label>
            <textarea v-model="course.description" rows="3" class="input resize-none" placeholder="Describe the course..."></textarea>
          </div>
        </div>
  
        <!-- Submit Button -->
        <div class="text-center mt-8">
          <button
            @click="submitCourse"
            class="bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Add Course
          </button>
        </div>
      </div>
  
      <!-- Manage Course Section -->
      <div v-if="currentView === 'manage'" class="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-10">
        <h2 class="text-2xl font-bold text-emerald-700 mb-4 text-center">Manage Courses</h2>
        <p class="text-center text-gray-600">Coming soon: edit, delete, and organize courses!</p>
      <h1>Changes:
  Top Navigation Buttons:
  
  Buttons are now styled similarly to the sidebar in the AdminDashboard.vue.
  
  Added hover effects and smooth transitions with background color changes when a button is selected.
  
  Removal of the Course Box:
  
  The course form is now displayed directly without the box background, keeping it simple and aligned with the Dashboard style.
  
  The buttons for "Add Course", "All Courses", and "Manage Courses" are styled with rounded corners, shadows, and hover effects.
  
  Responsive Grid:
  
  The form fields are organized in a grid format to maintain good alignment and make the form responsive.
  
  Form and Button Styles:
  
  Inputs and buttons follow the same style pattern as the sidebar, with smooth hover effects and transitions.
  
  This layout should match the style you're aiming for and provide a consistent, attractive UI throughout your application.</h1>
      </div>
  
      <!-- All Courses Section -->
      <div v-if="currentView === 'all'" class="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-10">
        <h2 class="text-2xl font-bold text-purple-700 mb-4 text-center">All Courses</h2>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li v-for="(c, index) in courseList" :key="index">
            {{ c.name }} ({{ c.code }}) - {{ c.department }}, {{ c.credit }} Credit
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CourseManager",
    data() {
      return {
        currentView: "all", // default view
        course: {
          name: "",
          department: "",
          credit: "",
          semester: "",
          year: "",
          code: "",
          description: "",
          lectureHours: "",
          labHours: "",
        },
        courseList: [],
      };
    },
    methods: {
      submitCourse() {
        if (Object.values(this.course).every((v) => v !== "")) {
          this.courseList.push({ ...this.course });
          alert("✅ Course added successfully!");
          this.course = {
            name: "",
            department: "",
            credit: "",
            semester: "",
            year: "",
            code: "",
            description: "",
            lectureHours: "",
            labHours: "",
          };
          this.currentView = "all";
        } else {
          alert("⚠️ Please fill all the fields.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .input {
    @apply w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500;
  }
  </style>
  