<template>
    <div class="container">
      <app-quote-progress 
        v-bind:maxQuotes="maxQuotes"
        v-bind:quoteCount="quotes.length"></app-quote-progress>
      <app-new-quote></app-new-quote>
      <app-quote-grid v-bind:quotes="quotes"></app-quote-grid>
      <div></div>
    </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid";
import NewQuote from "./components/NewQuote";
import QuoteProgress from "./components/QuoteProgress";
import { EventBus } from "./main";

export default {
  components: {
    "app-quote-grid": QuoteGrid,
    "app-new-quote": NewQuote,
    "app-quote-progress": QuoteProgress
  },
  data() {
    return {
      quotes: ["Just a quote."],
      maxQuotes: 10
    };
  },
  created() {
    EventBus.$on("quotecreated", newQuote => {
      if (this.quotes.length < this.maxQuotes) {
        this.quotes.push(newQuote);
      }
    });
    EventBus.$on("quotedeleted", index => this.quotes.splice(index, 1));
  }
};
</script>

<style>
</style>
