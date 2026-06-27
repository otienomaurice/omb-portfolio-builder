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

Function OMBCheckKnownBuilderWorkspace
  IfFileExists "$DOCUMENTS\OMB\desktop-builder\package.json" 0 +3
    MessageBox MB_OK|MB_ICONSTOP "Setup found an existing local OMB Portfolio Builder workspace:$\r$\n$\r$\n$DOCUMENTS\OMB\desktop-builder$\r$\n$\r$\nRemove, uninstall, or rename that copy before installing this release. This prevents an older working builder from staying on the machine beside the installed app."
    Quit

  IfFileExists "$PROFILE\OneDrive\Documents\OMB\desktop-builder\package.json" 0 +3
    MessageBox MB_OK|MB_ICONSTOP "Setup found an existing local OMB Portfolio Builder workspace:$\r$\n$\r$\n$PROFILE\OneDrive\Documents\OMB\desktop-builder$\r$\n$\r$\nRemove, uninstall, or rename that copy before installing this release. This prevents an older working builder from staying on the machine beside the installed app."
    Quit

  IfFileExists "$PROFILE\Documents\OMB\desktop-builder\package.json" 0 +3
    MessageBox MB_OK|MB_ICONSTOP "Setup found an existing local OMB Portfolio Builder workspace:$\r$\n$\r$\n$PROFILE\Documents\OMB\desktop-builder$\r$\n$\r$\nRemove, uninstall, or rename that copy before installing this release. This prevents an older working builder from staying on the machine beside the installed app."
    Quit

  IfFileExists "$DOCUMENTS\omb-portfolio-builder\package.json" 0 +3
    MessageBox MB_OK|MB_ICONSTOP "Setup found an existing OMB Portfolio Builder development copy:$\r$\n$\r$\n$DOCUMENTS\omb-portfolio-builder$\r$\n$\r$\nRemove, uninstall, or rename that copy before installing this release."
    Quit

  IfFileExists "$PROFILE\OneDrive\Documents\omb-portfolio-builder\package.json" 0 +3
    MessageBox MB_OK|MB_ICONSTOP "Setup found an existing OMB Portfolio Builder development copy:$\r$\n$\r$\n$PROFILE\OneDrive\Documents\omb-portfolio-builder$\r$\n$\r$\nRemove, uninstall, or rename that copy before installing this release."
    Quit
FunctionEnd

