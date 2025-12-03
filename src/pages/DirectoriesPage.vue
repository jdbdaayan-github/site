<template>
  <div class="min-h-screen bg-white text-base-content">
    <div class="max-w-4xl mx-auto p-6">

      <!-- Page header -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-primary">GAD Organizational Directory</h1>
        <p class="text-gray-600 mt-1">Hierarchy from Chairperson to Secretariat and Members.</p>
      </div>

      <!-- Top: Chairperson (centered) -->
      <div class="flex justify-center mb-8">
        <div class="card bg-white shadow-md border border-gray-200 rounded-xl w-full sm:w-3/4">
          <div class="card-body flex items-center gap-4 p-4">
            <div class="avatar">
              <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                M
              </div>
            </div>
            <div>
              <div class="text-sm text-gray-500">Chairperson</div>
              <div class="text-lg font-semibold text-primary">Maria L. Reyes</div>
              <div class="text-sm text-gray-500">Office of the Director</div>
            </div>
            <div class="ml-auto hidden sm:flex gap-2">
              <button class="btn btn-ghost btn-sm">Profile</button>
              <button class="btn btn-outline btn-sm">Contact</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Divider: Secretariat -->
      <div class="mb-4">
        <div class="flex items-center gap-3">
          <div class="flex-1 h-[1px] bg-gray-200"></div>
          <div class="px-3 text-sm font-semibold text-gray-600 uppercase">Secretariat</div>
          <div class="flex-1 h-[1px] bg-gray-200"></div>
        </div>
      </div>

      <!-- Secretariat group with vertical connector -->
      <div class="relative pl-6 sm:pl-10 mb-8">
        <!-- vertical line -->
        <div class="absolute left-3 top-0 bottom-0 hidden sm:block">
          <div class="w-[2px] bg-gray-200 h-full"></div>
        </div>

        <div class="space-y-4">
          <template v-for="(p, idx) in secretariat" :key="p.email">
            <div class="relative">
              <!-- connector dot -->
              <div class="absolute -left-2 top-3 hidden sm:block">
                <div class="w-3 h-3 rounded-full bg-white border-2 border-primary"></div>
              </div>

              <div class="card bg-white shadow-sm border border-gray-200 rounded-lg p-3 flex items-center gap-4">
                <div class="avatar">
                  <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                    {{ initials(p.name) }}
                  </div>
                </div>
                <div>
                  <div class="text-sm text-gray-500">{{ p.position }}</div>
                  <div class="text-base font-semibold text-primary">{{ p.name }}</div>
                  <div class="text-sm text-gray-500">{{ p.office }}</div>
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

      <!-- Divider: Members -->
      <div class="mb-4">
        <div class="flex items-center gap-3">
          <div class="flex-1 h-[1px] bg-gray-200"></div>
          <div class="px-3 text-sm font-semibold text-gray-600 uppercase">Members</div>
          <div class="flex-1 h-[1px] bg-gray-200"></div>
        </div>
      </div>

      <!-- Members group, nested under secretariat -->
      <div class="relative pl-6 sm:pl-10 mb-8">
        <!-- vertical line -->
        <div class="absolute left-3 top-0 bottom-0 hidden sm:block">
          <div class="w-[2px] bg-gray-200 h-full"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <template v-for="m in members" :key="m.email">
            <div class="relative">
              <div class="absolute -left-2 top-4 hidden sm:block">
                <div class="w-3 h-3 rounded-full bg-white border-2 border-primary"></div>
              </div>

              <div class="card bg-white shadow-sm border border-gray-200 rounded-lg p-3 flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                  {{ initials(m.name) }}
                </div>
                <div class="flex-1">
                  <div class="text-sm text-gray-500">{{ m.position }}</div>
                  <div class="text-sm font-semibold text-primary">{{ m.name }}</div>
                </div>
                <div class="text-right text-sm text-gray-500 hidden sm:block">
                  <div>{{ m.office }}</div>
                  <div class="mt-1">{{ m.phone }}</div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>

      <!-- Optional: Footer CTA -->
      <div class="text-center pt-4 border-t border-gray-100">
        <button class="btn btn-primary">View Full Directory</button>
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
};
</script>

<style scoped>
/* Ensure full white page even if parent has different background */
:root {
  background-color: #ffffff;
}

/* Small responsive tweaks */
@media (max-width: 640px) {
  /* remove left connectors on small screens for cleaner layout */
  .relative > .absolute {
    display: none !important;
  }
}
</style>
