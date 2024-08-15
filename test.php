<?php

    // runitme compile time

    ini_set('display_errors', '1');
    ini_set('display_startup_errors', '1');
    error_reporting(E_ALL);
    // echo "hii this is god";
    // $fptr = fopen("test.txt" , "w");
    // fwrite($fptr , "hiiiiiii");
    // $fclose(fptr);


    echo "1";
    file_put_contents("/var/www/html/ERP/tessst.txt", "This isbb data");
    echo "2";
    // file_put_contents("tessst.txt", "This is data", PHP_APPEND);

    $filedet = file_get_contents("tessst.txt");

    array();

    


?>