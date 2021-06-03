<?php

try 
{
    $db = new PDO("mysql:host=localhost;charset=utf8;dbname=jarditou", "root", ""); 

    $reponse = $db->query('SELECT cat_nom, cat_id FROM categories');

    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
} 

catch (Exception $e) 
{
    echo 'Erreur : ' . $e->getMessage() . '<br />';
    echo 'N° : ' . $e->getCode();
    die('Fin du script');
}


?>