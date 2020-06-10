<?php

// $mahasiswa = [
//     [
//         "nama" => "suci",
//         "email" => "suciper03@gmail.com"
//     ],
//     [
//         "nama" => "suci",
//         "email" => "suciper03@gmail.com"
//     ],
// ];

// $data = json_encode($mahasiswa);
// echo $data;

$dbh = new PDO('mysql:host=localhost;dbname=k1410107_master', 'root', '');
$db = $dbh->prepare('SELECT *  FROM tbl_aplikasi');
$db->execute();
$datamaster = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($datamaster);
echo $data;
