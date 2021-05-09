import { generateSnippet } from "./processors";
import * as vscode from "vscode";

export const pasteMappedEnum = async () => {
  const clipBoardText = await vscode.env.clipboard.readText();
  try {
    const generatedSnippet = generateSnippet(clipBoardText);
    const currentSelection = vscode.window.activeTextEditor?.selection;
    if (!currentSelection) return vscode.window.showWarningMessage("No active selection");
    const editorBuilder = (builder: vscode.TextEditorEdit) => builder.replace(currentSelection, generatedSnippet);
    vscode.window.activeTextEditor?.edit(editorBuilder);
  } catch (error) {
    vscode.window.showErrorMessage(error?.message || "Unknown Error");
  }
};
