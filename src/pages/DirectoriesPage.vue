<template>
  <div class="max-w-7xl mx-auto p-4">

    <!-- PAGE HEADER -->
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-primary">GAD Directories</h1>
      <p class="text-base-content/70">Official directory of GAD focal persons, offices, and contact information.</p>
    </div>

    <!-- SEARCH BAR -->
    <div class="mb-6 flex justify-start">
      <label class="input input-bordered flex items-center gap-2 w-full md:w-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-50"
             viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 015.5 5.5c0 1.304-.467 2.5-1.243 3.426l3.658 3.657a.75.75 0 11-1.06 1.06l-3.657-3.658A5.5 5.5 0 119 3.5zm-4 5.5a4 4 0 118 0 4 4 0 01-8 0z"
                clip-rule="evenodd" />
        </svg>
        <input
          type="text"
          v-model="search"
          class="grow"
          placeholder="Search office, name, or position…" />
      </label>
    </div>

    <!-- DIRECTORY GRID -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      <div
        v-for="(item, index) in filteredDirectories"
        :key="index"
        class="card bg-base-100 shadow-md hover:shadow-xl transition-all border border-base-200"
      >
        <div class="card-body">
          
          <!-- OFFICE TITLE -->
          <h2 class="card-title text-primary">
            {{ item.office }}
          </h2>

          <!-- DETAILS -->
          <div class="text-base-content/80 space-y-1">
            <p><span class="font-semibold">Name:</span> {{ item.name }}</p>
            <p><span class="font-semibold">Position:</span> {{ item.position }}</p>
            <p><span class="font-semibold">Email:</span> {{ item.email }}</p>
            <p><span class="font-semibold">Phone:</span> {{ item.phone }}</p>
          </div>

          <!-- ACTION BUTTON -->
          <div class="card-actions justify-end mt-3">
            <button class="btn btn-primary btn-sm">View Details</button>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "GadDirectories",

  data() {
    return {
      search: "",
      directories: [
        {
          office: "Administrative Service",
          name: "Juan D. Cruz",
          position: "GAD Focal Person",
          email: "juan.cruz@example.com",
          phone: "09171234567",
        },
        {
          office: "Human Resource Division",
          name: "Ana Marie Santos",
          position: "Assistant Focal Person",
          email: "ana.santos@example.com",
          phone: "09981234567",
        },
        {
          office: "Finance & Budget Division",
          name: "Mark L. Flores",
          position: "GAD Coordinator",
          email: "mark.flores@example.com",
          phone: "09221234567",
        },
      ],
    };
  },

  computed: {
    filteredDirectories() {
      const q = this.search.toLowerCase();
      return this.directories.filter((d) =>
        Object.values(d).some((val) => val.toLowerCase().includes(q))
      );
    },
  },
};
</script>
