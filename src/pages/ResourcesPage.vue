<template>
  <div class="w-full bg-base-100 text-base-content">


    <!-- PAGE TITLE -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold text-primary mb-3">GAD Resources</h1>
        <p class="text-gray-600 text-lg">
          Downloadable materials, policies, manuals, and references for Gender and Development.
        </p>
      </div>
    </section>

    <!-- SEARCH BAR -->
    <section class="bg-white pb-10">
      <div class="container mx-auto px-6">
        <div class="max-w-xl mx-auto">
          <label class="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-50"
              viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 015.5 5.5c0 1.304-.467 2.5-1.243 3.426l3.658 3.657a.75.75 0 11-1.06 1.06l-3.657-3.658A5.5 5.5 0 119 3.5zm-4 5.5a4 4 0 118 0 4 4 0 01-8 0z"
                clip-rule="evenodd" />
            </svg>
            <input type="text" v-model="search" class="grow"
              placeholder="Search resources…" />
          </label>
        </div>
      </div>
    </section>

    <!-- POLICIES SECTION -->
    <section class="py-14 bg-gray-50">
      <div class="container mx-auto px-6">

        <div class="flex items-center gap-3 mb-10">
          <div class="h-[2px] bg-primary flex-1"></div>
          <h2 class="text-3xl font-bold text-primary whitespace-nowrap">
            GAD Policies & Guidelines
          </h2>
          <div class="h-[2px] bg-primary flex-1"></div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(item, i) in filteredPolicies" :key="i"
            class="card bg-white shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all">

            <h3 class="text-xl font-bold text-primary mb-2">{{ item.title }}</h3>
            <p class="text-gray-700 text-sm mb-4">{{ item.desc }}</p>

            <button class="btn btn-primary btn-sm">Download</button>
          </div>
        </div>

      </div>
    </section>

    <!-- TRAINING MATERIALS SECTION -->
    <section class="py-14 bg-white">
      <div class="container mx-auto px-6">

        <h2 class="text-3xl font-bold text-primary mb-6">Training Materials</h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(item, i) in filteredTraining" :key="i"
            class="card bg-white shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all">

            <h3 class="text-xl font-bold text-primary mb-2">{{ item.title }}</h3>
            <p class="text-gray-700 text-sm mb-4">{{ item.desc }}</p>

            <button class="btn btn-primary btn-sm">View</button>
          </div>
        </div>

      </div>
    </section>

    <!-- REPORTS SECTION -->
    <section class="py-14 bg-gray-50">
      <div class="container mx-auto px-6">

        <div class="flex items-center gap-3 mb-10">
          <div class="h-[2px] bg-primary flex-1"></div>
          <h2 class="text-3xl font-bold text-primary whitespace-nowrap">
            Reports & Publications
          </h2>
          <div class="h-[2px] bg-primary flex-1"></div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(item, i) in filteredReports" :key="i"
            class="card bg-white shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all">

            <h3 class="text-xl font-bold text-primary mb-2">{{ item.title }}</h3>
            <p class="text-gray-700 text-sm mb-4">{{ item.desc }}</p>

            <button class="btn btn-primary btn-sm">Open</button>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
import Banner from "../components/Banner.vue";

export default {
  name: "GadResources",

  components: { Banner },

  data() {
    return {
      search: "",

      policies: [
        { title: "GAD Mandate Manual 2024", desc: "Official guidelines for GAD implementation." },
        { title: "Anti-VAWC Act Summary", desc: "Key points and legal framework." },
        { title: "Gender Mainstreaming Guidelines", desc: "Steps for integration of GAD programs." },
      ],

      training: [
        { title: "Gender Sensitivity Training Kit", desc: "Core slides and facilitator guide." },
        { title: "GAD Orientation Handbook", desc: "Introductory concepts and exercises." },
        { title: "GMEF Training Module", desc: "Tools for GAD mainstreaming evaluation." },
      ],

      reports: [
        { title: "GAD Accomplishment Report 2023", desc: "Annual performance and initiatives." },
        { title: "Gender Audit Findings", desc: "Assessment summary and recommendations." },
        { title: "GAD Plan & Budget 2024", desc: "Programs and funding allocations." },
      ],
    };
  },

  computed: {
    filteredPolicies() {
      return this.policies.filter((p) =>
        p.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    filteredTraining() {
      return this.training.filter((t) =>
        t.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    filteredReports() {
      return this.reports.filter((r) =>
        r.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>
