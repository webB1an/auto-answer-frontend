<template>
  <div></div>
</template>
<script lang="ts" setup>
  import { useRoute, useRouter } from 'vue-router';

  const route = useRoute();
  const router = useRouter();
  const { params, query } = route;
  const { path } = params;

  if (typeof path === 'string') {
    router.replace({ path: '/' + path, query });
  } else {
    router.replace({ path: '/' + path.join('/'), query });
  }
</script>

<style lang="scss" scoped></style>
