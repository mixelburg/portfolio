FROM node:21-slim

WORKDIR /app
ENV NODE_ENV production
EXPOSE 443
EXPOSE 80

RUN apt update
RUN apt install git curl unzip lsof -y
RUN apt install nginx -y


RUN curl -fsSL https://bun.sh/install | bash



COPY nginx.conf /etc/nginx/nginx.conf
COPY .secret.cert.pem /cert.pem
COPY .secret.privkey.pem /privkey.pem

# run nginx in the background

COPY bootstrap.sh .

CMD ["./bootstrap.sh"]




