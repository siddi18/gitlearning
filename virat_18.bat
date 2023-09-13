@echo off
:: Turn off the screen
powershell (Add-Type '[DllImport("user32.dll")]^public static extern int SendMessage(int hWnd, int hMsg, int wParam, int lParam);' -Name a -Pas)::SendMessage(-1,0x0112,0xF170,2)
:: Wait for 60 seconds
timeout /t 60
:: Turn the screen back on (simulate a keypress)
powershell (Add-Type '[DllImport("user32.dll")]^public static extern void keybd_event(byte bVk, byte bScan, uint dwFlags, int dwExtraInfo);' -Name a -Pas)::keybd_event(0, 0, 0, 0)

