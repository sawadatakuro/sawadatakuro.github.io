# Takuro Sawada — Portfolio Site

GitHub Pages で公開する静的サイトです。サーバー不要・無料で動きます。

## フォルダ構成

```
site/
├─ index.html                ← 仕組み（基本さわらない）
├─ data.js                   ← ★内容はここだけ編集すればOK★
├─ README.md                 ← この説明
└─ images/
   └─ fluid-vessel/          ← 作品ごとに写真フォルダ
      ├─ 00-hero.jpg         ← トップの背景写真
      ├─ 01-entrance.jpg
      ├─ ...
      └─ 15-plan.jpg
```

## よくある更新

### 文章を直す
`data.js` を開き、直したい文の `"..."` の中身を書き換えて保存。

### 写真を差し替える
`images/fluid-vessel/` の中の写真を、**同じファイル名**で新しい写真に上書き。
（名前を変えたい場合は、写真を入れてから `data.js` の該当する `src:` の名前も直す）

### 写真を追加する
1. 写真を `images/fluid-vessel/` に入れる（例 `16-new.jpg`）
2. `data.js` の該当する章の `images: [ ... ]` に1行足す:
   ```js
   { src: "images/fluid-vessel/16-new.jpg", capEn: "English caption.", capJa: "日本語キャプション。" },
   ```
   ※ 横長で大きく見せたい写真は末尾に `, wide: true` を足す

### 作品を追加する
`data.js` の `WORKS` の中の、最後の `}` のあとにカンマを打ち、
既存の `{ ... }` をまるごとコピーして中身を書き換える。
写真は `images/新しい作品名/` フォルダを作って入れる。

## 写真のサイズについて
- 長辺 2000px 程度、JPEG・80〜85%品質が目安（1枚 100〜200KB）
- 大きすぎると表示が遅くなるので、アップ前に縮小推奨

## 公開手順（初回のみ）
1. GitHub で新規リポジトリを作成（例 `takurosawada`）
2. この `site/` の中身をすべてアップロード（`index.html` がトップに来るように）
3. リポジトリの Settings → Pages → Branch を `main` / `root` に設定して保存
4. 数分後、`https://ユーザー名.github.io/takurosawada/` で公開される

## 独自ドメイン（takurosawada.com など）
Settings → Pages → Custom domain にドメインを入力し、
ドメイン会社側で GitHub の指定する DNS を設定すれば独自 URL で公開できます。

## 更新の反映
ファイルを GitHub 上で編集して保存（Commit）すると、数分で自動的にサイトへ反映されます。
（GitHub の画面上で直接ファイルを編集でき、スマホからも可能）
