# docker

## Register

https://hub.docker.com/

## 基本操作

### イメージ一覧

#### docker
```
docker images
```

#### docker-compose
```
docker-compose images
```

### コンテナ一覧

#### docker
```
docker ps -a
```

#### docker-compose
```
docker-compose ps
```

### イメージのbuild

#### docker
`--no-cache`でキャッシュを無視
```
docker build -t {image:tag} .
```

#### docker-compose
`--no-cache`でキャッシュを無視
```
docker-compose build
```

### コンテナの起動

#### docker
```
docker run -it --name {name} {image:tag} bash
```

#### docker-compose
`-d`でdetached mode, `--build`で再ビルド
```
docker-compose up
```

### コンテナの操作

#### docker
```
docker exec -it {name} bash
```

#### docker-compose
```
docker-compose exec {service} bash
```

### コンテナの停止

#### docker
```
docker stop {name}
```

#### docker-compose
```
docker-compose stop {service}
```

### コンテナの削除

#### docker
```
docker rm {name}
```

#### docker-compose
```
docker-compose down {service}
```

### Dockerオブジェクトの削除
```
docker system prune
```
