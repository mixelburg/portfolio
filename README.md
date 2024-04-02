


```shell
docker buildx build --platform linux/amd64 -t portfolio .
```

```shell
docker run -p 80:80 -p 443:443 portfolio
```

```shell
docker save -o portfolio.tar portfolio
```

```shell
sudo k3s ctr images import portfolio.tar
```

