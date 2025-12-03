<template>
  <div class="navbar bg-primary shadow-sm">
    <div class="max-w-7xl w-full mx-auto flex items-center justify-between px-2">

      <!-- LEFT SECTION -->
      <div class="flex items-center gap-2">

        <!-- MOBILE HAMBURGER -->
        <div class="dropdown md:hidden">
          <div tabindex="0" role="button" class="btn btn-ghost p-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </div>

          <ul tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
            <li><router-link to="/">HOME</router-link></li>
            <li><router-link to="/directories">DIRECTORY</router-link></li>
            <li><router-link to="/resources">RESOURCES</router-link></li>
            <li><router-link to="/activities">ACTIVITIES</router-link></li>
          </ul>
        </div>

        <!-- TITLE -->
        <div class="flex flex-col leading-tight">
          <span class="text-lg font-semibold text-white">
            Administrative Service
          </span>
          <small class="text-orange-300 -mt-1">
            GAD Information Hub
          </small>
        </div>

      </div>

      <!-- RIGHT SECTION -->
      <div class="flex items-center gap-3">

        <!-- DESKTOP NAV -->
        <ul class="menu menu-horizontal hidden md:flex px-1 text-white">
          <li><router-link to="/">HOME</router-link></li>
          <li><router-link to="/directories">DIRECTORY</router-link></li>
          <li><router-link to="/resources">RESOURCES</router-link></li>
          <li><router-link to="/activities">ACTIVITIES</router-link></li>
        </ul>

        <!-- AVATAR DROPDOWN -->
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>

          <ul tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-[10]">
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
