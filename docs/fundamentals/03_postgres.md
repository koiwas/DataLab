# postgres

## Link

### pgAdmin4の使い方
https://itsakura.com/pgadmin4-db-create

## psql基本操作

### postgresにログイン
```
psql -U {username} -d {dbname}
```

### postgresからログアウト
```
\q
```

### DB一覧を表示
```
\l
```

### DBに接続
```
\c {dbname} {username}
```

### その他

#### スキーマ一覧を表示
```
\dn
```

#### テーブル一覧を表示
```
\dt
```

#### ユーザ一覧を表示
```
\du
```

## SQL基本操作

### DB表示
```
SELECT current_database();
```

### スキーマ表示
```
SELECT current_schema();
```

### ユーザ表示
```
SELECT current_user;
```

### スキーマ選択パスを設定
```
SET search_path = {schemaname};
```
