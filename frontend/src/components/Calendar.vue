<template>
  <div class="calendar">
    <h1 class="text-red-500">Calendar</h1>
    <ul v-for="event in events" :key="event.id">
      <li>{{ event.name }}</li>
    </ul>
    <button @click="fetchEvents">fetchEvents</button>
    <CalendarDetails />
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import CalendarDetails from "./CalendarDetails.vue";

export default defineComponent({
  components: { CalendarDetails },
  name: "Calendar",
  setup() {
    const store = useStore();

    const events = computed(() => {
      return store.getters.events;
    });

    const fetchEvents = () => {
      store.dispatch("fetchEvents");
    };

    return {
      events,
      fetchEvents,
    };
  },
});
</script>
<style scoped></style>
