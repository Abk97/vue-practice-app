<script>
import AnyUser from '@/assets/anyUser.png';

export default {
  name: 'TheHeader',
  data() {
    return {
      AnyUser,
      dropdownMenuIsShown: false,
      selectedOption: 1,
    };
  },
  props: {
    userdata: {
      type: Object,
      required: true,
    },
  },
  methods: {
    hideDropdownMenu() {
      this.dropdownMenuIsShown = false;
    },
    dropdownClickHandler(event) {
      event.stopPropagation();
      this.dropdownMenuIsShown = true;
      const screen = document.getElementById('screen');
      screen.addEventListener('click', this.hideDropdownMenu, { once: true });
    },
    handleLogout() {},
  },
};
</script>

<template>
  <div class="tw-ml-auto tw-px-2">
    <div class="tw-flex tw-items-center tw-gap-x-3">
      <div class="dropdown-container">
        <button class="dropdown-button" @click="dropdownClickHandler">
          <div class="user-icon">
            <img :src="AnyUser" />
          </div>
          <span class="dropdown-text">My Account</span>
          <div class="down-arrow" />
        </button>
        <div class="dropdown-menu" v-if="dropdownMenuIsShown">
          <a :class="selectedOption === 1 ? 'selected' : 'menu-option'">
            Hello! {{ userdata.userName
            }}{{ userdata.isAdmin ? '(Admin)' : '' }}
          </a>
          <a
            :class="selectedOption === 2 ? 'selected' : 'menu-option'"
            @click="handleLogout"
            >Logout</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.dropdown-container {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  display: flex;
  column-gap: 12px;
}

.user-icon {
  height: 16px;
  width: 16px;
  padding-top: 2px;
}

.down-arrow {
  border: solid #7823dc;
  border-width: 0 2px 2px 0;
  display: inline-block;
  height: 4px;
  padding: 4px;
  transform: rotate(45deg);
  margin-top: 4px;
}

.dropdown-text {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}

.dropdown-menu {
  position: absolute;
  right: 0;
  background-color: #f5f5f5;
  min-width: 260px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  cursor: pointer;
}

.dropdown-menu a {
  display: flex;
  align-items: center;
  color: black;
  padding: 12px;
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
}

.dropdown-menu a.selected {
  font-weight: 500;
  background-color: #e6d2fa;
}

.dropdown-menu a.menu-option:hover {
  background-color: #ededed;
}
</style>
