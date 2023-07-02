<script>
import _ from 'lodash';
import LoginPage from '@/pages/LoginPage.vue';
import LandingPage from '@/pages/LandingPage.vue';

export default {
  name: 'App',
  components: {
    LoginPage,
    LandingPage,
  },
  data() {
    return {
      isLoggedIn: false,
      loggedInUserData: {},
    };
  },
  methods: {
    userHasAuthenticated(loggedInUserData) {
      this.isLoggedIn = true;
      this.loggedInUserData = loggedInUserData;
    },
  },
};
</script>

<template>
  <LoginPage v-if="!isLoggedIn" @user-logged-in="userHasAuthenticated" />
  <LandingPage v-if="isLoggedIn" :userdata="this.loggedInUserData" />
</template>
