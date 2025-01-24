


```shell
sudo certbot -d kroha.dev --manual --preferred-challenges dns certonly

sudo docker build -t portfolio .
sudo docker buildx build --platform linux/amd64 -t portfolio .
```

```shell
sudo scp ./portfolio.tar  admin@192.168.1.168:/home/admin/
```

```shell
sudo docker save -o portfolio.tar portfolio
```

