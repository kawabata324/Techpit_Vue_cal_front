<template>
  <div class="home">
    <Calendar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Calendar from "@/components/Calendar.vue";

export default defineComponent({
  name: "Home",
  components: {
    Calendar,
  },
});
</script>
