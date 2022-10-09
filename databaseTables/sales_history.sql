-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 09, 2022 at 04:50 AM
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
-- Table structure for table `sales_history`
--

CREATE TABLE `sales_history` (
  `id` int(10) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `time` time NOT NULL DEFAULT current_timestamp(),
  `staff_id` int(10) NOT NULL,
  `car_brand` varchar(255) NOT NULL,
  `car_model` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sales_history`
--

INSERT INTO `sales_history` (`id`, `date`, `time`, `staff_id`, `car_brand`, `car_model`) VALUES
(1, '2022-05-31', '21:00:00', 1, 'Honda', 'a'),
(2, '2022-06-01', '21:00:00', 3, 'Tesla', 'a'),
(3, '2022-06-05', '09:00:00', 2, 'Honda', 'a'),
(4, '2022-06-05', '10:00:00', 3, 'Honda', 'a'),
(5, '2022-06-06', '11:30:00', 1, 'Tesla', 'b'),
(6, '2022-06-07', '12:00:00', 1, 'Toyota', 'a'),
(7, '2022-06-08', '09:45:00', 2, 'Toyota', 'a'),
(8, '2022-06-09', '14:00:00', 1, 'Tesla', 'a'),
(9, '2022-10-08', '08:33:44', 1, 'Tesla', 'a'),
(10, '2022-10-08', '10:28:30', 1, 'Tesla', 'b'),
(11, '2022-10-08', '10:28:58', 1, 'Tesla', 'b'),
(12, '2022-10-08', '13:20:15', 1, 'Honda', 'a'),
(13, '2022-10-08', '14:48:21', 1, 'Tesla', 'b'),
(14, '2022-10-08', '15:48:54', 1, 'Honda', 'a'),
(15, '2022-10-08', '16:17:25', 1, 'Honda', 'a'),
(96, '2022-10-09', '09:16:36', 1, 'Tesla', 'b'),
(97, '2022-10-09', '09:17:14', 1, 'Tesla', 'b'),
(98, '2022-10-09', '09:18:03', 2, 'Tesla', 'b'),
(99, '2022-10-09', '09:19:46', 2, 'Tesla', 'b');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sales_history`
--
ALTER TABLE `sales_history`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sales_history`
--
ALTER TABLE `sales_history`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
