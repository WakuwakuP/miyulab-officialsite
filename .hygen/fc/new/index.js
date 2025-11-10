//
// npm run new:sfc -- --tag=p
//
module.exports = {
  prompt: ({ inquirer, args }) => {
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
      {
        message: 'storybookファイルを作成しますか？',
        name: 'should_create_storybook',
        type: 'confirm',
      },
      {
        message: 'cssファイルを作成しますか？',
        name: 'should_create_css',
        type: 'confirm',
      },
    ]

    return inquirer.prompt(questions).then((answers) => {
      const { component_category, component_name } = answers
      const storybook_title_path = `${component_category}/${component_name}`
      const path = `components/${component_category}${component_name ? `/${component_name}` : ``}`
      const css_path = `styles/components/${component_category}`
      const tag = args.tag ? args.tag : 'div'
      return { ...answers, css_path, path, storybook_title_path, tag }
    })
  },
}