Function OMBWriteDuplicateScanScript
  InitPluginsDir
  FileOpen $0 "$PLUGINSDIR\omb-duplicate-scan.ps1" w
  FileWrite $0 "$$ErrorActionPreference = 'SilentlyContinue'$\r$\n"
  FileWrite $0 "$$hits = New-Object System.Collections.Generic.List[string]$\r$\n"
  FileWrite $0 "function Add-Hit([string]$$Kind, [string]$$Candidate) {$\r$\n"
  FileWrite $0 "  if ([string]::IsNullOrWhiteSpace($$Candidate)) { return }$\r$\n"
  FileWrite $0 "  try { $$resolved = (Resolve-Path -LiteralPath $$Candidate -ErrorAction Stop).Path } catch { $$resolved = $$Candidate }$\r$\n"
  FileWrite $0 "  if ($$resolved -match '\\\\OMB-Portfolio-Builder-Setup-[^\\\\]+\.exe$$') { return }$\r$\n"
  FileWrite $0 "  $$line = $$Kind + ' - ' + $$resolved$\r$\n"
  FileWrite $0 "  if (-not $$hits.Contains($$line)) { [void]$$hits.Add($$line) }$\r$\n"
  FileWrite $0 "}$\r$\n"
  FileWrite $0 "function Test-DesktopBuilder([string]$$Directory) {$\r$\n"
  FileWrite $0 "  if (-not (Test-Path -LiteralPath (Join-Path $$Directory 'package.json'))) { return $$false }$\r$\n"
  FileWrite $0 "  if (-not (Test-Path -LiteralPath (Join-Path $$Directory 'main.cjs'))) { return $$false }$\r$\n"
  FileWrite $0 "  if (-not (Test-Path -LiteralPath (Join-Path $$Directory 'builder-site'))) { return $$false }$\r$\n"
  FileWrite $0 "  try { $$packageText = Get-Content -LiteralPath (Join-Path $$Directory 'package.json') -Raw -ErrorAction Stop } catch { return $$false }$\r$\n"
  FileWrite $0 "  return $$packageText -match 'OMB Portfolio Builder|omb-portfolio-builder|portfoliobuilder'$\r$\n"
  FileWrite $0 "}$\r$\n"
  FileWrite $0 "function Should-SkipDirectory([string]$$Directory) {$\r$\n"
  FileWrite $0 "  $$name = Split-Path -Leaf $$Directory$\r$\n"
  FileWrite $0 "  if ($$name -in @('node_modules','.git','dist','.vs','$$Recycle.Bin','System Volume Information','WinSxS')) { return $$true }$\r$\n"
  FileWrite $0 "  if ($$Directory -match '\\\\Windows(\\\\|$$)') { return $$true }$\r$\n"
  FileWrite $0 "  return $$false$\r$\n"
  FileWrite $0 "}$\r$\n"
  FileWrite $0 "function Scan-Tree([string]$$Root) {$\r$\n"
  FileWrite $0 "  if (-not (Test-Path -LiteralPath $$Root)) { return }$\r$\n"
  FileWrite $0 "  $$stack = New-Object System.Collections.Generic.Stack[string]$\r$\n"
  FileWrite $0 "  $$stack.Push($$Root)$\r$\n"
  FileWrite $0 "  while ($$stack.Count -gt 0) {$\r$\n"
  FileWrite $0 "    $$dir = $$stack.Pop()$\r$\n"
  FileWrite $0 "    if (Should-SkipDirectory $$dir) { continue }$\r$\n"
  FileWrite $0 "    if ((Split-Path -Leaf $$dir) -ieq 'desktop-builder' -and (Test-DesktopBuilder $$dir)) { Add-Hit 'Local desktop-builder workspace' $$dir }$\r$\n"
  FileWrite $0 "    try { $$children = Get-ChildItem -LiteralPath $$dir -Force -ErrorAction Stop } catch { continue }$\r$\n"
  FileWrite $0 "    foreach ($$child in $$children) {$\r$\n"
  FileWrite $0 "      if ($$child.PSIsContainer) {$\r$\n"
  FileWrite $0 "        if (-not (Should-SkipDirectory $$child.FullName)) { $$stack.Push($$child.FullName) }$\r$\n"
  FileWrite $0 "      } else {$\r$\n"
  FileWrite $0 "        if ($$child.Name -ieq 'OMB Portfolio Builder.exe') { Add-Hit 'Installed app executable' $$child.FullName }$\r$\n"
  FileWrite $0 "        if ($$child.Name -like 'OMB-Portfolio-Builder-Portable-*.exe') { Add-Hit 'Portable app executable' $$child.FullName }$\r$\n"
  FileWrite $0 "      }$\r$\n"
  FileWrite $0 "    }$\r$\n"
  FileWrite $0 "  }$\r$\n"
  FileWrite $0 "}$\r$\n"
  FileWrite $0 "$$registryKeys = @('HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*','HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*')$\r$\n"
  FileWrite $0 "foreach ($$key in $$registryKeys) {$\r$\n"
  FileWrite $0 "  Get-ItemProperty $$key -ErrorAction SilentlyContinue | Where-Object { $$_.DisplayName -like 'OMB Portfolio Builder*' } | ForEach-Object {$\r$\n"
  FileWrite $0 "    if ($$_.InstallLocation) { Add-Hit 'Registered Windows installation' $$_.InstallLocation }$\r$\n"
  FileWrite $0 "    elseif ($$_.DisplayIcon) { Add-Hit 'Registered Windows installation' $$_.DisplayIcon }$\r$\n"
  FileWrite $0 "  }$\r$\n"
  FileWrite $0 "}$\r$\n"
  FileWrite $0 "$$roots = New-Object System.Collections.Generic.List[string]$\r$\n"
  FileWrite $0 "Get-CimInstance Win32_LogicalDisk -Filter 'DriveType=3' -ErrorAction SilentlyContinue | ForEach-Object { [void]$$roots.Add(($$_.DeviceID + '\')) }$\r$\n"
  FileWrite $0 "$$programFilesX86 = [Environment]::GetEnvironmentVariable('ProgramFiles(x86)')$\r$\n"
  FileWrite $0 "foreach ($$common in @($$env:ProgramFiles, $$programFilesX86, (Join-Path $$env:LOCALAPPDATA 'Programs'), $$env:USERPROFILE, (Join-Path $$env:PUBLIC 'Desktop'))) { if ($$common -and -not $$roots.Contains($$common)) { [void]$$roots.Add($$common) } }$\r$\n"
  FileWrite $0 "foreach ($$root in $$roots) { Scan-Tree $$root }$\r$\n"
  FileWrite $0 "$$unique = $$hits | Sort-Object -Unique$\r$\n"
  FileWrite $0 "if ($$unique.Count -gt 0) {$\r$\n"
  FileWrite $0 "  $$preview = $$unique | Select-Object -First 10$\r$\n"
  FileWrite $0 "  if ($$unique.Count -gt 10) { $$preview += ('... and ' + ($$unique.Count - 10) + ' more') }$\r$\n"
  FileWrite $0 "  Write-Output ($$preview -join [Environment]::NewLine)$\r$\n"
  FileWrite $0 "  exit 42$\r$\n"
  FileWrite $0 "}$\r$\n"
  FileWrite $0 "exit 0$\r$\n"
  FileClose $0
