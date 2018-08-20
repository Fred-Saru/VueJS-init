<template>
  <div class="row">
    <div class="col-xs-12">
      <h3>Quotes added</h3>
      <div class="progress">
        <div class="progress-bar"
          :style="{width: (quoteCount / maxQuotes) * 100 + '%'}">
          {{ quoteCount }} / {{ maxQuotes }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["quoteCount", "maxQuotes"]
};
</script>

<style scoped>
</style>