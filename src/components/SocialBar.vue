<script setup>
import { CodepenIcon, GithubIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from 'vue-feather-icons'
import makeCompatible from '../js/featherCompatible.js'

makeCompatible(CodepenIcon)
makeCompatible(GithubIcon)
makeCompatible(FacebookIcon)
makeCompatible(InstagramIcon)
makeCompatible(LinkedinIcon)
</script>

<template lang="pug">
ul#social-bar
  li
    button
      codepen-icon(size="24")
  li
    button
      github-icon(size="24")
  li 
    button
      facebook-icon(size="24")
  li 
    button
      instagram-icon(size="24")
  li 
    button
      linkedin-icon(size="24")

</template>

<style lang="sass">
#social-bar
  position: fixed
  bottom: 0
  left: 20px
  display: flex
  flex-flow: column
  list-style-type: none
  margin: 0
</style>