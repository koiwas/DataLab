FROM jupyter/pyspark-notebook:latest

USER root

RUN wget https://jdbc.postgresql.org/download/postgresql-42.2.5.jar -O /usr/local/spark/jars/postgresql-42.2.5.jar

USER $NB_UID
