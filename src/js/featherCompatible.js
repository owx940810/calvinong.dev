import * as VueBase from 'vue'

const renderIcon = (ren) => {
  const { attrs, class: cls } = ren.props
  if (attrs) {
    ren.props = attrs
    ren.props.class = cls
  }
  if (Array.isArray(ren.children)) {
    ren.children = ren.children.map((rem) => renderIcon(rem))
  }
  return ren
}

const makeCompatible = (Icon) => {
  const oldRender = Icon.render

  Icon.render = (props) => renderIcon(oldRender(VueBase.h, { props, data: {} }))
}

export default makeCompatible
