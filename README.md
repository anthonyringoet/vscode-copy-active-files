# Copy Active Files

A VS Code/Cursor extension that copies the relative paths of all open files with an `@` prefix, ideal to get them all to an external AI coding agent like Claude Code. Improvement over built-in `File: Copy Path of Active File`.

## Usage

1. Open multiple files in VS Code
2. Run the command "Copy All Active File Paths" from the Command Palette (Cmd+Shift+P or Ctrl+Shift+P)
3. The relative paths of all open files will be copied to your clipboard, each prefixed with "@"

Example output:

```
@src/index.js @components/Button.tsx @utils/helpers.js
```

## Installation


1. Install the Visual Studio Code Extension Manager:

```bash
npm install -g vsce
```

2. Package the extension:

```bash
vsce package
```

This creates a file like `copy-active-files-0.0.1.vsix`

3. Install the extension in VS Code/Cursor/...:

```bash
code --install-extension copy-active-files-0.0.1.vsix
cursor --install-extension copy-active-files-0.0.1.vsix
```
