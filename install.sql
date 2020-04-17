/*create table of agents*/

create table agents (
    agentid int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cityid int(11) NOT NULL,
    bucketSize int(4),
    agentName varchar(50) NOT NULL
);

/*create table of cities*/

create table cities (
    cityid int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cityDetails varchar(100),
    cityName varchar(25) NOT NULL
);

/*create table of leads*/

create table leads (
    leadid int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cityid int(11) NOT NULL,
    agentid int(11) NOT NULL,
    createdAt date NOT NULL,
    name varchar(50) NOT NULL
);

/*central team default entry*/
insert into cities (cityid, cityName, cityDetails) values (1, 'Central Team', 'Pool of Unallocated Agents');

/*dummy data*/
insert into cities (cityName, cityDetails) values ('Delhi', 'Capital');
insert into cities (cityName, cityDetails) values ('Bangalore', 'Karnataka');
insert into cities (cityName, cityDetails) values ('Gurgaon', 'Haryana');
insert into cities (cityName, cityDetails) values ('Patiala', 'Punjab');

insert into agents (cityid, bucketSize, agentName) values (1, 5, 'defaultAgent');
insert into agents (cityid, bucketSize, agentName) values (2, 5, 'agent1');
insert into agents (cityid, bucketSize, agentName) values (3, 5, 'agent2');
insert into agents (cityid, bucketSize, agentName) values (4, 5, 'agent3');
insert into agents (cityid, bucketSize, agentName) values (5, 5, 'agent4');

insert into leads (cityid, agentid, name, createdAt) values (2, 1, 'lead1', '2020-04-16');
insert into leads (cityid, agentid, name, createdAt) values (2, 1, 'lead2', '2020-04-16');
insert into leads (cityid, agentid, name, createdAt) values (2, 1, 'lead3', '2020-04-16');
insert into leads (cityid, agentid, name, createdAt) values (2, 1, 'lead4', '2020-04-16');

