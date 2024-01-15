# embulk

## テスト動作

### サンプルファイルの作成
```
embulk example sample
```

### 設定ファイルの作成
```
embulk guess test/seed.yml -o config.yml
```

### ドライラン
```
embulk preview config.yml
```

### ファイルの実行
```
embulk run config.yml
```
