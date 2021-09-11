
DROP DATABASE IF EXISTS MasterPrijava;
CREATE DATABASE MasterPrijava;
USE MasterPrijava;

CREATE TABLE IF NOT EXISTS Korisnici (
	Id	INTEGER,
	Ime	VARCHAR(50),
	KorisnickoIme	VARCHAR(20),
    Lozinka VARCHAR(32),
    Tip VARCHAR(20),
	PRIMARY KEY(Id)
    
);

CREATE TABLE IF NOT EXISTS Modul (
	Id	INTEGER,
	Naziv	VARCHAR(400),
	RukovodiocId	INTEGER,
    FOREIGN KEY(RukovodiocId) REFERENCES Korisnici(Id),
	PRIMARY KEY(Id)
);

CREATE TABLE IF NOT EXISTS Prijava (
	Id	INTEGER,
	Naslov	VARCHAR(100),
	Cilj	VARCHAR(500),
	Sadrzaj	VARCHAR(500),
    KandidatId INTEGER,
    MentorId INTEGER,
    ModulId INTEGER,
    `Status` VARCHAR(200),
	FOREIGN KEY(KandidatId) REFERENCES Korisnici(Id),
    FOREIGN KEY(MentorId) REFERENCES Korisnici(Id),
    FOREIGN KEY(ModulId) REFERENCES Modul(Id),
	PRIMARY KEY(Id)
);



CREATE TABLE IF NOT EXISTS IstorijaPrijave (
	Id	INTEGER,
	Komentar VARCHAR(500),
	Datum	INTEGER,
    UpucujeId INTEGER,
    UpucenId INTEGER,
	FOREIGN KEY(UpucujeId) REFERENCES Korisnici(Id),
    FOREIGN KEY(UpucenId) REFERENCES Korisnici(Id),
	PRIMARY KEY(Id)
);



INSERT INTO Korisnici (Id,Ime,KorisnickoIme,Lozinka,Tip) VALUES (1,'Pera Peric','Perica','titanik1','student');
INSERT INTO Korisnici (Id,Ime,KorisnickoIme,Lozinka,Tip) VALUES (2,'Marko Markovic','Mare','titanik2','student');
INSERT INTO Korisnici (Id,Ime,KorisnickoIme,Lozinka,Tip) VALUES (3,'Marija Marijanovic','Mara','titanik3','mentor');
INSERT INTO Korisnici (Id,Ime,KorisnickoIme,Lozinka,Tip) VALUES (4,'Ivana Ivanovic','Ivanka','titanik4','mentor');
INSERT INTO Korisnici (Id,Ime,KorisnickoIme,Lozinka,Tip) VALUES (5,'Tamara Tanaskovic','Tasa','titanik5','rukovodilac');
INSERT INTO Korisnici (Id,Ime,KorisnickoIme,Lozinka,Tip) VALUES (6,'Milos Milosevic','Misa','titanik6','rukovodilac');
INSERT INTO Korisnici (Id,Ime,KorisnickoIme,Lozinka,Tip) VALUES (7,'Mitar Mitrovic','Mita','titanik7','studentska sluzba');
INSERT INTO Korisnici (Id,Ime,KorisnickoIme,Lozinka,Tip) VALUES (8,'Milica Micic','Mica','titanik8','studentska sluzba');
INSERT INTO Korisnici (Id,Ime,KorisnickoIme,Lozinka,Tip) VALUES (9,'Sara Saric','Sari','titanik9','rukovodstvo');
INSERT INTO Korisnici (Id,Ime,KorisnickoIme,Lozinka,Tip) VALUES (10,'Marijana Marijanovic','Maja','titanik10','rukovodstvo');

INSERT INTO Modul (Id,Naziv,RukovodiocId) VALUES (1,'Audio i video tehnologije',5);
INSERT INTO Modul (Id,Naziv,RukovodiocId) VALUES (2,'Elektroenergetski sistemi',6);
INSERT INTO Modul (Id,Naziv,RukovodiocId) VALUES (3,'Informaciono komunikacione tehnologije',5);

INSERT INTO Prijava (Id,Naslov,Cilj,Sadrzaj,KandidatId,MentorId,ModulId) VALUES (1,'Angular primena na fakultetu','Bla bla nesto nesto','sadrzaj primer',2,3,2);
INSERT INTO Prijava (Id,Naslov,Cilj,Sadrzaj,KandidatId,MentorId,ModulId) VALUES (2,'Mikrotalasi primena','Bla bla nestoooo nesto','sadrzaaaj primeriii',1,4,3);





