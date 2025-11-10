//
// npm run new:sfc -- --tag=p
//
module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        choices: ['containers', 'parts', 'templates'],
        message: 'どのディレクトリが対象ですか？',
        name: 'component_category',
        type: 'select',
      },
      {
        message: 'コンポーネントの名前を入力してください',
        name: 'component_name',
        type: 'input',
      },
    ]

    return inquirer.prompt(questions).then((answers) => {
      const { component_category, component_name } = answers
      const storybook_title_path = `${component_category}/${component_name}`
      const path = `${component_category}${component_name ? `/${component_name}` : ``}`
      const css_path = `src/styles/components/${component_category}`
      return { ...answers, css_path, path, storybook_title_path }
    })
  },
}
