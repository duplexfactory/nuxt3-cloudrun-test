<template>
  <div>
    <NuxtWelcome/>

    <div>
      TEST:
      <br/>
      {{ ts }}
    </div>
  </div>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig();

  const ts = config.TEST;
</script>
