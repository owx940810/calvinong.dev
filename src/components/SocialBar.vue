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
    a(href="https://codepen.io/owx940810/pens/popular" target="_blank")
      codepen-icon.target(size="24")
      codepen-icon.ghost(size="24")
  li
    a(href="https://github.com/owx940810/" target="_blank")
      github-icon.target(size="24")
      github-icon.ghost(size="24")
  li
    a(href="https://www.facebook.com/calvin.xhen" target="_blank")
      facebook-icon.target(size="24")
      facebook-icon.ghost(size="24")
  li
    a(href="https://www.instagram.com/calvin_wx/" target="_blank")
      instagram-icon.target(size="24")
      instagram-icon.ghost(size="24")
  li
    a(href="https://www.linkedin.com/in/owx940810/" target="_blank")
      linkedin-icon.target(size="24")
      linkedin-icon.ghost(size="24")

</template>

<style lang="sass" scoped>
@import '@styles/variables'

#social-bar
  position: fixed
  bottom: 10vh
  left: 6%
  display: flex
  flex-flow: column
  list-style-type: none
  margin: 0
  padding: 0 0 10px 0

  &::after
    content: ""
    position: absolute
    top: 100%
    left: 50%
    border-left: 1px solid $grey
    height: 10vh

li
  margin: 4px 0

a
  display: block
  position: relative

  &:hover
    .ghost
      opacity: 1
      transform: translate(-2px, -1px)

    .target
      transform: translate(2px, 1px)
      opacity: 0.5

svg
  stroke: $grey
  transition: all $speed-fast ease-in-out

.ghost
  opacity: 0
  position: absolute
  top: 0
  left: 0
  stroke: $blue

</style>
