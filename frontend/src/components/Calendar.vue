<template>
  <div class="calendar">
    <h1>Calendar</h1>
    <p>events</p>
    <p>{{ events }}</p>
    <button @click="fetchEvents">fetchEvents</button>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Calendar",
  setup() {
    let events = reactive([]);
    const fetchEvents = () => {
      axios
        .get("http://localhost:3011/events")
        .then((res) =>  events.push(res.data))
        .catch((e) => console.log(e));
    };
    return {
      events,
      fetchEvents,
    };
  },
});
</script>
<style scoped></style>
