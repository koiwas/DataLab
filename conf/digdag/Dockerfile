FROM openjdk:8

ENV DIGDAG_VERSION 0.10.4

ENV EMBULK_VERSION 0.9.24

# Install didag and embulk
RUN curl -o /usr/local/bin/digdag --create-dirs -L "https://dl.digdag.io/digdag-${DIGDAG_VERSION}" && \
    chmod +x /usr/local/bin/digdag

RUN curl -o /usr/local/bin/embulk --create-dirs -L "https://dl.embulk.org/embulk-${EMBULK_VERSION}.jar" && \
    chmod +x /usr/local/bin/embulk

RUN embulk gem install jruby-openssl -v 0.10.4 && \
    embulk gem install embulk-input-postgresql && \
    embulk gem install embulk-output-postgresql && \
    embulk gem install embulk-output-parquet

# Install python
RUN apt-get update && \
    apt-get install -y python3 python3-pip && \
    ln -s /usr/bin/python3 /usr/bin/python

WORKDIR /workspace

ENTRYPOINT ["java", "-jar", "/usr/local/bin/digdag", "server", "--config", "/etc/digdag/server.properties"]
