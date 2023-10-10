# Using cra-template-truemark

## How can we install cra-template-truemark? - Step by Step Guide

1. Clone using the following repo link

   ```md
   git clone https://github.com/TruemarkDev/cra-template-truemark.git for https.

   git clone git@github.com:TruemarkDev/cra-template-truemark.git for ssh.
   
   ```

2. Go to the project folder

   ```md
   cd cra-template-truemark
   ```

## How can we run the project?

In the project directory, you can run:

   ```md
   npm start
   ```

Runs the app in the development mode.
 Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

## Updating Remote Origin URL to that of the Project

When setting up your local development environment for your project, you need to follow these steps:

1. Navigate to your local project directory using the terminal.
2. Check the current remote URLs associated with your repository by running:

```
git remote -v

```
3. To update the remote origin URL, use the following command, replacing `<new_repo_url>` with the URL of the new project repository by using following command:

```
git remote set-url origin <new_repo_url>

```
4. Verify that the remote origin URL has been updated by running `git remote -v` again. It should now point to the new project repository.

## Dependencies

- **React:** ^18.2.0
- **Node.js:** 18.14.0
- **npm:** 9.8.1

## What are libraries and stack used within template?

- **React:** For building dynamic user interfaces.
- **Routing:** Utilize react-router-dom for navigation.
- **Localization:** i18next simplifies translations.
- **HTTP Requests:** axios for API interactions.
- **Styling:** Bootstrap ensures responsive designs.
- **Icons:** Integrate Font Awesome for customizable icons.
- **Testing:** @testing-library for unit testing and cypress for end-to-end testing.
- **Linting & Formatting:** eslint, Prettier, stylelint.
- **CSS Enhancement:** Leverage Sass for powerful styling.

## How can I contribute?

To find information on how to contribute to the project, you can usually refer to the CONTRIBUTING.md file in project's repository. This file provides guidelines and instructions for contributing to our project.
