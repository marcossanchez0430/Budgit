<?php

class FoodEntity
{
    public $name;
    public $foodname;
    public $type;
    public $price;
    
    function __construct($name, $foodname, $type, $price) {
        $this->name = $name;
        $this->foodname = $foodname;
        $this->type = $type;
        $this->price = $price;
    }
}

?>