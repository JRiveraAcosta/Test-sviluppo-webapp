<?php

include('../assets/mysqli.class.php');


if (isset($_POST["data"])) {
    $d = json_decode($_POST["data"]);

    $obj = new stdClass();
    if (isset($d->action)) {
        switch ($d->action) {


            case 'get_orders':
                $sort = $d->sort;
                $sqlO = "SELECT time_creation as data,user_name as nome FROM orders ORDER BY time_creation ".$sort.";";
                $auxSqlO = new my($sqlO);
                if (!isset($auxSqlO->e)) {
                    $obj->response = $auxSqlO->rows;
                } else {
                    $obj->response = false;
                }
                break;


        }

    }


}


header("Content-type: application/json");

echo json_encode($obj);

?>
