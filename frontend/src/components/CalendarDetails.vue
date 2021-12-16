<template>
  <div>
    <h1>CalendarDetails</h1>
    <div v-for="event in events" :key="event.id">
      <h2>{{ event.name }}</h2>
      <p>start: {{ event.start }}</p>
      <p>end: {{ event.end }}</p>
      <p>description: {{ event.description }}</p>
    </div>

    <button type="submit" @click="fetchEvents">fetchEvents</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
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
