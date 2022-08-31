<?php

move_uploaded_file($_FILES['image']['tmp_name'], uniqid().".jpg");
$data = uniqid().".jpg";
header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);
?>