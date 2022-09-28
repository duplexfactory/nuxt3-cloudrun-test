<script setup lang="ts">
  const firestore = await useFetch("/api/firestore");
  const {collections} = firestore.data.value;

  const firestoreDcs = await useFetch("/api/firestore/docs");
  const {docs} = firestoreDcs.data.value;
</script>

<template>
  <div>
    <div>
      cls {{ collections }}
    </div>
    <div>
      docs {{ docs }}
    </div>
  </div>
</template>
