CREATE TABLE Users(
    Userid INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    age INT(2) NOT NULL,
    PRIMARY KEY (Userid) 
);
INSERT INTO Users(name, email, age) VALUES (
    "Caua Marin", "Marin@gmail.com", 19
);