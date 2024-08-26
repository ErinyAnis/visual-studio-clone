import { v4 as uuidv4 } from "uuid";
import { IFile } from "../interfaces";

export const fileTree: IFile = {
  id: uuidv4(),
  name: "VS Code Clone",
  isFolder: true,

  children: [
    {
      id: uuidv4(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: ".vite",
          isFolder: true,
          children: [
            {
              id: uuidv4(),
              name: "react.js",
              isFolder: false,
              content: `import React from 'react';
import ReactDOM from 'react-dom';
import ViteInfo from './.vite/ViteInfo';

const App = () => {
  return (
    <div>
      <h1>Welcome to My Vite-powered React App</h1>
      <ViteInfo />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
`
            },
          ],
        },
      ],
    },

    {
      id: uuidv4(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: "index.html",
          isFolder: false,
          content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="A React application powered by Vite" />
  <title>Vite React App</title>
  <!-- Vite includes -->
  <script type="module" src="/src/main.jsx"></script>
</head>
<body>
  <div id="root"></div>
</body>
</html>
`
        },
      ],
    },
    {
      id: uuidv4(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuidv4(),
              name: "Button.tsx",
              isFolder: false,
              content: `export interface FileSysytem {
  name: number;
  isFolder: boolrean;
  children?: FileSystem[];
  content?: string | undefined;
}
  
  const Button = ({ label, onClick, type = 'button', className = '' }) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={custom-button \${className}}
    >
      {label}
    </button>
  );
};

export default Button;
  `,
            },
          ],
        },
      ],
    },
  ],
};
