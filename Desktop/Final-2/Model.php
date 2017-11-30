<?php

require ("../Final/Entity.php");

class FoodModel 
{

    
    function GetFoodTypes() 
    {
        require 'Credentials.php';

        mysql_connect($host, $user, $passwd);
        mysql_select_db($database);
        $result = mysql_query("SELECT DISTINCT type FROM Food") or die(mysql_error());;
        $types = array();

        while ($row = mysql_fetch_array($result)) 
        {
            array_push($types, $row[0]);
        }
        mysql_close();
        return $types;
    }

    function GetFoodByType($type) 
    {
        require 'Credentials.php';

             
        mysql_connect($host, $user, $passwd) or die(mysql_error());
        mysql_select_db($database);

        $query = "SELECT * FROM Food WHERE type LIKE '$type'";
        $result = mysql_query($query) or die(mysql_error());
        $foodArray = array();

       
        while ($row = mysql_fetch_array($result)) 
        {
            $name = $row[0];
            $foodname = $row[1];
            $type = $row[2];
            $price = $row[3];
            

            $food = new FoodEntity($name, $foodname, $type, $price);
            array_push($foodArray, $food);
        }
        
        mysql_close();
        return $foodArray;
    

    }
    function GetPrice()
    {
        require 'Credentials.php';


        mysql_connect($host, $user, $passwd) or die(mysql_error());
        mysql_select_db($database);
        $searchquery = preg_replace('#[^0-9?!.-]#', '', $_POST['budget']);
        $sqlquery = "SELECT * FROM Food WHERE price <= '$searchquery'";
        $result = mysql_query($sqlquery) or die(mysql_error());
        $priceArray = array();

        while ($row = mysql_fetch_array($result)) 
        {
            $name = $row[0];
            $foodname = $row[1];
            $type = $row[2];
            $price = $row[3];
            

            $food = new FoodEntity($name, $foodname, $type, $price);
            array_push($priceArray, $food);
        }
        
        mysql_close();
        return $priceArray;
 
    }
}

?>
