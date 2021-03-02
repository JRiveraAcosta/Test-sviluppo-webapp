
CREATE DATABASE bdwebapp;
USE bdwebapp;

CREATE TABLE `orders` (
  `idorders` int(11) NOT NULL,
  `time_creation` datetime DEFAULT CURRENT_TIMESTAMP,
  `user_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `orders` (`idorders`, `time_creation`, `user_name`) VALUES
(1, '2021-03-02 18:11:46', 'Jimmy'),
(2, '2021-03-02 18:13:47', 'Fabio');
ALTER TABLE `orders`
  ADD PRIMARY KEY (`idorders`);
ALTER TABLE `orders`
  MODIFY `idorders` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;