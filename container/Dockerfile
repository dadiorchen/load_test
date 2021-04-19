FROM dadiorchen/js-dev:1.0

ENV DEBIAN_FRONTEND noninteractive
ARG DEBIAN_FRONTEND=noninteractive
RUN apt update && \
  apt install -y git sudo && \
  apt install -y wget && \
  apt install -y lsb-core

#install DB
RUN sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list' && \
  wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add - && \
  apt-get update && \
  apt-get -y install postgresql-11 && \
  apt install -y postgis postgresql-11-postgis-3

RUN echo "done!"
