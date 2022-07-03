CREATE TABLE `groups` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(100) NOT NULL
);

CREATE TABLE `group_items` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `group_id` int NOT NULL,
  `category_id` int NOT NULL,
  `sequenced_number` int NOT NULL,
  FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`),
  FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
);

CREATE TABLE `exam_group` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `exam_id` int NOT NULL,
  `group_id` int NOT NULL,
  FOREIGN KEY (`exam_id`) REFERENCES `exams` (`id`),
  FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`)
);