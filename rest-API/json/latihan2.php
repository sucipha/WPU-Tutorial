<?php

$data = file_get_contents('coba.json');
$datamaster = json_decode($data, true);

var_dump($datamaster);
echo $datamaster[0]['teman']['kanan'];
