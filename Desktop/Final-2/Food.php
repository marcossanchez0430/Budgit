<?php

require ("../Final/Controller.php");


$foodController = new FoodController();

if(isset($_POST['budget']) && $_POST['budget'] != "")
{
   $foodTable = $foodController->CreatePriceTables($_POST['budget']);
}
else
{
    $foodTables = $foodController->CreateFoodTables($_POST['types']);
}

$display = $foodTable;
$content = $foodController->CreateFoodList(). $foodTables;

include 'Template.php';

?>
