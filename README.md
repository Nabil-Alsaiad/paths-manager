<h1 align="center">
  <a href="https://github.com/Nabil-Alsaiad/paths-manager">
    <!-- <img src="{{paths-manager.repo_slug}}/docs/images/logo.svg" alt="Logo" width="125" height="125"> -->
  </a>
</h1>

<div align="center">
  paths-manager
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

[![PRs welcome](https://img.shields.io/badge/Pull%20requests-welcome%20<3-ff69b4.svg?style=flat-square)](https://github.com/Nabil-Alsaiad/paths-manager/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)
[![PRs welcome](https://img.shields.io/badge/npm-Check%20it%20out-red.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/paths-manager)

</div>

<details open="open">
<summary>Table of Contents</summary>

- [About](#about)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Usage](#usage)
    - [paths-manager template](#paths-manager-template)
    - [Manual setup](#manual-setup)
    - [Variables reference](#variables-reference)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

</details>

---

## About

<table>
<tr>
<td>

Open Source Software is not about the code in the first place but the communications and community. People love good documentation and obvious workflows. If your software solves some problem, but nobody can figure out how to use it or, for example, how to create an effective bug report, there's something very bad going on. Did you hear about Readme Driven Development? Check out the awesome [article written by GitHub co-founder Tom Preston-Werner](https://tom.preston-werner.com/2010/08/23/readme-driven-development.html).

There are many great README or issues templates available on GitHub, however, you have to find them yourself and combine different templates yourself. In addition, if you want extensive docs like CODE_OF_CONDUCT.md, CONTRIBUTING.md, SECURITY.md or even advanced GitHub features like a pull request template, additional labels, code scanning, and automatic issue/PR closing and locking you have to do much more work. Your time should be focused on creating something **amazing**. You shouldn't be doing the same tasks over and over like creating your GitHub project template from scratch. Follow the **don’t repeat yourself** principle. Use a template **and go create something amazing**!

Key features of **paths-manager**:

- Save all folders with all it's folders/files inside
- Uses json file to store directory parts
- Find any stored folder/file from anywhere in your project

<details open>
<summary>Additional important info</summary>
<br>

This tool was designed to serve Discord bot projects where you will need to get a reference to files that might be away from the current directory your in, also the chance of files being moved to another location is very high, so an automatic way to find certian files is needed.

the tool will use a "all-paths.json" file to store directories in, and it'll be at the same level of the "node_mocules" folder, also the "node_modules" level is concidered the main directiory and the tool will work with only folders at the level and what's inside them, the tool currently doesn't store files at the main directiory, they must be in a main folder, main folder is a folder at the main directiory, one last important thing to note, the tool will treat folders only as folder folders or file folders, no folders containing both folders and files directly, if you have any extra files in a folder with folders in it, concider putting them in a "other" folder.

The tool finding functions will require the extension of the file, when having a file with the same name as an other file, paths-manager will return the first one it finds.

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

### Usage

> Save all your main folders directories at the start of your appication or before
>
> use the function "savePathsOfFolders" and give all main folders at the root of your project as an array
>
> When you want to get the full path of a file that you know it's name, require the package ilke below
>
> const paths-manager = require('paths-manager');
>
> then use the function "getFullPathOf" give it the full file name with the extension
>
> if you have a lot of main folders, you can by provid the main folder name as a second optional argument to find the file faster

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
