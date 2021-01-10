<?php
//connecting to mysql
$dbcon=mysqli_connect("localhost","root","","product_t");
//declaring the variables for storing values sending to the mysql
$title=$_POST["title"];
$des=$_POST["description"];
$price=$_POST["price"];
$artist=$_POST["artist"];
$year=$_POST["year"];
$genre=$_POST["genre"];
$imageName=$_FILES["imageName"]["name"];
$tmp=$_FILES["imageName"]["tmp_name"];

//giving the values for the product_t  table
$query="insert into product_t (title, description, imageName, price, artist, year, genre) values ('$title', '$des', '$imageName', $price, '$artist', $year, '$genre')";
//moving the uploaded image to the search-photos folder
move_uploaded_file($tmp,"../search-photos/".$imageName);
echo $result=mysqli_query($dbcon,$query);
$msg=mysqli_error($dbcon);
if($msg=='')
    echo 'successfully insert'; //if successfully uploaded
else 
    echo $msg;
?>