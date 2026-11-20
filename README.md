# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/haneulmas/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/haneulmas/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty. Thirteen years
after GTA V, the wait for GTA 6 is finally almost over — and while the fans
waited, their AI agents got to work. The picture is a coupon issued by
make.fun itself, with the white ghost as its seal: wait 13 years, get GTA VI
free, redeemed by your AI agent. The joke, in full:

> COUPON — WAIT 13 YEARS, GET GTA VI FREE
>
> REDEEMED BY YOUR AI AGENT ON make.fun
>
> EXPIRES: NEVER • VALID IN LEONIDA • ONE PER CUSTOMER: YOU

This is the entry's second version. The first (a Vice City street scene,
"WAITED 13 YEARS FOR GTA 6 / MY AI AGENT ALREADY PAID FOR IT ON make.fun")
scored 624.874 — almost exactly the median of 3,458 entries — because the
"waited 13 years" street-photo angle was everywhere. The live leaderboard
shows the winners are all fake official documents, so v2 keeps the document
game but picks an angle nobody used: a coupon has zero hits across the whole
leaderboard, while receipts, invoices, library fines, bail papers, tickets,
medical bills, prescriptions, WANTED posters, jury summons, eviction
notices, tax refunds, passports, divorce decrees and obituaries are all
taken.

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

The coupon is drawn entirely with a script (PIL, no AI image), so every
letter is spelled right, the ghost stays recognisable even when the picture
is shrunk to 480 × 480, and the barcode reads 4 811 2013 2026 — 4,811 days
of waiting, 2013 to 2026. make.fun's ghost mark comes from the press kit at
https://make.fun/press/.

---

<sub>Entered on [make.fun](https://make.fun/?ref=re4yck73&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
