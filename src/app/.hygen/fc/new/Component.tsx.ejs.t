---
to: src/components/<%= path %>/<%= component_name %>.tsx
---
<%= should_create_css ? `import styles form 'styles/${path}.module.css'` : null %>

export default function <%= component_name %>() {
  return (
    <div></div>
  )
}
