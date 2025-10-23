# KidsPlatform


## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/xxnc17s50F)


## Run tasks

To run

```sh
npm run start:client
```

```sh
npm run start:admin
```

To see all available targets to run for a project, run:

```sh
npx nx show project client-UI
```


## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/react:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib mylib
```
