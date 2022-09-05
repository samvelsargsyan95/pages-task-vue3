<template>
  <div class="page-a">
    <h1 class="header">{{ header }}</h1>
    <button @click="changePage" class="page-a__button">Go To Page B</button>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "PageA",
  setup() {
    const router = useRouter();
    const isButtonClicked = ref(false);
    const header = ref(null);

    onMounted(() => {
      header.value = "Page A";
    });

    onUnmounted(() => {
      if (!isButtonClicked.value) {
        router.push("/page-c");
      }
    })

    const changePage = () => {
      isButtonClicked.value = true
      router.push("/page-b");
    };
    

    return {
      header,
      changePage,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-a {
  &__button {
    border: unset;
    background: rgba(52, 187, 52, 0.952);
    color: white;
    text-shadow: 1px 1px 1px black;
    padding: 15px 40px;
    text-align: center;
    width: max-content;
    margin: auto;
    border-radius: 6px;
    font-size: 20px;
    cursor: pointer;
    display: block;
  }
}
</style>