FunctionEnd

Function OMBScanForDuplicateBuilderCopies
  DetailPrint "Scanning this machine for existing OMB Portfolio Builder copies."
  Call OMBWriteDuplicateScanScript
  nsExec::ExecToStack 'powershell.exe -NoProfile -ExecutionPolicy Bypass -File "$PLUGINSDIR\omb-duplicate-scan.ps1"'
  Pop $R4
  Pop $R3

  ${If} $R4 == 42
    MessageBox MB_OK|MB_ICONSTOP "Setup found another OMB Portfolio Builder copy on this machine.$\r$\n$\r$\n$R3$\r$\n$\r$\nTo prevent duplicate installations and stale builder features, remove, uninstall, or rename the existing copy first, then run this installer again."
    Quit
  ${ElseIf} $R4 != 0
    MessageBox MB_OK|MB_ICONSTOP "Setup could not complete the duplicate-installation scan. To avoid duplicate builder copies, setup will stop. Run the installer again as Administrator, or remove old OMB Portfolio Builder copies manually before installing."
    Quit
  ${EndIf}
FunctionEnd

Function OMBUninstallExistingInstallIfPresent
  StrCpy $R7 ""
  StrCpy $R6 ""
  StrCpy $R5 ""

  SetRegView 64
  ReadRegStr $R7 HKLM "Software\${APP_GUID}" InstallLocation
  ReadRegStr $R6 HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${UNINSTALL_APP_KEY}" DisplayVersion
  ReadRegStr $R5 HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${UNINSTALL_APP_KEY}" QuietUninstallString
  ${If} $R5 == ""
    ReadRegStr $R5 HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${UNINSTALL_APP_KEY}" UninstallString
  ${EndIf}
  ${If} $R7 == ""
    ReadRegStr $R7 HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${UNINSTALL_APP_KEY}" InstallLocation
  ${EndIf}

  ${If} $R7 == ""
    ReadRegStr $R7 HKCU "Software\${APP_GUID}" InstallLocation
    ReadRegStr $R6 HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\${UNINSTALL_APP_KEY}" DisplayVersion
    ReadRegStr $R5 HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\${UNINSTALL_APP_KEY}" QuietUninstallString
    ${If} $R5 == ""
      ReadRegStr $R5 HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\${UNINSTALL_APP_KEY}" UninstallString
    ${EndIf}
    ${If} $R7 == ""
      ReadRegStr $R7 HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\${UNINSTALL_APP_KEY}" InstallLocation
    ${EndIf}
  ${EndIf}

  ${If} $R7 == ""
    SetRegView 32
    ReadRegStr $R7 HKLM "Software\${APP_GUID}" InstallLocation
    ReadRegStr $R6 HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${UNINSTALL_APP_KEY}" DisplayVersion
    ReadRegStr $R5 HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${UNINSTALL_APP_KEY}" QuietUninstallString
    ${If} $R5 == ""
      ReadRegStr $R5 HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${UNINSTALL_APP_KEY}" UninstallString
    ${EndIf}
    ${If} $R7 == ""
      ReadRegStr $R7 HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${UNINSTALL_APP_KEY}" InstallLocation
    ${EndIf}
    SetRegView lastused
  ${EndIf}

  ${If} $R7 == ""
    IfFileExists "$PROGRAMFILES64\OMB Portfolio Builder\Uninstall OMB Portfolio Builder.exe" 0 +3
      StrCpy $R7 "$PROGRAMFILES64\OMB Portfolio Builder"
      StrCpy $R5 '"$PROGRAMFILES64\OMB Portfolio Builder\Uninstall OMB Portfolio Builder.exe" /S'
  ${EndIf}
  ${If} $R7 == ""
    IfFileExists "$PROGRAMFILES\OMB Portfolio Builder\Uninstall OMB Portfolio Builder.exe" 0 +3
      StrCpy $R7 "$PROGRAMFILES\OMB Portfolio Builder"
      StrCpy $R5 '"$PROGRAMFILES\OMB Portfolio Builder\Uninstall OMB Portfolio Builder.exe" /S'
  ${EndIf}
  ${If} $R7 == ""
    IfFileExists "$LOCALAPPDATA\Programs\OMB Portfolio Builder\Uninstall OMB Portfolio Builder.exe" 0 +3
      StrCpy $R7 "$LOCALAPPDATA\Programs\OMB Portfolio Builder"
      StrCpy $R5 '"$LOCALAPPDATA\Programs\OMB Portfolio Builder\Uninstall OMB Portfolio Builder.exe" /S'
  ${EndIf}

  ${If} $R7 != ""
    ${If} $R6 == ""
      StrCpy $R6 "an existing version"
    ${EndIf}
    IfSilent omb_existing_install_confirmed
    MessageBox MB_OKCANCEL|MB_ICONEXCLAMATION "OMB Portfolio Builder $R6 is already installed on this machine.$\r$\n$\r$\nInstalled location:$\r$\n$R7$\r$\n$\r$\nSetup will uninstall that copy first, then continue installing this version.$\r$\n$\r$\nClick OK to uninstall the existing copy, or Cancel to stop setup." IDOK omb_existing_install_confirmed
    Quit

    omb_existing_install_confirmed:
    ${If} $R5 == ""
      IfFileExists "$R7\Uninstall OMB Portfolio Builder.exe" 0 +2
        StrCpy $R5 '"$R7\Uninstall OMB Portfolio Builder.exe" /S'
    ${EndIf}
    ${If} $R5 == ""
      MessageBox MB_OK|MB_ICONSTOP "Setup could not find the existing uninstaller. Remove OMB Portfolio Builder from Windows Installed apps or Apps & features, then run this installer again."
      Quit
    ${EndIf}

    DetailPrint "Uninstalling existing OMB Portfolio Builder $R6 before installing this version."
    ExecWait '$R5' $R4
    ${If} $R4 != 0
      MessageBox MB_OK|MB_ICONSTOP "The existing OMB Portfolio Builder uninstall did not complete. Windows returned code $R4.$\r$\n$\r$\nRemove the existing version from Windows Installed apps or Apps & features, then run this installer again."
      Quit
    ${EndIf}
  ${EndIf}
FunctionEnd

!macro customInit
  Call OMBUninstallExistingInstallIfPresent
  Call OMBCheckKnownBuilderWorkspace
  Call OMBScanForDuplicateBuilderCopies
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
