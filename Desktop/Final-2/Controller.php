<?php 

require ("../Final/Model.php");

class FoodController 
{
    function CreateFoodList() 
    {
        $foodModel = new FoodModel();
        $result = "<form action = '' method = 'post' width = '200px'>
                    What are you in the mood for: 
                    <select name = 'types' >
                        <option value = '%' >All</option>
                        " . $this->CreateOptionValues($foodModel->GetFoodTypes()) .
                "</select>
                     <input type = 'submit' value = 'Submit' />
                    </form>";

        return $result;
    }
    function CreateOptionValues(array $valueArray) 
    {
        $result = "";

        foreach ($valueArray as $value) 
        {
            $result = $result . "<option value='$value'>$value</option>";
        }

        return $result;
    }

function CreateFoodTables($type)
   {
        $foodModel = new FoodModel();
        $foodArray = $foodModel->GetFoodByType($type);
        $result = "";
        
        
        foreach ($foodArray as $key => $food) 
        {
            $result = $result .
                    "<table class ='foodTable'>
                        <tr>
                            <th>Restaurant: </th>
                            <td>$food->name</td>
                        </tr>
                        
                        <tr>
                            <th>Name: </th>
                            <td>$food->foodname</td>
                        </tr>
                        
                        <tr>
                            <th>Type: </th>
                            <td>$food->type</td>
                        </tr>
                        
                        <tr>
                            <th>Price: </th>
                            <td>$$food->price</td>
                        </tr>
                        
                          
                     </table>";
        }        
        return $result;
        
    }
function CreatePriceTables()
   {
        $foodModel = new FoodModel();
        $priceArray = $foodModel->GetPrice();
        $result = "";
        
        
        foreach ($priceArray as $key => $food) 
        {
            $result = $result .
                    "<table class ='foodTable'>
                        <tr>
                            <th>Restaurant: </th>
                            <td>$food->name</td>
                        </tr>
                        
                        <tr>
                            <th>Name: </th>
                            <td>$food->foodname</td>
                        </tr>
                        
                        <tr>
                            <th>Type: </th>
                            <td>$food->type</td>
                        </tr>
                        
                        <tr>
                            <th>Price: </th>
                            <td>$$food->price</td>
                        </tr>
                        
                          
                     </table>";
        }        
        return $result;
   }    
}

?>
