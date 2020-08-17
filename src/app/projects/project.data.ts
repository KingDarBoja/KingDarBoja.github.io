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

export const PROJECTS: ProjectInfo[] = [
  {
    title: 'TSLint-to-ESLint-Config',
    body: 'Converts your TSLint configuration to the closest possible ESLint equivalent.',
    gh_url: 'https://github.com/typescript-eslint/tslint-to-eslint-config',
    lang_icon: '../../assets/icons/file_type_typescript_official.svg',
    lang_label: 'TypeScript',
    lang_url: 'https://www.typescriptlang.org/',
    extra_note: 'Made with TypeScript',
    active_date: 'Maintainer since Apr. 2020'
  },
  {
    title: 'VSCode-Icons',
    body: 'Get the official language/framework icons for Visual Studio Code',
    gh_url: 'https://github.com/vscode-icons/vscode-icons',
    lang_icon: '../../assets/icons/file_type_typescript_official.svg',
    lang_label: 'TypeScript',
    lang_url: 'https://www.typescriptlang.org/',
    extra_note: 'Made with TypeScript',
    active_date: 'Contributor since Jan. 2019 / Maintainer since Jun. 2019'
  },
  {
    title: 'GraphQL-Server',
    body: 'GraphQL-Server is a base library that serves as a helper for building GraphQL servers or integrations into existing web frameworks using GraphQL-Core.',
    gh_url: 'https://github.com/graphql-python/graphql-server',
    lang_icon: '../../assets/icons/file_type_python.svg',
    lang_url: 'https://www.python.org/',
    lang_label: 'Python + GraphQL',
    extra_note: 'Made with Python 3',
    active_date: 'Contributor since Mar. 2020 / Maintainer since Jun. 2020'
  }
];
