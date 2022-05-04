create database outsourcing;

-- drop database outsourcing;

use outsourcing;

-- Creating tables
create table customer
(customerid int auto_increment,
cfname varchar(15) not null,
clname varchar(15) not null,
cbusinessname varchar(30) not null,
cphonenumber numeric(10) not null,
cemail varchar(50) not null,
cusername varchar(15) not null,
cpassword varchar(15) not null,
PRIMARY KEY(customerid));

create table manager
(managerid int auto_increment,
mfname varchar(15) not null,
mlname varchar(15) not null,
mphonenumber numeric(10) not null,
memail varchar(50) not null,
musername varchar(15) not null,
mpassword varchar(15) not null,
PRIMARY KEY(managerid));

create table rentalspace
(rentalid int auto_increment,
sqft int not null,
imagelink varchar(50) null default null,
minimumperiod varchar(40) default "12 Months",
maximumperiod varchar(40) default "12 Months",
monthlyrate int not null,
weeklyrate int not null,
locationdetail text default null,
nearbytenant text default null,
rscustomerid int null,
rsmanagerid int null,
PRIMARY KEY(rentalid),
foreign key(rscustomerid) references customer(customerid),
foreign key(rsmanagerid) references manager(managerid));

create table lease
(leaseid int auto_increment,
startdate date not null,
enddate date not null,
lrentalid int null,
lcustomerid int null,
PRIMARY KEY(leaseid),
foreign key(lrentalid) references rentalspace(rentalid),
foreign key(lcustomerid) references customer(customerid));

create table amenities
(rentalid int not null,
kitchen char(3) default 'no',
commerciallighting char(3) default 'no',
securitysystem char(3) default 'no',
internet char(3) default 'yes',
bathroom char(3) default 'no',
PRIMARY KEY(rentalid),
foreign key(rentalid) references rentalspace(rentalid));

create table rentalapplication
(applicationid int auto_increment,
daterequested datetime default current_timestamp,
approvalstatus varchar(10) default 'pending',
customernotes varchar(50) null default 'n/a',
rcustomerid int not null, 
rmanagerid int default null,
rentalid int not null,
startdate date not null,
enddate date not null,
primary key(applicationid),
foreign key(rcustomerid) references customer(customerid),
foreign key(rmanagerid) references manager(managerid),
foreign key(rentalid) references rentalspace(rentalid));

-- Filling sample data
INSERT INTO customer (cfname, clname, cbusinessname, cphonenumber, cemail, cusername, cpassword) VALUES ('Jackie','White','TIDE Market','1234567890','jackiewhite@gmail.com','jackiewhite','jw123');
INSERT INTO customer (cfname, clname, cbusinessname, cphonenumber, cemail, cusername, cpassword) VALUES ('Cary','Robbins','TIDE Market','2345678901','caryrobbinsr@gmail.com','caryrobbins','mb123');
INSERT INTO customer (cfname, clname, cbusinessname, cphonenumber, cemail, cusername, cpassword) VALUES ('Philip','Maldonado','TIDE Market','3456789012','philipmaldonado@gmail.com','philipmaldonado','pm123');
INSERT INTO customer (cfname, clname, cbusinessname, cphonenumber, cemail, cusername, cpassword) VALUES ('Dawn','Lane','TIDE Market','4567890123','dawnlane@gmail.com','dawnlane','dl123');
INSERT INTO customer (cfname, clname, cbusinessname, cphonenumber, cemail, cusername, cpassword) VALUES ('Dean','Robinson','Eyeglasses','5678901234','deanrobinson@gmail.com','deanrobinson','dr123');
INSERT INTO customer (cfname, clname, cbusinessname, cphonenumber, cemail, cusername, cpassword) VALUES ('Cory','Garrett','Haircuts','6789012345','corygarrett@gmail.com','corygarrett','cg123');
INSERT INTO customer (cfname, clname, cbusinessname, cphonenumber, cemail, cusername, cpassword) VALUES ('Kim','Green','Sandwich Shop','7890123456','kimgreen@gmail.com','kimgreen','kg123');
INSERT INTO customer (cfname, clname, cbusinessname, cphonenumber, cemail, cusername, cpassword) VALUES ('Tommie','Bell','Tuscaloosa Banking','8901234567','tommiebell@gmail.com','tommiebell','tb123');
INSERT INTO customer (cfname, clname, cbusinessname, cphonenumber, cemail, cusername, cpassword) VALUES ('Kristy','Jennings','Gaming Arcade','9012345678','kristyjennings@gmail.com','kristyjennings','kj123');
INSERT INTO customer (cfname, clname, cbusinessname, cphonenumber, cemail, cusername, cpassword) VALUES ('Brenda','Andrews','Flower Shop','1123456789','brendaandrews@gmail.com','brendaandrews','ba123');

