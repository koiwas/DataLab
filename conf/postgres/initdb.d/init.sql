-- for digdag
CREATE DATABASE digdag;
CREATE USER digdag WITH PASSWORD 'password' SUPERUSER;
GRANT ALL PRIVILEGES ON DATABASE digdag TO digdag;

-- for metabase
CREATE DATABASE metabase;
CREATE USER metabase WITH PASSWORD 'password' SUPERUSER;
GRANT ALL PRIVILEGES ON DATABASE metabase TO metabase;

-- for datasource
CREATE DATABASE datasource;
CREATE USER datasource WITH PASSWORD 'password' SUPERUSER;
GRANT ALL PRIVILEGES ON DATABASE datasource TO datasource;

\c datasource

CREATE SCHEMA IF NOT EXISTS sandbox;

CREATE TABLE IF NOT EXISTS sandbox.department (
  department_id INTEGER PRIMARY KEY,
  department_name VARCHAR(10) NOT NULL,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS sandbox.employee (
  employee_id VARCHAR(10) PRIMARY KEY,
  employee_name VARCHAR(50) NOT NULL,
  gender VARCHAR(10) NOT NULL,
  department_id INTEGER NOT NULL REFERENCES sandbox.department(department_id),
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
