<script>
import UsersList from './UsersList.vue';
import NewUserForm from './NewUserForm.vue';

export default {
  name: 'UserManagement',
  components: {
    UsersList,
    NewUserForm,
  },
  data() {
    return {
      formIsShown: false,
    };
  },
  methods: {
    showFormHandler() {
      this.formIsShown = true;
    },
    hideFormHandler() {
      this.formIsShown = false;
    },
  },
};
</script>
<template>
  <UsersList v-if="!formIsShown" @show-form="showFormHandler" />
  <NewUserForm v-if="formIsShown" @close-form="hideFormHandler" />
</template>
