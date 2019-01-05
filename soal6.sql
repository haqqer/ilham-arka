-- Membuat tabel categories
CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
)
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

-- Membuat tabel products
CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `category_id` int(11) NOT NULL
)

-- Indeks untuk tabel `products`
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);
  
-- Penambahan Foreign key 
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

-- Input data pada categories
INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Peralatan Mandi'),
(2, 'Mie Instan'),
(3, 'Olahan Daging');

-- Input data pada products
INSERT INTO `products` (`id`, `name`, `category_id`) VALUES
(1, 'Sampo', 1),
(2, 'Sikat Gigi', 1),
(3, 'Indomie Goreng Spesial', 2),
(4, 'Mie Sedap Soto', 2),
(5, 'Rock Mie Baso', 2),
(6, 'Nuget', 3);

SELECT categories.id, categories.name AS category_name, GROUP_CONCAT(products.name) AS products  FROM products JOIN categories ON categories.id = products.category_id GROUP BY products.category_id