DROP TABLE IF EXISTS `application`;
DROP TABLE IF EXISTS `course`;

CREATE TABLE `application` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `nom` VARCHAR(50) NOT NULL,
    `numero_de_version` INT NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE `course` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `nom` VARCHAR(50) NOT NULL,
    `date_de_creation` DATE,
    `application_id` INT NOT NULL,
    FOREIGN KEY (application_id) REFERENCES application(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;