# CodePen Embed

A customizable React component for embedding CodePen examples on your website. This component allows you to easily configure the embed settings using a `.codepen-config.json` file.

## Features

-   Fully configurable through a `.codepen-config.json` file.
-   Supports different themes, editable embeds, and custom heights.
-   Lightweight and easy to integrate with any React or Next.js project.

## Getting Started

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/YOUR_USERNAME/codepen-embed.git
    cd codepen-embed
    ```

2. **Install dependencies:**

    Make sure you have `npm` or `yarn` installed. Run the following commands to install the necessary dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Run the project locally:**

    Start the local development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open your browser and navigate to `http://localhost:5173` to see the project in action.

### Configuration

Create a `.codepen-config.json` file in the project root to customize the embed settings:

```json
{
    "username": "YOUR_USERNAME",
    "height": 600,
    "themeId": "dark",
    "defaultTab": "html,result",
    "editable": true,
    "preview": false,
    "title": "Embedded CodePen Example"
}
```

You can overwrite these settings directly in your `CodepenEmbed` component if needed.

### Usage

To embed a CodePen in your project, import the `CodepenEmbed` component and use it like this:

```jsx
import React from 'react';
import CodepenEmbed from './CodepenEmbed';

function App() {
    return (
        <div>
            <h1>My CodePen Embeds</h1>
            <CodepenEmbed penId="yourPenId" />
        </div>
    );
}

export default App;
```

### Props

The `CodepenEmbed` component supports the following props specified in `.codepen-config.json` or directly on the component:

-   **`UserName`** (optional): The account that the Pen is associated with.
-   **`penId`** (required): The unique ID of the CodePen to embed.
-   **`height`** (optional): Overrides the default height. (default: 600)
-   **`themeId`** (optional): Overrides the default theme. (default: dark; options: light, dark)
-   **`defaultTab`** (optional): Overrides the default tabs. (default: html, result)
-   **`editable`** (optional): Sets whether the embed is editable. (default: true; options: true, false)
-   **`preview`** (optional): Enables or disables preview mode. (default: true; options: true, false)
-   **`title`** (optional): Overrides the embed title.

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Issues

If you encounter any issues, please open an issue on GitHub.

### Author

-   [Peter Benoit](https://github.com/peterbenoit)
