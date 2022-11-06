//
// npm run new:sfc -- --tag=p
//
module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'select',
        name: 'component_category',
        message: 'どのディレクトリが対象ですか？',
        choices: ['containers', 'parts'],
      },
      {
        type: 'input',
        name: 'component_name',
        message: 'コンポーネントの名前を入力してください',
      },
    ]

    return inquirer.prompt(questions).then((answers) => {
      const { component_category, component_name } = answers
      const storybook_title_path = `${component_category}/${component_name}`
      const path = `${component_category}${component_name ? `/${component_name}` : ``}`
      const css_path = `src/styles/components/${component_category}`
      return { ...answers, path, css_path }
    })
  },
}
