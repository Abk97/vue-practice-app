<script>
import LoginButton from '@/components/UI/ButtonComponent.vue';

export default {
  name: 'LoginPage',
  components: {
    LoginButton,
  },
  data() {
    return {};
  },
  emits: ['userLoggedIn'],
  methods: {
    handleLogin() {
      this.$emit('userLoggedIn', { userName: 'Bob', isAdmin: false });
    },
  },
};
</script>

<template>
  <section class="tw-flex tw-h-screen tw-flex-col">
    <div class="tw-grid tw-grid-cols-12 tw-my-auto">
      <div
        class="tw-col-span-6 tw-col-start-1 tw-self-center tw-justify-self-center"
      >
        <div class="tw-h-[500px] tw-w-[444px] tw-bg-brand-primary" />
      </div>
      <div
        class="tw-col-span-6 tw-col-start-7 tw-px-20 desktop:tw-px-10 small-laptop:tw-px-10"
      >
        <div class="tw-h-full tw-flex tw-flex-col tw-justify-center tw-gap-y-6">
          <h1
            class="tw-text-4xl desktop:tw-text-4xl small-laptop:tw-text-2xl tw-text-black tw-font-medium"
          >
            User Management Portal
          </h1>
          <p
            class="tw-text-xl desktop:tw-text-xl small-laptop:tw-text-base tw-text-black tw-break-words"
          >
            Manage Users
          </p>
          <div class="tw-pt-8 small-laptop:tw-pt-6">
            <LoginButton
              label="Proceed to Sign In"
              type="primary"
              @click="handleLogin"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="tw-px-5">
      <footer
        class="tw-w-full tw-flex tw-p-4 tw-border-t tw-border-solid tw-border-brand-gray-2"
      >
        <div class="tw-ml-auto tw-flex tw-items-center">&copy; Abhay 2023</div>
      </footer>
    </div>
  </section>
</template>
