<?php
//Connecting to the database
$dbcon=mysqli_connect("localhost","root","","product_t");
$strMsg=mysqli_connect_error();
//Saerching items
$searchItem=$_POST["searchItem"];
$query="select * from product_t where (title like '%$searchItem%') or (description like '%$searchItem%') or (artist like '%$searchItem%')";
//result variable
$result=mysqli_query($dbcon,$query);
//declaration of array
$ary=array();
//rows from mysql
while($row=mysqli_fetch_array($result))
{
	$ary[]=$row;//store rows in array
}
	$jsonAry=json_encode($ary);
    echo $jsonAry;
?>