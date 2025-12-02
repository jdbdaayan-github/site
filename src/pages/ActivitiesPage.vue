<template>
  <div class="p-6 space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold">Resources</h1>
      <button class="btn btn-primary">Add Resource</button>
    </div>

    <!-- Search + Filter -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <input
        type="text"
        placeholder="Search resources..."
        class="input input-bordered w-full md:w-1/3"
      />

      <select class="select select-bordered w-full md:w-48">
        <option disabled selected>Filter by Type</option>
        <option>PDF</option>
        <option>Image</option>
        <option>Document</option>
      </select>
    </div>

    <!-- Resource Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="i in 6"
        :key="i"
        class="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all"
      >
        <div class="card-body">
          <h2 class="card-title">Resource {{ i }}</h2>
          <p class="text-sm opacity-70">Short description of this resource.</p>

          <div class="mt-4 flex items-center justify-between">
            <span class="badge badge-info">PDF</span>
            <div class="flex gap-2">
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
// Sample template only; modify logic later
</script>