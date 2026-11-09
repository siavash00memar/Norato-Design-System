# Analysis — Command Palette keyboard recheck

The live accessibility tree confirms Ctrl+K opens the dialog and moves focus to the labelled combobox. End selected the last enabled item; ArrowUp selected the preceding item; Home selected the first item. With Settings disabled, ArrowDown skipped it and selected Projects. Enter emitted the visible selected-command status and closed the dialog; Escape also closed it and restored focus to the trigger. Persian query «تنظیمات» left only the matching result, and query `zzq` produced the no-results message. Reload restored the playground defaults.

This does not establish same-viewport visual parity, mobile bounds, outside-dismiss/Tab, shortcut repeat/IME/editable-target behavior, screen-reader output or result-cap behavior.
