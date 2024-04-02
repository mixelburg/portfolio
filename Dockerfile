FROM node:21-slim

WORKDIR /app
ENV NODE_ENV production
EXPOSE 4444

RUN apt update
RUN apt install git -y
RUN apt install curl unzip -y
RUN apt install curl lsof -y

RUN curl -fsSL https://bun.sh/install | bash


COPY bootstrap.sh .

CMD ["./bootstrap.sh"]




