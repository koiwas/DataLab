-- for digdag
CREATE DATABASE digdag;
CREATE USER digdag WITH PASSWORD 'password' SUPERUSER;
GRANT ALL PRIVILEGES ON DATABASE digdag TO digdag;

-- for metabase
CREATE DATABASE metabase;
CREATE USER metabase WITH PASSWORD 'password' SUPERUSER;
GRANT ALL PRIVILEGES ON DATABASE metabase TO metabase;

-- for detasource
CREATE DATABASE detasource;
CREATE USER detasource WITH PASSWORD 'password' SUPERUSER;
GRANT ALL PRIVILEGES ON DATABASE detasource TO detasource;

\c detasource

CREATE TABLE IF NOT EXISTS EMPLOYEE (
  EMPLOYEE_ID VARCHAR(10) NOT NULL PRIMARY KEY,
  EMPLOYEE_NAME VARCHAR(256) NOT NULL,
  GENDER VARCHAR(256) NOT NULL,
  CREATE_AT TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO EMPLOYEE (EMPLOYEE_ID, EMPLOYEE_NAME, GENDER) VALUES ('dummy', 'ダミー', 'FEMALE');