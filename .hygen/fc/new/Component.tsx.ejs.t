---
to: src/<%= path %>/<%= component_name %>.tsx
---
<%_ if(should_create_css) { _%>
import styles from '<%= css_path %>/<%= component_name %>.module.css'
<%_ } _%>

export const <%= component_name %> = () => {
  return (
    <div></div>
  )
}
