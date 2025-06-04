🇹🇷 Türkçe versiyon için, lütfen [bu](tr.md) dosyayı ziyaret edin.

# NOTE (As of 04/06/2025)

This project has not been completed yet! The website currently online reflects a beta version of this project.

Check the [roadmap](ROADMAP.md) for planned changes.  
Visit the [Issues](https://github.com/metrlith/eTwinning-Knowledge-Base/issues) page for known bugs.

# eTwinning Knowledge Base

A simple knowledge base application for the European Union's eTwinning project. The project can be used by anyone on the platform, independently of any Twinspace.

The project is built using React and Node.js. The entries are stored in a JSON file.

You can access the KB [here](https://metrlith.github.io/eTwinning-Knowledge-Base/).

## Features

- View and list entries
- Search for any entry by ID or name
- Read entry contents

## Using the Project

### Prerequisites

- [Git](https://git-scm.com/) (to clone the repository)
- [Visual Studio Code](https://code.visualstudio.com/) (my recommended code editor)
- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

Make sure you have Git installed. Then, open a terminal and enter the following command:

   ```bash
   git clone https://github.com/metrlith/eTwinning-Knowledge-Base.git
   cd eTwinning-Knowledge-Base
   ```

   If you prefer using SSH:

   ```bash
   git clone git@github.com:metrlith/eTwinning-Knowledge-Base.git
   cd eTwinning-Knowledge-Base
   ```

2. Install dependencies:

The project depends on some modules called â€œdependencies.â€ These will be stored in a folder named `node_modules`. To install the modules, run:

   ```bash
   npm install
   ```

### Running Locally

Start the development server:

```sh
npm start
```

To view the app, open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Deployment

This project can be turned into a production-ready application. I donâ€™t recommend it, but you may consider it for testing purposes. To do so, run:

```sh
npm run build
```

Your app will be in the `build/` directory.

### Deploying to GitHub Pages

This project is configured to be deployed to [GitHub Pages](https://pages.github.com/). Youâ€™ll need to create a GitHub account for this. Creating an account also makes using Git and Visual Studio Code more convenient.

1. Make sure the `homepage` field in [`package.json`](package.json) is set to your GitHub Pages URL. For example:

   ```json
   "homepage": "https://<your-github-username>.github.io/eTwinning-Knowledge-Base"
   ```

Replace `<your-github-username>` with your actual GitHub username.  
Example site: (https://metrlith.github.io/eTwinning-Knowledge-Base)

> Note: `<>` are angle brackets. You will never see angle brackets in a real website address! So be sure to remove them when entering your GitHub username in the URL.

2. Deploy with this command:

   ```bash
   npm run deploy
   ```

Your site will then be available at:  
`https://<your-github-username>.github.io/eTwinning-Knowledge-Base`

## Data

Articles are stored in the [`public/data/articles.json`](public/data/articles.json) file. The file contains an array of article objects with the following structure:

```json
{
  "id": "1",
  "title": "Article title",
  "content": "Article content",
  "author": "Author name"
}
```

Field descriptions:
- `id`: ID of the article used for search and storage. Please assign IDs sequentially.
- `title`: The title of the article. Displayed on the homepage.
- `content`: The content of the article. Displayed when you click an article.
- `author`: The name of the person who wrote the article. The default value is "eTwinning KB Team".

## Contributing to the Project

Your contributions to the eTwinning Knowledge Base are welcome! To contribute, please follow these steps:

1. Fork the repository. This will create a personal copy.
2. Create a new branch for your feature or bug fix. This keeps your changes separate from the main project.
3. Make and save your changes.
4. Push your changes to your fork.
5. When done, create a pull request. This allows me to review and merge your changes into the main project.

## License

The eTwinning Knowledge Base is licensed under the MIT License.  
You can view the license [here](LICENSE).
