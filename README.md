# DataLab

TBU...

## Setup

### terminal1

***for operations***

### terminal2

```
docker-compose up
```

### terminal3

```
docker-compose exec bash
```

### web browser

digdag server
```
localhost:65432
```

JupyterLab
```
localhost:8888
```

metabase
```
localhost:3000
```

### pgadmin4

```
- Name: DataLab
- Host/Address: localhost
- Port: 5432
- Maintenance postgres
- Username: postgres
- Password: password
```

## Sample

### copy sample scripts to workspace on terminal1

```
cp -r docs/scripts/sample data/digdag/workspace
```

### operate digdag on terminal3

```
cd sample/workflow
```

```
digdag push sample -e localhost:65432
```

```
digdag secrets --project sample --set pg.password=password -e localhost:65432
```

```
digdag start sample import_data_to_pg --session "yyyy-MM-dd HH:mm:SS"
```


## Cleaning up

```
docker system prune
```