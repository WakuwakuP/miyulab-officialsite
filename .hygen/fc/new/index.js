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
      {
        type: 'confirm',
        name: 'should_create_storybook',
        message: 'storybookファイルを作成しますか？',
      },
      {
        type: 'confirm',
        name: 'should_create_css',
        message: 'cssファイルを作成しますか？',
      },
    ]

    return inquirer.prompt(questions).then((answers) => {
      const { component_category, component_name } = answers
      const path = `components/${component_category}${component_name ? `/${component_name}` : ``}`
      const css_path = `styles/components/${component_category}`
      const tag = args.tag ? args.tag : 'div'
      return { ...answers, path, css_path, tag }
    })
  },
}
