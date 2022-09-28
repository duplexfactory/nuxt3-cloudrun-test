<script setup lang="ts">
  const firestore = await useFetch("/api/firestore");
  const {collections} = firestore.data.value;

  const firestoreDcs = await useFetch("/api/firestore/docs");
  const {docs} = firestoreDcs.data.value;

  const config = useRuntimeConfig();
  const ts = config.TEST;
</script>

<template>
  <div>
    <div>
      collections {{ collections }}
    </div>
    <div>
      docs {{ docs }}
    </div>
    <div>
      TEST {{ ts }}
    </div>
  </div>
</template>
