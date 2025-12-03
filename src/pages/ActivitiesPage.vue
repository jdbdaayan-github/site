<template>
  <div class="max-w-7xl mx-auto p-6 space-y-6">

    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <h1 class="text-3xl font-bold text-primary">Activities</h1>
      <button class="btn btn-primary btn-md">Add Activity</button>
    </div>

    <!-- Search + Filter -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <input
        type="text"
        placeholder="Search activities..."
        class="input input-bordered w-full md:w-1/2"
        v-model="search"
      />

      <select class="select select-bordered w-full md:w-48" v-model="filter">
        <option disabled selected>Filter by Type</option>
        <option>Training</option>
        <option>Seminar</option>
        <option>Orientation</option>
        <option>Workshop</option>
        <option>Program</option>
      </select>
    </div>

    <!-- Activities Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(item, index) in filteredActivities"
        :key="index"
        class="card bg-base-100 shadow-lg border border-base-200 hover:shadow-2xl transition-all rounded-xl overflow-hidden"
      >
        <!-- Image / Icon -->
        <div class="bg-primary/10 p-4 flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-primary" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12h6m-6 4h6m-3-8v8m-6 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        <!-- Card Body -->
        <div class="card-body p-5">
          <h2 class="card-title text-lg font-semibold">{{ item.title }}</h2>
          <p class="text-sm text-base-content/70 mt-1">{{ item.description }}</p>

          <!-- Meta -->
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 gap-2">
            <div class="flex gap-3 flex-wrap text-sm text-gray-500">
              <p><strong>Date:</strong> {{ item.date }}</p>
              <p><strong>Location:</strong> {{ item.location }}</p>
            </div>

            <!-- Badge + Buttons -->
            <div class="flex items-center gap-2 mt-2 sm:mt-0">
              <span class="badge badge-info">{{ item.type }}</span>
              <button class="btn btn-ghost btn-sm">View</button>
              <button class="btn btn-error btn-sm text-white">Delete</button>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const activities = ref([
  {
    title: "GAD Orientation for New Employees",
    description: "Introduction to gender and development policies.",
    date: "January 15, 2025",
    location: "Conference Hall A",
    type: "Orientation",
  },
  {
    title: "Gender Sensitivity Training",
    description: "Workshop on gender-responsive workplace practices.",
    date: "February 10, 2025",
    location: "Training Center",
    type: "Training",
  },
  {
    title: "Women's Month Kick-off Program",
    description: "Opening program for National Women’s Month.",
    date: "March 1, 2025",
    location: "Multipurpose Hall",
    type: "Program",
  },
  {
    title: "Team Building Workshop",
    description: "Activities to enhance teamwork and collaboration.",
    date: "April 12, 2025",
    location: "Outdoor Grounds",
    type: "Workshop",
  },
]);

const search = ref("");
const filter = ref("");

const filteredActivities = computed(() => {
  return activities.value.filter((a) => {
    const matchesSearch = a.title.toLowerCase().includes(search.value.toLowerCase());
    const matchesFilter = filter.value ? a.type === filter.value : true;
    return matchesSearch && matchesFilter;
  });
});
</script>
