CREATE TABLE IF NOT EXISTS client_user (
                                        id SERIAL PRIMARY KEY,
                                        first_name VARCHAR(32),
                                        last_name VARCHAR(32),
                                        email_address VARCHAR(64),
                                        password VARCHAR(64)
);


CREATE TABLE IF NOT EXISTS employee_user (
                                         id SERIAL PRIMARY KEY,
                                         first_name VARCHAR(32),
                                         last_name VARCHAR(32),
                                         email_address VARCHAR(64),
                                         password VARCHAR(64)
);



CREATE TABLE IF NOT EXISTS all_users (
                                           id SERIAL PRIMARY KEY,
                                           first_name VARCHAR(32),
                                           last_name VARCHAR(32),
                                           email_address VARCHAR(64),
                                           password VARCHAR(64)
);



CREATE TABLE IF NOT EXISTS appointment_type (
                                         id SERIAL PRIMARY KEY,
                                         type_name VARCHAR(64),
                                         duration INT,
                                         price INT

);

CREATE TABLE IF NOT EXISTS appointment (
                                         id SERIAL PRIMARY KEY,
                                         client_user_id INT NOT NULL REFERENCES  client_user (id),
                                         type_id INT NOT NULL REFERENCES  appointment_type  (id),
                                         app_date VARCHAR(64),
                                         held BOOLEAN,
                                         discount INT,
                                         addedDiscount BOOLEAN

);

CREATE TABLE IF NOT EXISTS review (
                                         id SERIAL PRIMARY KEY,
                                         client_user_id INT NOT NULL REFERENCES  client_user (id),
                                         textReview VARCHAR(64),
                                         state VARCHAR(64)
);