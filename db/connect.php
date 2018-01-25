<?php

$sname = "localhost";
$uname = "root";
$pword = "";
$j_array = [];

$conn = mysqli_connect($sname, $uname, $pword, 'myDB');

$sql = "SELECT id, compName, fileName FROM ann_qua";

$result = mysqli_query($conn, $sql);

while($row = mysqli_fetch_assoc($result))
{
    $j_array[] = $row;
}

echo json_encode($j_array);
