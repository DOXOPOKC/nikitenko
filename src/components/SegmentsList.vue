<template>
<v-card
  class="mx-auto my-12"
  tile
  flat
>
  <v-list three-line>
    <v-list-item-group v-model="selectedItem" color="primary">
      <v-list-item
        v-for="item in segments"
        :key="item.title"
        :href="`/segment/${item.id}`"
        link
      >
        <v-list-item-icon>
          <v-icon
            :color="item.icon_color"
            v-text="item.icon"
          >
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
          <v-list-item-subtitle>Response count: {{ item.response_count }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon href="">
            <v-icon color="grey lighten-1">mdi-arrow-right</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</v-card>
</template>

<script>
export default {
  name: "SegmentsList",
  data: () => ({
    selectedItem: null,
    segments: [
      { id: 1, icon: 'mdi-circle-medium', icon_color: '#ebcab5', title: 'Segment 1', response_count: 12, date: '11/12/2020' },
      { id: 2, icon: 'mdi-circle-medium', icon_color: '#7d4164', title: 'Segment 2', response_count: 123, date: '11/12/2020' },
      { id: 3, icon: 'mdi-circle-medium', icon_color: '#f3e04d', title: 'Segment 3', response_count: 1234, date: '11/12/2020' },
      { id: 4, icon: 'mdi-circle-medium', icon_color: '#8afdca', title: 'Segment 4', response_count: 12345, date: '11/12/2020' },
    ]
  })
}
</script>

<style>

</style>