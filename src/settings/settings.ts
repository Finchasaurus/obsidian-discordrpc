export class DiscordRPCSettings {
  showVaultName: boolean = true
  showCurrentFileName: boolean = true
  showConnectionTimer: boolean = false
  showPopups: boolean = true
  customVaultName: string = ""
  showFileExtension: boolean = false
  useLoadedTime: boolean = false
  connectOnStart: boolean = true
  autoHideStatusBar: boolean = true
  privacyMode: boolean = false
  showPath: boolean = false
}

export enum PluginState {
  connected,
  connecting,
  disconnected,
}
