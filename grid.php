<!-- http://legithtml.com/plugins/grid.php -->
<?php


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
    
    .red_background{
        
        
        background-image: url('img/test_image.png');
        background-size: 50px 65px;
    }

    </style>
</head>
<body>
<div style="width:100%;background-color:#ccc;margin-bottom:25px;height:100px;box-sizing:border-box;padding-left:1%;padding-top:5px;">
    <div style="width:20%;float:left;">

    <h4>Show/Hide Grid</h4>
    <select style="width:100%;height:20px;" onchange="OnSelectionChange(this)">
    <option id="on">On</option>
    <option id="off">Off</option>

    </select>
    </div>
    <div style="width:20%;float:left;">
        <!-- Placing column count and row count into div for JS to pull information via id and utilize for calculations. -->
      <?php 
            echo '<div style="width:100%;">';
            echo ' <div id="column_count_"' . $cell_count .' style="float:left;margin-right:25px;margin-left:25px;"><h5>Height of the field: </h5 > '. $cell_count . '</div>'; 
            echo ' <div id="row_count_"' . $row_count . ' style="float:left;"><h5>Width of the field: </h5>' . $row_count . '</div>';
            echo '</div>';
      
      ?> 
        
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
<div style="width:100%;background-color:#ccc;margin-bottom:25px;box-sizing:border-box;padding-bottom:25px;padding-left:1%;padding-top:5px;">
<h3>This grid lays the platform for building a game. The grey outlined boxes represent the actual coordinates that the player's character is sitting whereas the red represent the containers to hold the character image. Right now I have put the character to an offset of the actual grid coordinate.</h3>
</div>
<?php
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

                  <div class="zone_container box box_01 top_box" id="grid_'.$row_initial . '_' . $cell_initial . '_' . $subset_array[0].'_inner" style="border:1px solid grey;height:47px;width:47px;margin-right:1px;float:left;position:relative;z-index:30;overflow:visible"><div class="character_placement" id="grid_'.$row_initial . '_' .$cell_initial . '_' . $subset_array[0].'" style="position:absolute;z-index:31;width:47px;height:65px;border:1px solid red;margin-top:-27px;margin-left:10px;overflow:visible;"></div><div class="coordinate_display" style="width:100%;height:20px;overflow:visible"><div class="" id="grid_'.$row_initial.'" style="float:left;">'.$row_initial.'</div><div id="grid_'.$cell_initial.'" style="float:left;">'.$cell_initial.'</div><div id="grid_'.$subset_array[0].'" style="float:left;">'.$subset_array[0].'</div></div></div>
                  <div class="zone_container box box_01 top_box" id="grid_'.$row_initial . '_' . $cell_initial . '_' .$subset_array[1].'_inner" style="border:1px solid grey;height:47px;width:47px;margin-right:1px;float:left;position:relative;z-index:30;overflow:visible"><div class="character_placement" id="grid_'.$row_initial . '_' . $cell_initial . '_' . $subset_array[1].'" style="position:absolute;z-index:31;width:47px;height:65px;border:1px solid red;margin-top:-27px;margin-left:10px;overflow:visible;"></div><div class="coordinate_display" style="width:100%;height:20px;overflow:visible"><div id="grid_'.$row_initial.'" style="float:left">'.$row_initial.'</div><div id="grid_'.$cell_initial.'" style="float:left;">'.$cell_initial.'</div><div id="grid_'.$subset_array[1].'" style="float:left;">'.$subset_array[1].'</div></div></div><br /><br /><br />
                  <div class="zone_container box box_02 bottom_box" id="grid_'.$row_initial . '_' . $cell_initial . '_' . $subset_array[2].'_inner" style="border:1px solid grey;height:47px;width:47px;margin-right:1px;margin-top:-3px;float:left;position:relative;z-index:30;overflow:visible"><div class="character_placement" id="grid_'.$row_initial . '_' .$cell_initial . '_' . $subset_array[2].'" style="position:absolute;z-index:31;width:47px;height:65px;border:1px solid red;margin-top:-27px;margin-left:10px;overflow:visible;"></div><div class="coordinate_display" style="width:100%;height:20px;overflow:visible"><div id="grid_'.$row_initial.'" style="float:left">'.$row_initial.'</div><div id="grid_'.$cell_initial.'" style="float:left;">'.$cell_initial.'</div><div id="grid_'.$subset_array[2].'" style="float:left;">'.$subset_array[2].'</div></div></div>
                  <div class="zone_container box box_02 bottom_box" id="grid_'.$row_initial . '_' . $cell_initial . '_' . $subset_array[3].'_inner" style="border:1px solid grey;height:47px;width:47px;margin-right:1px;margin-top:-3px;float:left;position:relative;z-index:30;overflow:visible"><div class="character_placement" id="grid_'.$row_initial . '_' . $cell_initial . '_' . $subset_array[3].'" style="position:absolute;z-index:31;width:47px;height:65px;border:1px solid red;margin-top:-27px;margin-left:10px;overflow:visible;"></div><div class="coordinate_display" style="width:100%;height:20px;overflow:visible"><div id="grid_'.$row_initial.'" style="float:left">'.$row_initial.'</div><div id="grid_'.$cell_initial.'" style="float:left;">'.$cell_initial.'</div><div id="grid_'.$subset_array[3].'" style="float:left;">'.$subset_array[3].'</div></div></div>

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

<div id='container'>
    
     <div id="controls">
            
            <h4>Current controls are as follows:</h4>
            <ul>
                
                <li>Press "w" for up.</li>
                <li>Press "s" for down.</li>
                <li>Press "a" for left.</li>
                <li>Press "d" for right.</li>
                
            </ul>
        </div>
        <br/>
        <br/>
        <!--<div id="testing_container"> -->
        <h4>Current character placement</h4>
        <div id="output_box" style="width:50px;height:50px;"></div><br/>
        
        <!-- <h4>Current character placement split</h4>
        <h5>Splits are necessary on the ids so later I can access the indeces of the split and conduct my math.</h5>
        <div id="split_output_box" style="width:50px;height:50px;"></div><br/><br/>
        
        <h4>All grids currently shown</h4>
        <div id="output_grids_id" style="width:100px;border:1px solid red;padding:20px;"></div><br/>
        
        <h4>All grids split by "_"</h4>
        <div id="split_grids_id" style="width:100px;border:1px solid blue;padding:20px;"></div>
        
        <h4>Check scp output</h4>
        <div id='check_scp_output' style='width:100px;height:100px;padding:20px;'></div>-->
        <!-- -->
        <!-- </div>-->


</div>
</body>
<!-- 

JS location for grid controls.

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
<!-- Player Movement Controls -->
<script src="js/player_movement.js"></script>
<!--Debugging -->
<script src="js/debug.js"></script>
<!------------------------------------------------------------------------------>