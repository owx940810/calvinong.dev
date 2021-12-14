<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HeaderComponent from './components/Header.vue'
import Intro from './components/Intro.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import ContributedProjects from './components/ContributedProjects.vue'
import CreatedProjects from './components/CreatedProjects.vue'
import SocialBar from './components/SocialBar.vue'
</script>

<template lang="pug">
HeaderComponent
Intro
About
Experience
ContributedProjects
CreatedProjects
SocialBar
</template>

<style lang="sass">
@import '~/normalize.css/normalize.css'
@import 'styles/base'

</style>
