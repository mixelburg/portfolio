FROM node:21-slim

WORKDIR /app
ENV NODE_ENV production
EXPOSE 80

RUN apt update
RUN apt install git curl unzip lsof -y

RUN curl -fsSL https://bun.sh/install | bash

COPY bootstrap.sh .

CMD ["./bootstrap.sh"]




