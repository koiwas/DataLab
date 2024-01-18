# digdag

## 基本操作

### プロジェクトの作成
プロジェクトを新規作成(既存も可)
```
digdag init {project-name}
```

### ワークフローの実行(ローカル)
```
cd {project-name}
```
```
digdag run {wfname} --session "yyyy-MM-dd HH:mm:SS"
```

### プロジェクトを登録
```
digdag push {project-name} -e localhost:65432
```

### シークレットを登録
```
digdag secrets --project {project-name} --set pg.password={password} -e localhost:65432
```

### ワークフローの実行（サーバー）
```
digdag start {project-name} {wfname} --session "yyyy-MM-dd HH:mm:SS" -e localhost:65432
```

### ワークフローの確認
```
digdag workflows {project-name}
```
