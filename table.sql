CREATE TABLE `referrals` (
  `id` int NOT NULL AUTO_INCREMENT,
  `given_name` varchar(145) DEFAULT NULL,
  `surname` varchar(145) DEFAULT NULL,
  `email` varchar(245) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `home_name` varchar(145) DEFAULT NULL,
  `street` varchar(145) DEFAULT NULL,
  `suburb` varchar(45) DEFAULT NULL,
  `state` varchar(145) DEFAULT NULL,
  `postcode` int DEFAULT NULL,
  `country` varchar(145) DEFAULT NULL,
  `image_url` varchar(245) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB ;
