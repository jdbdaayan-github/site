<template>
  <div class="w-full h-full bg-gray-50 text-base-content">

    <!-- PAGE HEADER -->
    <section class="py-16 bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold text-primary">GAD Activities</h1>
        <p class="text-gray-600 mt-2 text-lg">
          Official list of programs, trainings, and events supporting Gender and Development.
        </p>
      </div>
    </section>

    <!-- SEARCH + FILTER -->
    <section class="py-10 bg-gray-50 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <input
          type="text"
          placeholder="Search activities..."
          class="input input-bordered input-primary text-gray-500 w-full md:w-1/2 rounded-lg bg-white shadow-sm focus:shadow-md"
          v-model="search"
        />

        <select class="select select-bordered select-primary w-full text-gray-500 md:w-60 rounded-lg bg-white shadow-sm focus:shadow-md" v-model="filter">
          <option value="">All Types</option>
          <option>Training</option>
          <option>Seminar</option>
          <option>Orientation</option>
          <option>Workshop</option>
          <option>Program</option>
        </select>

        <button class="btn btn-primary btn-md w-full md:w-auto rounded-xl shadow-md">
          Add Activity
        </button>

      </div>
    </section>

    <!-- SECTION DIVIDER -->
    <section class="py-10 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex items-center gap-4 mb-8">
          <div class="h-[2px] bg-primary flex-1"></div>
          <h2 class="text-2xl font-bold text-primary whitespace-nowrap">
            All Activities
          </h2>
          <div class="h-[2px] bg-primary flex-1"></div>
        </div>

        <!-- ACTIVITIES GRID -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(item, index) in filteredActivities"
            :key="index"
            class="card bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all rounded-2xl overflow-hidden"
          >

            <!-- Top Icon -->
            <div class="bg-primary/10 h-32 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 text-primary"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12h6m-6 4h6m-3-8v8m-6 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <!-- Card Content -->
            <div class="p-6 flex flex-col justify-between h-full">
              <div>
                <h2 class="text-xl font-semibold text-primary">{{ item.title }}</h2>
                <p class="text-gray-700 text-sm mt-2 leading-relaxed">{{ item.description }}</p>

                <!-- Meta -->
                <div class="flex flex-wrap gap-3 mt-4 text-sm text-gray-500">
                  <span class="badge badge-outline">{{ item.date }}</span>
                  <span class="badge badge-outline">{{ item.location }}</span>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex justify-between items-center mt-5">
                <span class="badge badge-primary text-white px-3 py-2 rounded-lg">{{ item.type }}</span>
                <div class="flex gap-2">
                  <button class="btn btn-outline btn-primary btn-sm rounded-lg">View</button>
                  <button class="btn btn-error btn-sm text-white rounded-lg">Delete</button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

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
    const matchesSearch =
      a.title.toLowerCase().includes(search.value.toLowerCase()) ||
      a.description.toLowerCase().includes(search.value.toLowerCase());
    const matchesFilter = filter.value ? a.type === filter.value : true;
    return matchesSearch && matchesFilter;
  });
});
</script>
