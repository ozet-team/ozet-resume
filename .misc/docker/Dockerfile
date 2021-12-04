FROM node:16.13.0

LABEL maintainer="ozetteam@gmail.com"
LABEL title="web"
LABEL version="1.0"

# Install deps
RUN yarn global add serve

# Init project
COPY . /app

WORKDIR /app

ENV SKIP_PREFLIGHT_CHECK=true
ENV CI=false

RUN yarn
RUN yarn build

EXPOSE 5030

CMD serve -s build -p 5030
