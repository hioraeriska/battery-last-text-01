# The Battery's Last Text to Its Charger

[![make.fun](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![rank](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/hioraeriska/battery-last-text-01/rank.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![reward](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/hioraeriska/battery-last-text-01/reward.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)

One line of plain text: the phone battery's last text message to the charger
it waited for all day, for the
[make.fun bounty](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab).

## The line

> I waited all day at 2% while you charged the toothbrush. The toothbrush. Tell the Wi-Fi I loved it more than you. Goodbye.

## How it runs

`main.ts` writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (122 characters,
inside the 1–200 gate):

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```
