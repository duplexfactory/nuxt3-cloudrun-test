<script setup lang="ts">
  const config = useRuntimeConfig();
  const ts = config.TEST;
</script>

<template>
  <div>
    <div>
      TEST {{ ts }}
    </div>
  </div>
</template>
