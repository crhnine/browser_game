<?php
    $grid_set_width = $_POST['grid_set_width'];
    $grid_set_height = $_POST['grid_set_height'];

    $data_retrieval = array(

        //'advert' => $row['adverts'];
        'grid_set_width' => $grid_set_width,
        'grid_set_height' => $grid_set_height

    );

    echo json_encode($data_retrieval);

?>