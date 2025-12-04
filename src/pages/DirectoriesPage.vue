<template>
  <div class="min-h-screen bg-white text-base-content">
    <div class="max-w-4xl mx-auto p-6">

      <!-- HEADER -->
      <div class="text-center mb-10">
        <h1 class="text-4xl font-bold text-primary">GAD Organizational Directory</h1>
        <p class="text-gray-600 mt-2">Official hierarchy from Chairperson to Secretariat and Members.</p>
      </div>

      <!-- CHAIRPERSON -->
      <div class="flex justify-center mb-10">
        <div class="card bg-white border border-gray-200 shadow-lg rounded-2xl w-full sm:w-2/3">
          <div class="card-body flex items-center gap-5 p-6">
            <div class="avatar">
              <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
                {{ initials("Maria L. Reyes") }}
              </div>
            </div>

            <div>
              <div class="text-xs font-semibold text-gray-500 uppercase">Chairperson</div>
              <div class="text-xl font-bold text-primary">Maria L. Reyes</div>
              <div class="text-sm text-gray-500">Office of the Director</div>
            </div>

            <div class="ml-auto hidden sm:flex gap-2">
              <button class="btn btn-ghost btn-sm">Profile</button>
              <button class="btn btn-outline btn-sm">Contact</button>
            </div>
          </div>
        </div>
      </div>

      <!-- SECTION: SECRETARIAT -->
      <SectionDivider label="Secretariat" />

      <div class="relative pl-6 sm:pl-10 mb-12">
        <!-- Main vertical line -->
        <div class="absolute left-3 top-0 bottom-0 hidden sm:block">
          <div class="w-[2px] bg-gray-300 h-full rounded-full"></div>
        </div>

        <div class="space-y-5">
          <template v-for="s in secretariat" :key="s.email">
            <div class="relative">

              <!-- Dot -->
              <div class="absolute -left-2 top-5 hidden sm:block">
                <div class="w-3 h-3 bg-primary border-4 border-white rounded-full shadow-sm"></div>
              </div>

              <div class="card bg-white border border-gray-200 shadow-sm hover:shadow-md transition rounded-xl p-4 flex items-center gap-4">
                <div class="avatar">
                  <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {{ initials(s.name) }}
                  </div>
                </div>

                <div>
                  <div class="text-xs text-gray-500 uppercase">{{ s.position }}</div>
                  <div class="text-lg font-semibold text-primary">{{ s.name }}</div>
                  <div class="text-sm text-gray-500">{{ s.office }}</div>
                </div>

                <div class="ml-auto hidden sm:flex gap-2">
                  <button class="btn btn-ghost btn-xs">Profile</button>
                  <button class="btn btn-outline btn-xs">Contact</button>
                </div>
              </div>

            </div>
          </template>
        </div>
      </div>

      <!-- SECTION: MEMBERS -->
      <SectionDivider label="Members" />

      <div class="relative pl-6 sm:pl-10 mb-12">

        <!-- Main vertical line -->
        <div class="absolute left-3 top-0 bottom-0 hidden sm:block">
          <div class="w-[2px] bg-gray-300 h-full rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <template v-for="m in members" :key="m.email">
            <div class="relative">

              <!-- Dot -->
              <div class="absolute -left-2 top-6 hidden sm:block">
                <div class="w-3 h-3 bg-primary border-4 border-white rounded-full shadow-sm"></div>
              </div>

              <div class="card bg-white border border-gray-200 shadow-sm hover:shadow-md transition rounded-xl p-4 flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {{ initials(m.name) }}
                </div>

                <div class="flex-1">
                  <div class="text-xs uppercase text-gray-500">{{ m.position }}</div>
                  <div class="text-[15px] font-semibold text-primary">{{ m.name }}</div>
                  <div class="text-xs text-gray-500">{{ m.office }}</div>
                </div>

                <div class="hidden sm:block text-right text-xs text-gray-500">
                  <div>{{ m.phone }}</div>
                </div>
              </div>

            </div>
          </template>
        </div>

      </div>

      <!-- FOOTER CTA -->
      <div class="text-center pt-6">
        <button class="btn btn-primary btn-lg rounded-full shadow-md">
          View Full Directory
        </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "GadHierarchy",

  data() {
    return {
      secretariat: [
        {
          name: "Juan D. Cruz",
          position: "Secretariat Head",
          office: "GAD Secretariat",
          email: "juan.cruz@example.com",
          phone: "0917-123-4567",
        },
        {
          name: "Ana M. Santos",
          position: "Secretariat Officer",
          office: "GAD Secretariat",
          email: "ana.santos@example.com",
          phone: "0998-765-4321",
        },
      ],

      members: [
        {
          name: "Mark L. Flores",
          position: "GAD Focal Person",
          office: "Finance & Budget Division",
          email: "mark.flores@example.com",
          phone: "0922-111-2222",
        },
        {
          name: "Liza P. Dela Cruz",
          position: "Member",
          office: "Administrative Service",
          email: "liza.delacruz@example.com",
          phone: "0918-333-4444",
        },
        {
          name: "Rafael S. Gomez",
          position: "Member",
          office: "Human Resource Division",
          email: "rafael.gomez@example.com",
          phone: "0933-555-6666",
        },
        {
          name: "Carla T. Medina",
          position: "Member",
          office: "Operations",
          email: "carla.medina@example.com",
          phone: "0944-777-8888",
        },
      ],
    };
  },

  methods: {
    initials(name) {
      return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
    },
  },

  components: {
    SectionDivider: {
      props: ["label"],
      template: `
        <div class="mb-6 flex items-center gap-3">
          <div class="flex-1 h-[1px] bg-gray-300"></div>
          <div class="px-4 py-1 text-sm font-bold text-gray-600 uppercase bg-gray-100 rounded-full border border-gray-300 shadow-sm">
            {{ label }}
          </div>
          <div class="flex-1 h-[1px] bg-gray-300"></div>
        </div>
      `,
    },
  },
};
</script>

<style scoped>
/* Mobile cleanup */
@media (max-width: 640px) {
  .relative > .absolute {
    display: none !important;
  }
}
</style>
