<script setup>
</script>

<template lang="pug">
section
  .introduction
    p.font-mono Good Day to you, my name is
    p.name.font-color-cloud Calvin#[br]Ong Wei Xhen
    p I'm a frontend web developer that loves to build things that go swish swoosh
</template>

<style lang="sass" scoped>
@import '@styles/variables'

section
  height: 100vh
  display: flex
  flex-flow: row wrap
  justify-content: flex-start
  align-items: center

p
  display: block
  margin: 16px 0

.name
  font-size: 72px
  margin-left: -3px
</style>
