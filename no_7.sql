create database ukmgulanda;
use ukmgulanda;

create table customers
(
    id int
    auto_increment,
    first_name varchar
    (255),
    last_name varchar
    (255),
    email varchar
    (255),
    address varchar
    (255),
    city varchar
    (255),
    state varchar
    (255),
    zip_code varchar
    (30),
    primary key
    (id)
);

    create table orders
    (
        id int
        auto_increment,
    customer_id int,
    order_placed_date timestamp default current_timestamp,
    primary key
        (id),
    foreign key
        (customer_id) references customers
        (id)
);

        insert into customers
            (first_name, last_name, email, address, city, state, zip_code)
        values("Rifqi", "Ganteng", "ekarifqi1@gmail.com", "Jl. Salak RT002/RW019", "Cilacap", "Indonesia", "123456");

        insert into customers
            (first_name, last_name, email, address, city, state, zip_code)
        values("Eka", "Hardianto", "ekahardianto@gmail.com", "Jl. Garuda No.10", "Surakarta", "Indonesia", "523123");

        insert into orders
            (customer_id)
        values(1);
        insert into orders
            (customer_id)
        values(2);

        create view customerOrder
        as
            (
            select
                customers.email,
                orders.id,
                orders.customer_id
            from
                customers
                inner join
                orders on (customers.id) = (orders.customer_id)
);

        select
            email,
            count(*) as jumlah
        from
            customerOrder
        group by
	email
        order by
	jumlah desc ;