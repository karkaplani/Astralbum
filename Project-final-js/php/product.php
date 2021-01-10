<?php
//connecting to the mysql
$dbcon=mysqli_connect("localhost","root","","product_t");
$strMsg=mysqli_connect_error();
//getting the product ID
$PID=$_POST["productID"];
//showing the product by PID
$query="select * from product_t where productID = '$PID'";
$result=mysqli_query($dbcon,$query);
//declaration of array
$ary=array();
//showing results by row
while($row=mysqli_fetch_array($result))
{
	$ary[]=$row;//store rows in array
}
	$jsonAry=json_encode($ary);
echo $jsonAry;
?>