-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 30, 2018 at 06:11 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_portfolio`
--

CREATE TABLE `tbl_portfolio` (
  `id` int(10) UNSIGNED NOT NULL,
  `project_title` varchar(50) NOT NULL,
  `project_desc` varchar(1000) NOT NULL,
  `project_image` varchar(40) NOT NULL,
  `design_desc` varchar(500) NOT NULL,
  `project_tagline` varchar(70) NOT NULL,
  `project_indexdesc` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_portfolio`
--

INSERT INTO `tbl_portfolio` (`id`, `project_title`, `project_desc`, `project_image`, `design_desc`, `project_tagline`, `project_indexdesc`) VALUES
(1, 'FELLOWSHIP OF THE RING', 'Created a fully responsive website for the 20th anniversary release of the first Lord of the Rings film. Focused on a minimal and modern flat design, highlighting the film\'s yellow colour tones. Created all new logos and branding, while still remaining true to the original film\'s branding and design.', 'browser_fellowship.png', 'The design approach for this website was a new take on something classic. Taking colours, type, and inspiration from the original film and combining them together to create a sleek updated version was the ultimate goal.', '', ''),
(2, 'HADIA FIAZ', 'Created branding and designed graphics for the King\'s University College Student Council presidential campaign for Hadia Fiaz. Took a minimal and sleek design choice with this project, to be current and professional. Created an easy and recognizable logo and helped Hadia win the election.', 'browser_hadia.png', 'The design approach for this campaign was to be simple yet professional. Blue was the colour of the campaign, so I utilized a variety of different shades, focusing on a light blue and utilizing touches of black for text.\r\n', '', ''),
(3, 'ANGTON ELECTRIC', 'Created a fully responsive website for the electrical company, Angton Electric. Focused on an easy and simple navigation for the site, while displaying all key features. Stayed true to the companies already established colour scheme and created a higher quality version of their already established logo.', 'browser_angton.png', 'The design approach for this website was an easy one page navigation with clear calls to action. Mainly utilized their colour values of blue and yellow throughout the webpage for brand consistency.', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_portfolio_work`
--

CREATE TABLE `tbl_portfolio_work` (
  `id` int(11) NOT NULL,
  `project_name` varchar(40) NOT NULL,
  `first_aspect` varchar(40) NOT NULL,
  `second_aspect` varchar(40) NOT NULL,
  `third_aspect` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_portfolio_work`
--

INSERT INTO `tbl_portfolio_work` (`id`, `project_name`, `first_aspect`, `second_aspect`, `third_aspect`) VALUES
(1, 'ANGTON ELECTRIC', 'UX/UI DESIGN', 'RESPONSIVE DESIGN', ''),
(2, 'FELLOWSHIP OF THE RING', 'BRANDING', 'UX/UI DESIGN', 'RESPONSIVE WEBSITE'),
(3, 'HADIA FIAZ', 'BRANDING', 'LOGO DESIGN', 'PRINT DESIGN'),
(4, 'DEMO REEL', 'MOTION', 'CINEMA 4D', 'AFTER EFFECTS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_portfolio`
--
ALTER TABLE `tbl_portfolio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_portfolio_work`
--
ALTER TABLE `tbl_portfolio_work`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_portfolio`
--
ALTER TABLE `tbl_portfolio`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_portfolio_work`
--
ALTER TABLE `tbl_portfolio_work`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
