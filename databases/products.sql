CREATE TABLE products (
    prod_id INT AUTO_INCREMENT PRIMARY KEY,
    prod_category VARCHAR(100),
    prod_name VARCHAR(100),
    prod_price DECIMAL(7,2),
    prod_img VARCHAR(100)
);

INSERT INTO products (prod_category, prod_name, prod_price, prod_img) VALUES
    ('desktop', 'Wyse 3040 Thin Client', 378.00, 'images/desktops/desk_product1/pic1.png'),
    ('desktop', 'SkyTech Archangel Gaming Desktop', 1199.00, 'images/desktops/desk_product2/pic1.jpg'),
    ('desktop', 'ABS Prism S', 2499.00, 'images/desktops/desk_product3/pic1.jpg'),
    ('desktop', 'CLX SET Gaming Desktop', 4799.00, 'images/desktops/desk_product4/pic1.jpg'),
    ('laptop', 'Lenovo IdeaPad Chromebook', 359.00, 'images/laptops/laptop_prod1/pic1.jpg'),
    ('laptop', 'MSI Bravo', 929, 'images/laptops/laptop_prod2/pic1.jpg'),
    ('laptop', 'ASUS Rog Strix Scar III', 2449.00, 'images/laptops/laptop_prod3/pic1.jpg'),
    ('laptop', 'GigaByte AERO 15', 3499.00, 'images/laptops/laptop_prod1/pic4.jpg'),
    ('headset', 'Jabra Evolve 20 SE', 65, 'images/headsets/headset_prod2/pic1.jpg'),
    ('headset', 'HyperX Cloud Stinger', 50, 'images/headsets/headset_prod3/pic1.jpg'),
    ('headset', 'Asus ROG Delta White Edition', 155, 'images/headsets/headset_prod4/pic1.jpg'),
    ('headset', 'Corsair Virtuoso RGB Wiresless', 268.00, 'images/headsets/headset_prod1/pic1.jpg'),
    ('mouse', 'Dell Wyse Mouse', 15.47, 'images/mice/mouse_prod1/pic1.jpg'),
    ('mouse', 'Corsair Harpoon RGB', 65, 'images/mice/mouse_prod2/pic1.jpg'),
    ('mouse', 'Glorious Model O Minus', 98, 'images/mice/mouse_prod3/pic1.jpg'),
    ('mouse', 'G-Wolves Hati HT-M 3360', 206, 'images/mice/mouse_prod4/pic1.jpg');
