<?php

?>


<!DOCTYPE html>


    <!-- Do not add code between these script tags -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.js"></script>
    <!-------------------------------------------  -->

<!-- <script>

$(function (){
    $(#grid_response_form).on('submit', function(e) {

    e.preventDefault();
    $.ajax({

    url: 'grid_response.php',
    type: 'POST',
    data: data,
    datatype: 'json',
    success: function(result){

    alert("Form submitted to page. Check console for values.");
    console.log(result['grid_set_width']);
    console.log(result['grid_set_height']);

    },
    error : function(){

    alert("JQUERY AJAX error. Results could not be successfully loaded from grid_response.php");
    }
    });

    )};
}); 



</script> -->

<!--     <script type="text/javascript">
            $(function () {
            $('#grid_response_form').on('submit', function (e){
              e.preventDefault();

           $.ajax({
                    type: "GET",
                    url: "grid_response.php",
                    dataType: "json",
                    success: function (response) 
                    { 

                    }

                });
            });
              }); 
    </script>-->
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>

    <style>

    .zone_container:hover{

    background-color:#ccc;

    }

    </style>
</head>
<body>


<div style="width:100%;background-color:#ccc;margin-bottom:25px;height:100px;box-sizing:border:box;padding-left:1%;padding-top:5px;">
<div style="width:20%;float:left;">

<h4>Show/Hide Grid</h4>
<select style="width:100%;height:20px;" onchange="OnSelectionChange(this)">
<option id="on">On</li>
<option id="off">Off</li>
</select>


</div>
<div style="width:33%;float:left;margin-left:15px;">

<!-- <form id="grid_response_form" method="post">
<label for="grid_set_width" />Determine Width by Cell Count
<input id="grid_set_width" name="grid_set_width" type="number" />
 
<label for="grid_set_height" />Determine height by Cell Count. Recommended to equate to width set.
<input id="grid_set_height" name="grid_set_height" type="number" />


<button type="submit" id="submit_size" name="submit_size" value="Submit" style="width:200px;height:30px;margin-top:20px;" >Submit</button>

</form> -->


</div>
</div>
<div style="width:100%;background-color:#ccc;margin-bottom:25px;box-sizing:border:box;padding-bottom:25px;padding-left:1%;padding-top:5px;">

<h3>This grid lays the platform for building a game. The grey outlined boxes represent the actual coordinates that the player's character is sitting whereas the red represent the containers to hold the character image. Right now I have put the character to an offset of the actual grid coordinate.</h3>


