<template>
  <div>
    <h1>Calendar</h1>
    <p>events:</p>
    <p>{{ events }}</p>
    <button @click="fetchEvent">fetchEvent</button>
  </div>
</template>

<script>
import { defineComponent, reactive } from "@vue/runtime-core";
import axios from "axios";

export default defineComponent({
  setup() {
    let events = reactive({});
    const fetchEvent = () => {
      axios
        .get("http://localhost:3011/events")
        .then((res) => {
          events = res.data;
        })
        .catch((e) => console.log(e));
    };
    return {
      events,
      fetchEvent,
    };
  },
});
</script>

<style></style>
