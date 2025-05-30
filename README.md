# eTwinning Knowledge Base

A simple knowledge base application with articles and search functionality, made for eTwinning by an enthusiastic student. This project is built with React and uses a JSON file to store articles.

## Features

- Browse a list of articles
- Search articles by title
- View article details

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/) (for cloning the repository)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended code editor)
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/metrlith/eTwinning-Knowledge-Base.git
   cd eTwinning-Knowledge-Base
   ```

   or if you prefer to use SSH:

   ```bash
   git clone git@github.com:metrlith/eTwinning-Knowledge-Base.git
   cd eTwinning-Knowledge-Base
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running Locally

Start the development server:

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Building for Production

To build the app for production:

```sh
npm run build
```

The output will be in the `build/` directory.

### Deploying to GitHub Pages

This project is configured to deploy to [GitHub Pages](https://pages.github.com/):

1. Ensure the `homepage` field in [`package.json`](package.json) is set to your repository's GitHub Pages URL.
2. Deploy with:

3. Ensure the `homepage` field in [`package.json`](package.json) is set to your repository's GitHub Pages URL. For example:

   ```json
   "homepage": "https://<your-github-username>.github.io/eTwinning-Knowledge-Base"
   ```

make sure to replace `<your-github-username>` with your actual GitHub username.

   ```bash
   npm run deploy
   ```

Your site will be available at `https://<your-github-username>.github.io/eTwinning-Knowledge-Base`.

## Data

Articles are stored in [`public/data/articles.json`](public/data/articles.json). The file contains an array of article objects, each with the following structure:

```json
{
  "id": "1",
  "title": "Article Title",
  "content": "Article content goes here.",
  "author": "Author Name"
}
```

> When you are adding new articles, make sure to follow this structure. Add a new object for each article, incrementing the `id` field for each new entry.

## Contributing

We welcome contributions to the eTwinning Knowledge Base! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Create a pull request describing your changes.

## License

This project is licensed under the [MIT License](LICENSE).
