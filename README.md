<h1 align="center">
  <a href="https://github.com/Nabil-Alsaiad/paths-manager">
    <!-- <img src="{{paths-manager.repo_slug}}/docs/images/logo.svg" alt="Logo" width="125" height="125"> -->
  </a>
</h1>

<div align="center">
  # paths-manager
  <br />
  <br />
  <a href="https://github.com/Nabil-Alsaiad/paths-manager/issues/new?assignees=&labels=bug&template=01_BUG_REPORT.md&title=bug%3A+">Report a Bug</a>
  ·
  <a href="https://github.com/Nabil-Alsaiad/paths-manager/issues/new?assignees=&labels=enhancement&template=02_FEATURE_REQUEST.md&title=feat%3A+">Request a Feature</a>
  .
  <a href="https://github.com/Nabil-Alsaiad/paths-manager/discussions">Ask a Question</a>
</div>

<div align="center">
<br />

<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/paths-manager"><img src="https://img.shields.io/npm/v/paths-manager.svg?maxAge=3600&logo=npm" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/paths-manager"><img src="https://img.shields.io/npm/dt/paths-manager.svg?maxAge=3600&logo=npm" alt="npm downloads" /></a>
  </p>
</div>

</div>

<details open="open">
<summary>Table of Contents</summary>

- [About](#about)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Usage](#usage)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

</details>

---

## About

<table>
<tr>
<td>

Discord bot projects usually maintain a lot of files due to every file being a separate command, event, handler or some data storing json files, so keeping the files organized in tree structure folders like "commands/moderation/admins-only/ban.js", yet keeping track of each file path in order to reference it anywhere inside your commands, for example: if you're making a test command to test the welcome event message rather than kicking and re-joining from another acount it'd be better to have a test command and be somewhere like "commands/tests/event-tests/welcome-test.js" and you want to require the event located at "events/guild/welcome.js" so you can call it from the tets command, you propably would write something like ```const welcome = require('../../../events/guild/welcome.js');``` which will work fine until you move any of the files or change the name of one of their folders and that will break everything, you can just change the path text but if you're doing the same thing for every other command and event you have?, just moving the "commands/tests" folder will require you to change all path texts in all test command files and of course you don't want that, we programmers hate doing repetitive work ourselves so much that's why we made this tool, to help automate this work.

Key features of **paths-manager**:

- Save all file paths inside a main folder or it's subfolder
- Get the full path of any stored file from anywhere in your project
- Get full paths of all stored files within a main folder or it's subfolder

<details open>
<summary>Additional important info</summary>
<br>

paths-manager keeps the stored paths in variables, meaning they'll be lost once the project is stopped and you'll need to save the files every time you run it

paths-manager will auto detect all main folders if non were specified in the save files function.

paths-manager finding functions will require the extension of the file name.

when having a file with the same name as an other file, paths-manager will return the first one it finds.

</details>

</td>
</tr>
</table>

### Built With

- Node.js
- Javascript

## Getting Started

### Prerequisites

Install paths-manager by running the following command in your node.js project:

```npm
npm i paths-manager
```

or

```npm
npm install paths-manager
```

### Usage

> Require the paths-manager module like so ```const pathsManager = require('paths-manager');```.
>
> Save all your main folders files at the beggining of your project.
>
> When you want to get the full path of a file that you know it's name, require the package like before.
>
> then use the function for getting a file path, give it the full file name with it's extension like so ```'example.js'```.
>
> if you have more than one file with the same name then use the function for getting a file path with a folder name it's inside, provide the folder name along with the file name to get the exact one you want.

## Contributing

First off, thanks for taking the time to contribute! Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make will benefit everybody else and are **greatly appreciated**.

Please try to create bug reports that are:

- _Reproducible._ Include steps to reproduce the problem.
- _Specific._ Include as much detail as possible: which version, what environment, etc.
- _Unique._ Do not duplicate existing opened issues.
- _Scoped to a Single Bug._ One bug per report.

<!-- Please adhere to this project's [code of conduct](docs/CODE_OF_CONDUCT.md). -->

## Support

Try contacting one of the followings:

- [Nabil](https://github.com/Nabil-Alsaiad)
- [Snowy](https://github.com/Snowy7)

## License

This project is licensed under the **MIT license**. Feel free to edit and distribute this template as you like.
See [LICENSE](LICENSE) for more information.
