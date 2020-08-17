type ProjectInfo = {
  title: string;
  body: string;
  gh_url: string;
  lang_icon: string;
  lang_label: string;
  lang_url: string;
  extra_note: string;
  active_date: string;
};

export const ACTIVE_PROJECTS: ProjectInfo[] = [
  {
    title: 'VSCode-Icons',
    body: 'Get the official language / framework icons for Visual Studio Code.',
    gh_url: 'https://github.com/vscode-icons/vscode-icons',
    lang_icon: '../../assets/icons/file_type_typescript_official.svg',
    lang_label: 'TypeScript',
    lang_url: 'https://www.typescriptlang.org/',
    extra_note: 'Made with TypeScript',
    active_date: 'Contributor since Jan. 2019 <br/> Maintainer since Jun. 2019',
  },
  {
    title: 'TSLint-to-ESLint-Config',
    body:
      'Converts your TSLint configuration to the closest possible ESLint equivalent.',
    gh_url: 'https://github.com/typescript-eslint/tslint-to-eslint-config',
    lang_icon: '../../assets/icons/file_type_typescript_official.svg',
    lang_label: 'TypeScript',
    lang_url: 'https://www.typescriptlang.org/',
    extra_note: 'Made with TypeScript',
    active_date: 'Maintainer since Apr. 2020',
  },
  {
    title: 'GraphQL-Server',
    body:
      'GraphQL-Server is a base library that serves as a helper for building GraphQL servers or integrations into existing web frameworks using <i>GraphQL-Core</i>.',
    gh_url: 'https://github.com/graphql-python/graphql-server',
    lang_icon: '../../assets/icons/file_type_python.svg',
    lang_url: 'https://www.python.org/',
    lang_label: 'Python + GraphQL',
    extra_note: 'Made with Python 3',
    active_date: 'Contributor since Mar. 2020 <br/> Maintainer since Jun. 2020',
  },
  {
    title: 'GQL',
    body:
      'GraphQL client for Python. Plays nicely with <i>graphene</i>, <i>graphql-core</i>, <i>graphql-js</i> and any other GraphQL implementation compatible with the spec.',
    gh_url: 'https://github.com/graphql-python/gql',
    lang_icon: '../../assets/icons/file_type_python.svg',
    lang_url: 'https://www.python.org/',
    lang_label: 'Python + GraphQL',
    extra_note: 'Made with Python 3',
    active_date: 'Contributor since Jan. 2020 <br/> Maintainer since Jun. 2020',
  },
  {
    title: 'Phosphate',
    body:
      'Phosphate is a Nim port of GraphQL.js, the JavaScript reference implementation of GraphQL created by Facebook.',
    gh_url: 'https://github.com/KingDarBoja/Phosphate',
    lang_icon: '../../assets/icons/file_type_nim.svg',
    lang_url: 'https://nim-lang.org/',
    lang_label: 'Nim + GraphQL',
    extra_note: 'Made with Nim',
    active_date: 'Owner since Mar. 2020',
  },
  {
    title: 'Iridium',
    body:
      'The International Standard for country codes and codes for their subdivisions on Nim.',
    gh_url: 'https://github.com/KingDarBoja/Iridium',
    lang_icon: '../../assets/icons/file_type_nim.svg',
    lang_url: 'https://nim-lang.org/',
    lang_label: 'Nim',
    extra_note: 'Made with Nim',
    active_date: 'Owner since Jun. 2020',
  },
];

export const OCCASIONAL_PROJECTS: ProjectInfo[] = [
  {
    title: 'Serverless-Plugin-TypeScript',
    body:
      'This is a fork from official prisma-labs repository, which went unmaintained but still getting several issues and PRs. Provides TS support for serverless.',
    gh_url: 'https://github.com/KingDarBoja/serverless-plugin-typescript',
    lang_icon: '../../assets/icons/file_type_typescript_official.svg',
    lang_url: 'https://www.typescriptlang.org/',
    lang_label: 'TypeScript + Serverless',
    extra_note: 'Made with TypeScript',
    active_date: 'Maintainer since Feb. 2020 <br/> Looking for some help.',
  },
  {
    title: 'ng-toolkit',
    body: 'Angular toolbox to bring serverless, universal and PWA config to your project in one go.',
    gh_url: 'https://github.com/maciejtreder/ng-toolkit',
    lang_icon: '../../assets/icons/file_type_angular.svg',
    lang_url: 'https://github.com/angular/angular',
    lang_label: 'Angular',
    extra_note: 'Made with TypeScript',
    active_date: 'Maintainer since Oct. 2019 <br/> Got lazy here.'
  }
];
