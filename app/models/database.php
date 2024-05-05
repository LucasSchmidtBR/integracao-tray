<?php
require_once(dirname(__FILE__) ."/../../config.php");
class Database
{
    public function getConnection()
    {
        try {
            $connection = new PDO("myslq:".DB_NAME ,"host=".DB_HOST, DB_USER, );

            return $connection;
            
        } catch (PDOException $err) {
            //throw $th;
        }
    }
}