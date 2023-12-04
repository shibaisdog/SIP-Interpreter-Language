cd ../
write-host "----------TRY NPM MOUDLE INSTALL----------"
npm install -g commander inquirer ts-node chalk yarn path fs
write-host "--------------TRY CLI SETUP---------------"
npm i -g ./
write-host "-----------TRY COPYING SYNTAXES-----------"
write-host "USERNAME : $((Get-LocalUser)[((Get-LocalUser).count)-1])"
write-host "'./tmp/sip.vscode' to 'C:\\Users\\$((Get-LocalUser)[((Get-LocalUser).count)-1])\\.vscode\\extensions'"
Copy "./tmp/sip.vscode" "C:\\Users\\$((Get-LocalUser)[((Get-LocalUser).count)-1])\\.vscode\\extensions" -Recurse
Pause