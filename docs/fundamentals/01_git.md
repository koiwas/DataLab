# git

## Register
### Githubに登録
Username, Email, Passwordを入力

[GitHub Japan](https://github.co.jp/)

### Githubの設定

[2要素認証](https://docs.github.com/ja/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication) ※リカバリーコードの保存を忘れずに！

[SSHキーを作成](https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

[SSHキーを登録](https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

[ユーザ名を登録](https://docs.github.com/ja/get-started/getting-started-with-git/setting-your-username-in-git)

[コメットメールアドレスを登録](https://docs.github.com/ja/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)

### 設定確認用コマンド
`git config --global --list`

## Link

### Emoji prefix

https://goodpatch.com/blog/beautiful-commits-with-emojis

### English commit message

https://qiita.com/shikichee/items/a5f922a3ef3aa58a1839

## 基本操作1

### clone
リモートリポをローカルに複製する
```
git clone {remote-url}
```
### init
リポジトリを新規作成(既存も可)
```
git init {repo-name}
```

### リモートリポの確認

```
git remote -v
```

### ブランチの確認

```
git branch
```

### ブランチの作成と切替
```
git switch -c {branch-name}
```

### ステージング

```
git add {file-name}
```

### コミット

```
git commit -m "{message}"
```

### ステータス確認

```
git status
```

### ログ確認

```
git log --oneline
```

### プル

```
git pull origin {branch-name}
```

### プッシュ

```
git push origin {branch-name}
```

### マージ

```
git merge {branch-name}
```

## 基本操作2

### フェッチ

```
git fetch {branch-name}
```

### リモート追跡ブランチに切替
```
git checkout origin/main
```

### ブランチの削除

```
git branch -d {branch-name}
```

### リモート追跡ブランチの削除

```
git fetch --prune
```

### ブランチ名の変更

```
git branch -m {branch-name} {branch-name}
```

### ファイル名の変更
tracking fileのみ
```
git mv {file-name} {new-file-name}
```

### ファイルの削除
staging file不可
```
git rm {file-name}
```

## マージについて

### マージの種類
- Fast forward

    merge先に変更がなくmerge元の内容を直線的に反映する

- Automatic merge

    merge先とmerge元のコミット間に同一箇所の変更がない(自動で対処)

- Merge conflict

    merge先とmerge元とのコミット間に同一箇所の変更がある(手動で対処)
