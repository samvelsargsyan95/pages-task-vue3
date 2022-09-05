<template>
  <div class="page-b">
    <h1 class="header">{{ header }}</h1>
    <img
      src="@/assets/loader.gif"
      class="page-b__loader"
      title="loader"
      alt="loader"
    />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "PageB",
  setup() {
    let timeOut = ref(null);
    const header = ref(null);
    const router = useRouter();

    onMounted(() => {
      header.value = "Page B";
      timeOut = setTimeout(() => {
        router.push("/page-c");
      }, 3000);
    });

    onUnmounted(() => {
      clearTimeout(timeOut);
    });

    return {
      header,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-b {
  &__loader {
    width: 300px;
    margin: auto;
    display: block;
  }
}
</style>
