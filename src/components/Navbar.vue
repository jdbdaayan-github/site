<template>
  <div class="navbar bg-primary shadow-sm">
<div class="w-7xl flex mx-auto"><!-- LEFT SECTION -->
    <div class="flex-1">
      <div class="flex">
        <a class="btn btn-ghost text-xl items-center">Administrative Servicebr<small class="text-orange-300">GAD Information Hub</small></a>
      </div>
      
    </div>

    <!-- RIGHT SECTION -->
    <div class="flex gap-2">
      
<!-- Navigation Links -->
      <ul class="menu menu-horizontal px-1 hidden md:flex">
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/about">DIRECTORY</router-link></li>
        <li><router-link to="/resources">RESOURCES</router-link></li>
        <li><router-link to="/activities">ACTIVITIES</router-link></li>
      </ul>

      <!-- Avatar Dropdown -->
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              alt="User Avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabindex="-1"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
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
    </div></div>
    

  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
