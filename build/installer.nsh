!include LogicLib.nsh
!include nsDialogs.nsh
!include WinMessages.nsh

!ifndef BUILD_UNINSTALLER
Var OMB_ToolsDialog
Var OMB_ShortcutCheckbox
Var OMB_PublishingToolsCheckbox
Var OMB_CreateDesktopShortcutState
Var OMB_InstallPublishingToolsState

Function OMBToolsPageCreate
  nsDialogs::Create 1018
  Pop $OMB_ToolsDialog
  ${If} $OMB_ToolsDialog == error
    Abort
  ${EndIf}

  ${NSD_CreateLabel} 0 0 100% 12u "Tools and shortcuts"
  Pop $0

  ${NSD_CreateLabel} 0 18u 100% 36u "The desktop app includes its own runtime. Users do not need to install Node.js or pnpm.$\r$\nGit for Windows with Git Credential Manager is only needed when publishing to GitHub."
  Pop $0

  ${NSD_CreateCheckbox} 0 62u 100% 12u "Create a desktop shortcut"
  Pop $OMB_ShortcutCheckbox
  ${If} $OMB_CreateDesktopShortcutState == ""
    StrCpy $OMB_CreateDesktopShortcutState ${BST_CHECKED}
  ${EndIf}
  ${If} $OMB_CreateDesktopShortcutState == ${BST_CHECKED}
    ${NSD_Check} $OMB_ShortcutCheckbox
  ${EndIf}

  ${NSD_CreateCheckbox} 0 82u 100% 24u "Check publishing tools and install Git for Windows if Git/Git Credential Manager is missing"
  Pop $OMB_PublishingToolsCheckbox
  ${If} $OMB_InstallPublishingToolsState == ""
    StrCpy $OMB_InstallPublishingToolsState ${BST_CHECKED}
  ${EndIf}
  ${If} $OMB_InstallPublishingToolsState == ${BST_CHECKED}
    ${NSD_Check} $OMB_PublishingToolsCheckbox
  ${EndIf}

  ${NSD_CreateLabel} 0 114u 100% 38u "Existing shared tools are not uninstalled silently. If a compatible tool is already available, setup skips it. If Git is missing or unusable, setup will try to install Git for Windows side-by-side using Windows Package Manager."
  Pop $0

  nsDialogs::Show
FunctionEnd

Function OMBToolsPageLeave
  ${NSD_GetState} $OMB_ShortcutCheckbox $OMB_CreateDesktopShortcutState
  ${NSD_GetState} $OMB_PublishingToolsCheckbox $OMB_InstallPublishingToolsState
FunctionEnd

Function OMBCheckGitAvailable
  StrCpy $R9 "0"
  IfFileExists "$PROGRAMFILES64\Git\cmd\git.exe" 0 +2
    StrCpy $R9 "1"
  IfFileExists "$PROGRAMFILES\Git\cmd\git.exe" 0 +2
    StrCpy $R9 "1"
  IfFileExists "$PROGRAMFILES32\Git\cmd\git.exe" 0 +2
    StrCpy $R9 "1"
  IfFileExists "$LOCALAPPDATA\Programs\Git\cmd\git.exe" 0 +2
    StrCpy $R9 "1"

  ${If} $R9 == "0"
    nsExec::ExecToStack 'cmd /c git --version'
    Pop $0
    Pop $1
    ${If} $0 == 0
      StrCpy $R9 "1"
    ${EndIf}
  ${EndIf}
  Push $R9
FunctionEnd

Function OMBCheckGitCredentialManagerAvailable
  nsExec::ExecToStack 'cmd /c git credential-manager --version'
  Pop $0
  Pop $1
  ${If} $0 == 0
    Push "1"
  ${Else}
    Push "0"
  ${EndIf}
FunctionEnd

Function OMBInstallGitIfNeeded
  Call OMBCheckGitAvailable
  Pop $R9
  Call OMBCheckGitCredentialManagerAvailable
  Pop $R8

  ${If} $R9 == "1"
  ${AndIf} $R8 == "1"
    DetailPrint "Git for Windows and Git Credential Manager were found. Skipping publishing tool installation."
    Return
  ${EndIf}

  DetailPrint "Publishing tools are missing or incomplete. Checking Windows Package Manager."
  nsExec::ExecToStack 'where.exe winget'
  Pop $0
  Pop $1
  ${If} $0 != 0
    MessageBox MB_OK|MB_ICONINFORMATION "OMB Portfolio Builder was installed, but Git for Windows was not found and Windows Package Manager is unavailable. Open Publishing target > Install Git inside the app, or install Git for Windows with Git Credential Manager from https://git-scm.com/download/win."
    Return
  ${EndIf}

  DetailPrint "Installing or repairing Git for Windows. This can take several minutes."
  ExecWait 'winget install --id Git.Git -e --source winget --accept-source-agreements --accept-package-agreements' $0
  ${If} $0 != 0
    MessageBox MB_OK|MB_ICONINFORMATION "OMB Portfolio Builder was installed, but Git for Windows setup did not complete. Open Publishing target > Install Git inside the app when you are ready to publish."
  ${Else}
    DetailPrint "Git for Windows setup completed."
  ${EndIf}
FunctionEnd

!macro customInit
  StrCpy $OMB_CreateDesktopShortcutState ${BST_CHECKED}
  StrCpy $OMB_InstallPublishingToolsState ${BST_CHECKED}
!macroend

!macro customPageAfterChangeDir
  Page custom OMBToolsPageCreate OMBToolsPageLeave
!macroend

!macro customInstall
  ${If} $OMB_CreateDesktopShortcutState != ${BST_CHECKED}
    Delete "$newDesktopLink"
    DetailPrint "Desktop shortcut removed because it was not selected."
  ${EndIf}

  ${If} $OMB_InstallPublishingToolsState == ${BST_CHECKED}
    Call OMBInstallGitIfNeeded
  ${Else}
    DetailPrint "Publishing tool installation was skipped by the user."
  ${EndIf}
!macroend
!endif

!ifdef BUILD_UNINSTALLER
Var OMB_UninstallDialog

Function OMBUninstallPageCreate
  nsDialogs::Create 1018
  Pop $OMB_UninstallDialog
  ${If} $OMB_UninstallDialog == error
    Abort
  ${EndIf}

  ${NSD_CreateLabel} 0 0 100% 12u "Uninstall OMB Portfolio Builder"
  Pop $0

  ${NSD_CreateLabel} 0 20u 100% 90u "Uninstall will remove:$\r$\n$\r$\n- OMB Portfolio Builder application files$\r$\n- OMB Portfolio Builder shortcuts$\r$\n- Local app data created by this application when Windows requests app-data cleanup$\r$\n$\r$\nUninstall will not silently remove shared tools such as Git for Windows, Node.js, pnpm, browsers, or your Git repositories."
  Pop $0

  nsDialogs::Show
FunctionEnd

!macro customUnWelcomePage
  Page custom OMBUninstallPageCreate
!macroend
!endif