</div>




          <?php


          //JSON can be directly embedded inside of a yaml file. 


             $grid_set_width = $_POST['width'];
             $grid_set_height = $_POST['height'];
             $height = 3000;//$grid_set_height * 100;//This height is based on pixels; Needs to be a division of 100 even.
             $width = 3000;//$grid_set_width * 100;//This width is based on pixels;
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
             echo '<div style="width:100%;margin-left:35px;margin-right:35px;margin-bottom:35px;">';//Overall Container
             echo '<div style="margin:0 auto;width:'.$shell_width.'px;background-image:url(\'img/campaign_green_field_cover_no_fade.png\');">';//Centering Container
             echo '<div class="border" style="width:'.$top_bottom_border_width.';height:'.$border_setting.'px;padding-bottom:10px;background-color:#303030;background-image:url(\'img/tree.png\');background-repeat:repeat-x;"></div>';//Top
             echo '<div class="border" style="width:'.$border_setting.'px;height:'.$right_left_border_height.'px;float:left;padding-right:10px;background-color:#303030;background-image:url(\'img/tree.png\');background-repeat:repeat-y;overflow:visible;"></div>';//Left
             echo '<div style="width:'.$width.'px;height:'.$height.'px;float:left;">';//Grid Container
                        while($print_cell > 0){
                        echo '
                          <div class="cell_container" style="float:left;margin-bottom:1px;overflow:visible;">

                            <div class="zone_container box box_01 top_box" id="'.$row_initial .$cell_initial .$subset_array[0].'inner" style="border:1px solid grey;height:47px;width:47px;margin-right:1px;float:left;position:relative;z-index:30;overflow:visible"><div class="character_placement" id="'.$row_initial .$cell_initial .$subset_array[0].'" style="position:absolute;z-index:31;width:47px;height:65px;border:1px solid red;margin-top:-27px;margin-left:10px;overflow:visible;"></div><div class="coordinate_display" style="width:100%;height:20px;overflow:visible"><div class="" id="'.$row_initial.'" style="float:left;">'.$row_initial.'</div><div id="'.$cell_initial.'" style="float:left;">'.$cell_initial.'</div><div id="'.$subset_array[0].'" style="float:left;">'.$subset_array[0].'</div></div></div>
                            <div class="zone_container box box_01 top_box" id="'.$row_initial .$cell_initial .$subset_array[1].'inner" style="border:1px solid grey;height:47px;width:47px;margin-right:1px;float:left;position:relative;z-index:30;overflow:visible"><div class="character_placement" id="'.$row_initial .$cell_initial .$subset_array[1].'" style="position:absolute;z-index:31;width:47px;height:65px;border:1px solid red;margin-top:-27px;margin-left:10px;overflow:visible;"></div><div class="coordinate_display" style="width:100%;height:20px;overflow:visible"><div id="'.$row_initial.'" style="float:left">'.$row_initial.'</div><div id="'.$cell_initial.'" style="float:left;">'.$cell_initial.'</div><div id="'.$subset_array[1].'" style="float:left;">'.$subset_array[1].'</div></div></div><br /><br /><br />
                            <div class="zone_container box box_02 bottom_box" id="'.$row_initial .$cell_initial .$subset_array[2].'inner" style="border:1px solid grey;height:47px;width:47px;margin-right:1px;margin-top:-3px;float:left;position:relative;z-index:30;overflow:visible"><div class="character_placement" id="'.$row_initial .$cell_initial .$subset_array[2].'" style="position:absolute;z-index:31;width:47px;height:65px;border:1px solid red;margin-top:-27px;margin-left:10px;overflow:visible;"></div><div class="coordinate_display" style="width:100%;height:20px;overflow:visible"><div id="'.$row_initial.'" style="float:left">'.$row_initial.'</div><div id="'.$cell_initial.'" style="float:left;">'.$cell_initial.'</div><div id="'.$subset_array[2].'" style="float:left;">'.$subset_array[2].'</div></div></div>
                            <div class="zone_container box box_02 bottom_box" id="'.$row_initial .$cell_initial .$subset_array[3].'inner" style="border:1px solid grey;height:47px;width:47px;margin-right:1px;margin-top:-3px;float:left;position:relative;z-index:30;overflow:visible"><div class="character_placement" id="'.$row_initial .$cell_initial .$subset_array[3].'" style="position:absolute;z-index:31;width:47px;height:65px;border:1px solid red;margin-top:-27px;margin-left:10px;overflow:visible;"></div><div class="coordinate_display" style="width:100%;height:20px;overflow:visible"><div id="'.$row_initial.'" style="float:left">'.$row_initial.'</div><div id="'.$cell_initial.'" style="float:left;">'.$cell_initial.'</div><div id="'.$subset_array[3].'" style="float:left;">'.$subset_array[3].'</div></div></div>

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
             echo '<div class="border" style="width:'.$border_setting.'px;height:'.$right_left_border_height.'px;float:left;padding-left:10px;background-color:#303030;background-image:url(\'img/tree.png\');background-repeat:repeat-y;"></div>';//Right
             echo '<div class="border" style="width:'.$top_bottom_border_width.';height:'.$border_setting.'px;margin-top:40px;padding-top:10px;background-color:#303030;clear:both;position:relative;z-index:34;background-image:url(\'img/tree.png\');background-repeat:repeat-x;"></div>';//Bottom
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
<!-- 
Key Codes

W === 119;
s === 115;
d === 100;
a === 97;

-->



<?php

             /*


                   0 => "A",
                   1 => "B",
                   2 => "C",
                   3 => "D"


             Move up from C and the only possibility would be to change from index 2 to 0; Move up from A and the only possibilty will be to go to C thus moving index from 0 to 2; 
             Need to determine first what is the index, the row, and the column count...however column count will not be necessary for the up and down actions. 
             Sub 2 if index value = 2 while pressing the up key/Add 2 if index value = 0 while pressing the up key;

             Move up from D and the only possibility would be to change from index 3 to 1; Move up from B and the only possibility will be to go to D thus moving index from 1 to 3;
             Need to determine first what is the index, the row, and the column count...however column count will not be necessary for the up and down actions.
             Sub 2 if index value = 3 while pressing the up key/Add 2 if index value = 1 while pressing the up key;

             Move left from C and the only possibility is to change the index to D thus 2 to 3; Move left from D and the only possibility is to change the index to C thus 3 to 2; 
             Sub 1 if index value = 3 while pressing the left key/Add 1 if index value = 2 while pressing the right key;

             Move left from B and the only possibility is to change the index to A thus 1 to 0; Move left from A and the only possibility is to change the index to B thus 0 to 1;
             Sub 1 if index value = 1 while pressing the left key/Add 1 if index value = 0 while pressing the right key;


             Kahn Academy, Cosera, Harvard Princeton Network Studies;

             */



?>
<script>
var test_coordinate = document.getElementById('12Cinner');
var test_coordinate02 = document.getElementById('44Ainner');

var character_location = document.getElementById('14A');
var boulder_location = document.getElementById('14C');


test_coordinate.style.backgroundColor = "red";
test_coordinate02.style.backgroundColor = "blue";

character_location.style.backgroundImage = "url('img/test_image.png')";
character_location.style.backgroundSize = "50px 65px";

boulder_location.innerHTML = "<img src='img/boulder.png' />";
boulder_location.style.backgroundSize = "100px 100px";
boulder_location.style.overflow = "visible";


var subset_array = [

 "A",
 "B",
 "C",
 "D"

];

var row_current = [

 1,
 2, 
 3,
 4

];


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

                var red_box_01 = document.getElementsByClassName("character_placement");
                var l;
                for(l = 0; l < red_box_01.length; l++){


                red_box_01[l].style.border = "1px solid red";
                red_box_01[l].style.height = "65px";
                red_box_01[l].style.width = "47px";
                                                      }
                var coordinate_display = document.getElementsByClassName("coordinate_display");
                var m;
                for(m = 0; m < coordinate_display.length; m++){

                coordinate_display[m].style.display = "inline-block";
                }           

                var border_01 = document.getElementsByClassName("border");
                var p;
                for(p = 0; p < border_01.length; p++){

                border_01.style.backgroundColor = "#303030";

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
                

                var red_box = document.getElementsByClassName("character_placement");
                var k;
                for (k = 0; k < red_box.length; k++){


                red_box[k].style.border = "none";
                red_box[k].style.height = "67px";
                red_box[k].style.width = "49px";


                                                    }

                var coordinate_display_01 = document.getElementsByClassName("coordinate_display");
                var n;
                for(n = 0;n < coordinate_display_01.length;n++){

                coordinate_display_01[n].style.display = "none";

                var border = document.getElementsByClassName("border");
                var o;
                for(o = 0; o < border.length; o++){

                border[o].style.backgroundColor = "transparent";

                }

                }
            }
        }
</script>
<!------------------------------------------------------------------------------>