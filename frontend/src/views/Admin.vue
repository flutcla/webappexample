<template>
  <div>
    <CreateUser />
    <InvList />
  </div>
</template>

<script>
import CreateUser from "./CreateUser.vue";
import InvList from "./InvList.vue";
export default {
  components: {
    CreateUser,
    InvList,
  }
};
</script>