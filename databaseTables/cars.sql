-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 09, 2022 at 04:49 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mylittleshowroom`
--

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `brand` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`brand`, `model`, `description`) VALUES
('Honda', 'a', 'Honda model a'),
('Honda', 'aaa+.', 'The fastest car in the galaxy.'),
('Honda', 'b', 'Honda model b'),
('Honda', 'y+', 'The fastest car in the galaxy.'),
('Honda', 'z+', 'The fastest car in the galaxy.'),
('Madaz', 'a', 'Just a little cute cars.'),
('Tesla', 'a', 'Tesla model a'),
('Tesla', 'a1', 'cute toy car'),
('Tesla', 'b', 'Tesla model b'),
('Tesla', 'd', 'Just a little car'),
('Tesla', 'x', 'Just a little car 2'),
('Toyota', 'a', 'Toyota model a'),
('Toyota', 'b', 'Toyota model b');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`brand`,`model`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
