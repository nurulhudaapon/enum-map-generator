import * as vscode from "vscode";
import { pasteMappedEnum } from "./commands";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand("enum-map-generator.paste_mapped_enum", pasteMappedEnum);
  context.subscriptions.push(disposable);
}

export function deactivate() {}
