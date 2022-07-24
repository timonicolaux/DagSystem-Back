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
    `date_de_creation` DATE NOT NULL,
    `application_id` INT NOT NULL,
    FOREIGN KEY (`application_id`) REFERENCES `application`(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO dagsystem.application (nom,numero_de_version) VALUES
	 ('Application 1',25881),
	 ('Application 2',12598),
	 ('Application 3',44125);

INSERT INTO dagsystem.course (nom,date_de_creation,application_id) VALUES
	 ('Trail de l''aigle','1960-02-01',3),
	 ('Trail du moineau','1988-05-01',1),
	 ('Trail du bison','2008-10-01',2),
	 ('Trail des remparts','2012-11-24',2),
	 ('Trail de l''étendard','1999-03-21',1);