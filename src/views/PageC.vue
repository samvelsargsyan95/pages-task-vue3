<template>
  <div class="page-c">
    <h1 class="header">{{ header }}</h1>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "PageC",
  setup() {
    const header = ref(null);
    const router = useRouter();

    onMounted(() => {
      header.value = "Page C";
    });

    onUnmounted(() => {
        router.push('/page-a')
    })

    return {
      header,
    };
  },
};
</script>

