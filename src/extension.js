const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('copy-active-files.copyAll', async () => {
        const tabs = vscode.window.tabGroups.all.flatMap(group => group.tabs);
        const openFiles = tabs
            .filter(tab => tab.input instanceof vscode.TabInputText)
            .map(tab => tab.input.uri);
        
        if (openFiles.length === 0) {
            vscode.window.showInformationMessage('No files are currently open');
            return;
        }

        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders || workspaceFolders.length === 0) {
            vscode.window.showErrorMessage('No workspace folder found');
            return;
        }

        const workspaceRoot = workspaceFolders[0].uri.fsPath;
        
        const relativePaths = openFiles.map(uri => {
            const filePath = uri.fsPath;
            if (filePath.startsWith(workspaceRoot)) {
                return '@' + filePath.substring(workspaceRoot.length + 1);
            }
            return '@' + filePath;
        });

        const pathsText = relativePaths.join(' ');
        
        await vscode.env.clipboard.writeText(pathsText);
        vscode.window.showInformationMessage(`Copied ${openFiles.length} file paths to clipboard`);
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};