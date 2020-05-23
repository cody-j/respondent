<template>
  <div class="PaginateButton" @click="$store.dispatch('fetchRespondents')">Fetch More</div>
</template>

<script>
export default {
  name: 'PaginateButton',

  methods: {}
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';

.PaginateButton {
  font-size: 1.3rem;
  font-weight: 500;
  display: inline-flex;
  border: $content-block-border;
  padding: 0.6rem 0.9rem;

  &:hover {
    cursor: pointer;
  }
}
</style>
