cd ../
write-host "TRY COPYING > './tmp/sip.vscode' to 'C:\\Users\\$((Get-LocalUser)[((Get-LocalUser).count)-1])\\.vscode\\extensions'"
Copy "./tmp/sip.vscode" "C:\\Users\\$((Get-LocalUser)[((Get-LocalUser).count)-1])\\.vscode\\extensions" -Recurse
Pause