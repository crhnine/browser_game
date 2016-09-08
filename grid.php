<?php

?>


<!DOCTYPE html>



<script></script>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>

    <style>

    .cell_container:hover{

    background-color:#ccc;

    }

    </style>
</head>
<body>


<select onchange="OnSelectionChange(this)">
<option id="on">On</li>
<option id="off">Off</li>
</select>

          <?php

             $height = 3000;
             $width = 3000;
             $border_setting = 50;
             $top_bottom_border_width = $width + ($border_setting * 2);
             $shell_width = $top_bottom_border_width + 20;
             $right_left_border_height = $height + ($height * .01);

             $cell_count = $width / 100;
             $cell_initial = $cell_count / $cell_count;

             $row_count = $height / 100;
             $row_initial = $row_count / $row_count;

             $subset_count = 4;
             $subset_label_initial = $subset_count / $subset_count;

             $subset_array = array(

                   0 => "A",
                   1 => "B",
                   2 => "C",
                   3 => "D"

                );

             $print_cell = ($height / 100) * ($width / 100);
             echo '<div style="width:100%;">';//Overall Container
             echo '<div style="margin:0 auto;width:'.$shell_width.'px;">';//Centering Container
             echo '<div style="width:'.$top_bottom_border_width.';height:'.$border_setting.'px;padding-bottom:10px;background-color:#303030;"></div>';//Top
             echo '<div style="width:'.$border_setting.'px;height:'.$right_left_border_height.'px;float:left;padding-right:10px;background-color:#303030;"></div>';//Left
             echo '<div style="width:'.$width.'px;height:'.$height.'px;float:left;">';//Grid Container
                        while($print_cell > 0){
                        echo '
                          <div class="cell_container" style="float:left;margin-bottom:1px;">

                            <div class="box box_01 top_box" id="'.$row_initial .$cell_initial .$subset_array[0].'" style="border:1px solid grey;height:47px;width:47px;margin-right:1px;float:left;"><div style="width:100%;height:20px;"><div style="float:left">'.$row_initial.'</div><div style="float:left;">'.$cell_initial.'</div><div style="float:left;">'.$subset_array[0].'</div></div></div>
                            <div class="box box_01 top_box" id="'.$row_initial .$cell_initial .$subset_array[1].'" style="border:1px solid grey;height:47px;width:47px;margin-right:1px;float:left;"><div>'.$subset_array[1].'</div></div><br /><br /><br />
                            <div class="box box_02 bottom_box" id="'.$row_initial .$cell_initial .$subset_array[2].'" style="border:1px solid grey;height:47px;width:47px;;margin-right:1px;margin-top:-3px;float:left;"><div>'.$subset_array[2].'</div></div>
                            <div class="box box_02 bottom_box" id="'.$row_initial .$cell_initial .$subset_array[3].'" style="border:1px solid grey;height:47px;width:47px;margin-right:1px;margin-top:-3px;float:left;"><div>'.$subset_array[3].'</div></div>

                          </div>
              
                          ';

                          $print_cell = $print_cell - 1;
                          $cell_initial = $cell_initial + 1;

                          
                          if($cell_initial > $cell_count){

                            $cell_initial = 1;
                            $row_initial = $row_initial + 1;

                            }


                        }



             echo '</div>';//Grid Container
             echo '<div style="width:'.$border_setting.'px;height:'.$right_left_border_height.'px;float:left;padding-left:10px;background-color:#303030;"></div>';//Right
             echo '<div style="width:'.$top_bottom_border_width.';height:'.$border_setting.'px;margin-top:40px;padding-top:10px;background-color:#303030;clear:both;"></div>';//Bottom
             echo '</div>';//Centering Container
             echo '</div>';//Overall Container
?>




<!-- Place in last box to demonstrate possible control... -->

<!-- <div style="width:100%;height:100%;-webkit-border-bottom-left-radius: 100%;-moz-border-bottom-left-radius: 100%;border-bottom-left-radius: 100%;background-color:white;"><div style="float:right;width:85%;height:85%;-webkit-border-bottom-left-radius: 100%;-moz-border-bottom-left-radius: 100%;border-bottom-left-radius: 100%;background-color:#1e1e1e;"></div></div> -->
</body>


<script src="https://unpkg.com/react@15.3.1/dist/react.js"></script>
<script src="https://unpkg.com/react-dom@15.3.1/dist/react-dom.js"></script>

<!-------------------------------------------------------------------------------------------->
<!--^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->
<!--VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV-->
<!-------------------------------------------------------------------------------------------->
<!-- 

JS location for grid controls.

Coordinates follow convention of 11A 11B 11C 11D; 12A 12B 12C 12D; ...up to 1(last_column_number)A, B, C, D; 21A, 21B, 21C, 21D.......

JS should create secondary grid possibly or to just create the grid by itself? Either way JS will very likely need its own grid to control. 
Movement:

You will have to take the user input first. Say the user character is on a B square. If they hit right arrow key they will end up on an A square but with an increase in 
the "current" cell_initial. So add 1 to cell_initial that the "current location" needs to look for. 

Let's say for example:

Starting off the user's current location (current_location) = 12A;
The user hits the down arrow key. So on keypress();
The resulting location, or better said, the new "current location" (current_location) = 12C;
So in this case we would need to change the subset. 

The user hits the down arrow key starting at 12C. On keypress();
The resulting location, or better said, the new "current_location" (current_location) = 22A;
So in this case we add one to the row_initial and change the subset to equal A;

Now what is currently in the plans to do this? All coordinate references are within the ID.
JS will be able to reference any grid coordinate based on whatever ID you pass it. So in other 
words you should be able to say document.getElementById('12C') with spaces included and any
effects such as document.getElementById('12C').style.backgroundColor = "red"; should be 
applied specifically to that square. ID's cannot have space characters.

------------------------------>
<!-------------------------------------------------------------------------------------------->
<!--^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->
<!--VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV-->
<!-------------------------------------------------------------------------------------------->
<script>


var test_coordinate = document.getElementById('12C');
var test_coordinate02 = document.getElementById('44A');

test_coordinate.style.backgroundColor = "red";
test_coordinate02.style.backgroundColor = "blue";


var current_coordinate_initial = test_coordinate;
var new_current_coordinate = 0;


        function OnSelectionChange (select) {
            var selectedOption = select.options[select.selectedIndex];


            if(selectedOption.value === "On"){
                var x = document.getElementsByClassName("box");
                var i;
                for (i = 0; i < x.length; i++) {
                    x[i].style.border = "1px solid grey";
                    x[i].style.height = "47px";
                    x[i].style.width = "47px";
                                               }
            }

            if(selectedOption.value === "Off"){            
                var y = document.getElementsByClassName("box");
                var j;
                for (j = 0; j < y.length; j++) {
                    y[j].style.border = "none";
                    y[j].style.height = "49px";
                    y[j].style.width = "49px";
                                               }



            }

        }

</script>
<!------------------------------------------------------------------------------>