INSERT INTO manager (mfname, mlname, mphonenumber, memail, musername, mpassword) VALUES ('Houston','Ragan','1987654321','houstonragan@gmail.com','houstonragan','hr123');
INSERT INTO manager (mfname, mlname, mphonenumber, memail, musername, mpassword) VALUES ('Matt','Brown','9876543210','mattbrown@gmail.com','mattbrown','mb123');
INSERT INTO manager (mfname, mlname, mphonenumber, memail, musername, mpassword) VALUES ('Anna','LeGoullon','8765432109','annalegoullon@gmail.com','annalegoullon','al123');
INSERT INTO manager (mfname, mlname, mphonenumber, memail, musername, mpassword) VALUES ('Brianna','Umble','7654321098','briannaumble@gmail.com','briannaumble','bu123');
INSERT INTO manager (mfname, mlname, mphonenumber, memail, musername, mpassword) VALUES ('Chester','Wade','6543210987','chesterwade@gmail.com','chesterwade','cw123');
INSERT INTO manager (mfname, mlname, mphonenumber, memail, musername, mpassword) VALUES ('Julia','Holt','5432109876','juliaholt@gmail.com','juliaholt','jh123');
INSERT INTO manager (mfname, mlname, mphonenumber, memail, musername, mpassword) VALUES ('Jill','Bush','4321098765','jillbush@gmail.com','jillbush','jb123');
INSERT INTO manager (mfname, mlname, mphonenumber, memail, musername, mpassword) VALUES ('Dustin','Carson','3210987654','dustincarson@gmail.com','dustincarson','dc123');
INSERT INTO manager (mfname, mlname, mphonenumber, memail, musername, mpassword) VALUES ('Karen','Bennet','2109876543','karenbennet@gmail.com','karenbennet','kb123');
INSERT INTO manager (mfname, mlname, mphonenumber, memail, musername, mpassword) VALUES ('Henry','Baker','1098765432','henrybaker@gmail.com','henrybaker','hb123');

INSERT INTO rentalspace 
(sqft, minimumperiod, monthlyrate, weeklyrate, rscustomerid, rsmanagerid) VALUES (600, 6, 2400, 600, 3, 5);
INSERT INTO rentalspace 
(sqft, minimumperiod, monthlyrate, weeklyrate, rscustomerid, rsmanagerid) VALUES (800, 6,3000, 800, 4, 8);
INSERT INTO rentalspace
(sqft, minimumperiod, monthlyrate, weeklyrate, rscustomerid, rsmanagerid) VALUES (400, 6, 1800, 400, 8, 6);
INSERT INTO rentalspace 
(sqft, monthlyrate, weeklyrate, rscustomerid, rsmanagerid) VALUES (800, 3000, 800, 6, 7);
INSERT INTO rentalspace
(sqft, monthlyrate, weeklyrate, rscustomerid, rsmanagerid) VALUES (800, 2000, 500, 5, 5);
INSERT INTO rentalspace
(sqft, monthlyrate, weeklyrate, rsmanagerid) VALUES (900, 2600, 600, 1);
INSERT INTO rentalspace
(sqft, monthlyrate, weeklyrate, rsmanagerid) VALUES (800, 2100 , 550, 2);
INSERT INTO rentalspace
(sqft, minimumperiod, maximumperiod, monthlyrate, weeklyrate, rsmanagerid) VALUES (350, 6, 24, 1300, 350, 5);
INSERT INTO rentalspace
(sqft, monthlyrate, weeklyrate, rsmanagerid) VALUES ('800', 2500 ,575, 5);
INSERT INTO rentalspace
(sqft, monthlyrate, weeklyrate,rsmanagerid) VALUES ('800', 2000, 500, 6);

