module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => {
  plop.setGenerator('Component', {
    description: 'Create a component with same name folder',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],

    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/Component.tsx.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/Component.styles.ts.hbs',
        skipIfExists: true
      }
    ]
  })
}
