create database count;
use count;

create table tb_partai(id int auto_increment, name varchar(255), primary key(id));

create table tb_caleg(id int auto_increment, name varchar(255), id_partai int, earned_vote int, primary key(id), foreign key(id_partai) references tb_partai(id));

insert into tb_partai(name) values("Cilacap Santai");
insert into tb_partai(name) values("Cilacap Sejahtera");

insert into tb_caleg(name, id_partai, earned_vote) values("Sera", 2, 100);
insert into tb_caleg(name, id_partai, earned_vote) values("Dobleh", 1, 99);

select * from tb_partai;
select * from tb_caleg;

insert into tb_partai(name) values("Cilacap Aman");
update tb_partai set name="Cilacap Makmur" where name="Cilacap Sejahtera";

insert into tb_caleg(name, id_partai) values("Kabur", 3);
insert into tb_caleg(name, id_partai) values("Astina", 3);

update tb_caleg set earned_vote=69 where name="Kabur";
update tb_caleg set earned_vote=21 where name="Astina";

update tb_caleg set name="Is Bos", id_partai=2, earned_vote=70 where name="Sera";

delete from tb_caleg where name="Astina";

select * from tb_caleg inner join tb_partai using(id_partai);