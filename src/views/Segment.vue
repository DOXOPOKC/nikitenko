<template>
  <v-card class="mx-auto my-12" width="560" height="800">
    <v-card-title>Segment N {{ $route.params.id }}</v-card-title>
    <v-card-text>
      <PolarChart />
      <ChecklistsList />
    </v-card-text>
  </v-card>
</template>

<script>
import PolarChart from "@/components/PolarChart";
import ChecklistsList from "@/components/ChecklistsList";

export default {
  name: "Segment",
  components: {
    PolarChart,
    ChecklistsList,
  },
}
</script>

<style>

</style>