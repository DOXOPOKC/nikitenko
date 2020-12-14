<template>
  <v-card class="mx-auto my-12" width="560" height="800">
    <v-card-title>Segments</v-card-title>
    <v-card-text>
      <PolarChart />
      <SegmentsList />
    </v-card-text>
  </v-card>
</template>

<script>
import PolarChart from "@/components/PolarChart";
import SegmentsList from "@/components/SegmentsList";

export default {
  name: "Segments",
  components: {
    PolarChart,
    SegmentsList,
  },
}
</script>

<style>

</style>