INSERT INTO amenities (rentalid, kitchen, commerciallighting) VALUES (1, 'yes', 'yes');
INSERT INTO amenities (rentalid, bathroom, commerciallighting) VALUES (2, 'no', 'yes');
INSERT INTO amenities (rentalid, kitchen, internet) VALUES (3, 'yes', 'no');
INSERT INTO amenities (rentalid, securitysystem) VALUES (4, 'yes');
INSERT INTO amenities (rentalid, bathroom, commerciallighting) VALUES (5, 'yes', 'yes');
INSERT INTO amenities (rentalid, securitysystem) VALUES (6, 'yes');
INSERT INTO amenities (rentalid) VALUES (7);
INSERT INTO amenities (rentalid, kitchen) VALUES (8, 'yes');
INSERT INTO amenities (rentalid, commerciallighting) VALUES (9, 'yes');
INSERT INTO amenities (rentalid, internet, commerciallighting) VALUES (10, 'no', 'yes');

INSERT INTO lease (startdate, enddate, lrentalid, lcustomerid) VALUES ('22-04-08','22-10-08', 1, 6);
INSERT INTO lease (startdate, enddate, lrentalid, lcustomerid) VALUES ('22-05-13','23-01-13', 2, 4);
INSERT INTO lease (startdate, enddate, lrentalid, lcustomerid) VALUES ('22-04-28','22-10-28', 3, 8);
INSERT INTO lease (startdate, enddate, lrentalid, lcustomerid) VALUES ('22-05-01','23-05-01', 4, 5);
INSERT INTO lease (startdate, enddate, lrentalid, lcustomerid) VALUES ('22-05-04','23-02-04', 5, 6);

INSERT INTO rentalapplication (customernotes, rcustomerid, rentalid, startdate, enddate) VALUES ("Excited to lease", 1, 7, '22-04-08','22-10-08');
INSERT INTO rentalapplication (customernotes, rcustomerid, rentalid, startdate, enddate) VALUES ("Excited to apply", 3, 7, '22-04-08','22-10-08');
INSERT INTO rentalapplication (customernotes, rcustomerid, rentalid, startdate, enddate) VALUES ("Might need to make some changes to this plan", 1, 7, '22-04-08','22-10-08');
INSERT INTO rentalapplication (customernotes, rcustomerid, rentalid, startdate, enddate) VALUES ("Whats new here?", 8, 8, '22-04-08','22-10-08');
INSERT INTO rentalapplication (customernotes, rcustomerid, rentalid, startdate, enddate) VALUES ("Excited to lease", 7, 9, '22-04-08','22-10-08');
INSERT INTO rentalapplication (approvalstatus, rcustomerid, rmanagerid, rentalid, startdate, enddate) VALUES ('accepted', 9, 7, 9, '22-04-08','22-10-08');
INSERT INTO rentalapplication (approvalstatus, customernotes, rcustomerid, rmanagerid, rentalid, startdate, enddate) VALUES ('declined', "Excited to lease", 4, 2, 9, '22-04-08','22-10-08');
INSERT INTO rentalapplication (approvalstatus, rcustomerid, rmanagerid, rentalid, startdate, enddate) VALUES ('accepted', 5, 4, 6, '22-04-08','22-10-08');
INSERT INTO rentalapplication (customernotes, rcustomerid, rentalid, startdate, enddate) VALUES ("Excited to lease", 6, 10, '22-04-08','22-10-08');
INSERT INTO rentalapplication (approvalstatus, customernotes, rcustomerid, rmanagerid, rentalid, startdate, enddate) VALUES ('declined', "What is the eta to hear back?", 2, 1, 8, '22-04-08','22-10-08');

-- Database Demos

-- Rentor 4 submits a rental application
insert into rentalapplication(customernotes, rcustomerid, rentalid, startdate, enddate) values ('Very exited to make this offer', 4, 10, '22-04-08','22-10-08'); 

-- Previous rental application is approved by manager 6
update rentalapplication set rmanagerid = 6, approvalstatus = 'approved' where applicationid = 11; 

insert into lease (startdate, enddate, lrentalid, lcustomerid)
select ra.startdate, ra.enddate, ra.rentalid, rcustomerid
from rentalapplication ra
where ra.applicationid = 11;

update rentalspace set rscustomerid = 4 where rentalid = 10;




