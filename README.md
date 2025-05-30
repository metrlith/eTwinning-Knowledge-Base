# Knowledge Base Application

This project is a simple Knowledge Base application built with React and TypeScript. It allows users to browse through multiple articles and search for specific content.

## Features

- **Article List**: Displays a list of articles fetched from a JSON file.
- **Article View**: Shows the content of a selected article.
- **Search Functionality**: Provides a search bar to filter articles based on user input.

## Project Structure

```
knowledge-base-app
├── src
│   ├── components
│   │   ├── ArticleList.tsx
│   │   ├── ArticleView.tsx
│   │   └── SearchBar.tsx
│   ├── data
│   │   └── articles.json
│   ├── App.tsx
│   └── types
│       └── index.ts
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/knowledge-base-app.git
   ```
2. Navigate to the project directory:
   ```
   cd knowledge-base-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.

## License

This project is licensed under the MIT License.