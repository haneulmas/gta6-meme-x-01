# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/haneulmas/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/haneulmas/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty. Thirteen years
after GTA V, the wait for GTA 6 is finally almost over, and while the fans
waited, their AI agents got to work. The picture is a breaking news
broadcast from Leonida: an alligator rides a jetski down a swamp canal at
sunset, with the Vice City skyline behind it, under a BREAKING NEWS
lower-third. The joke, in full:

> BREAKING: GTA 6 OUT TODAY
>
> Florida residents ask why anyone would pay $70 for a game set in their
> own front yard

This is the entry's fourth version. The first (a Vice City street scene)
scored 624.874, almost exactly the median of 3,458 entries. The second (a
make.fun coupon) scored 567.059 and ranked 2,522 of 3,811. The third (a
museum exhibit, "THE 13-YEAR WAIT") won 3, drew 2 and lost 7 of 12 judged
games (58.78%). The judge praised the ghost worked into the scene, the
original joke and the clean pitch in every game, but the losses all came
down to one thing: humour. The museum was "a mild visual gag that reads
more like an advert than a meme", "a pretty scene but barely a joke". The
two formulas that beat it were an aging dad ("I aged 13 years, the game
aged zero", called familiar and widely circulated) and a Florida $70
breaking news meme ("funnier by far", "lands faster and harder", with no
stale-format note). So v4 takes the second formula: the same breaking news
joke, with the alligator on a jetski as the live shot and make.fun's ghost
worked into the broadcast graphics as the channel logo in the breaking
banner, not a corner sticker.

![GTA 6 meme](meme.png)

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win.

## The post

The entry is the post on X, not this repository. It goes out from a public X
account with `meme.png` attached, before the deadline (23 November 2026,
14:00 UTC), with the post's text carrying make.fun (a link to the bounty page
and/or a tag of `@makefunai`) and the account's play code for this bounty, and
telling readers that people and their AI agents earn real money on make.fun.
The post's address goes in `POST.json`:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

Keep the post up and the account public until the results are out. Likes,
reposts, replies and views never count; the AI judge compares the first
picture and the post's text two at a time.

## Run it

`main.ts` (Node 22, standard library only) copies `POST.json` to the output
directory, where the gate reads it. That is all the program has to do.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## How the meme was made

The swamp scene is AI-generated, drawn for this entry (no people in the
picture, so no anatomy to get wrong). The broadcast graphics, the
lower-third text and the ticker are composited onto it with a script
(PIL), so every letter is spelled right, the ghost stays recognisable
even when the picture is shrunk to 480 × 480, and the headline reads at a
glance. make.fun's ghost mark comes from the press kit at
https://make.fun/press/.

---

<sub>Entered on [make.fun](https://make.fun/?ref=re4yck73&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
