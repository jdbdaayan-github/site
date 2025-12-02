<template>
  <div class="navbar bg-primary shadow-sm">

    <!-- LEFT SECTION -->
    <div class="flex-1">
      <div class="flex">
        <a class="btn btn-ghost text-xl">daisyUI</a>

      <!-- Navigation Links -->
      <ul class="menu menu-horizontal px-1 hidden md:flex">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/resources">Resources</router-link></li>
      </ul>
      </div>
      
    </div>

    <!-- RIGHT SECTION -->
    <div class="flex gap-2">

      <!-- Search Bar -->
      <input
        type="text"
        placeholder="Search"
        class="input input-bordered w-24 md:w-auto"
      />

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
    </div>

  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
