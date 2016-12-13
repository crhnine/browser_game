// JavaScript source code
/*
 * 
 * NPC Movement Logic and controls
 * 
 * 1. Create timers with randomized time intervals to a set range to fire off functions.
 * 2. When functions are called have npc character move in a direction.
 * 3. Directions that the npc can move in are random between four selections. NPCs have to detect whether the next location is impassable or not just like the player. 
 * 4. Before the NPC can move the four possible directions have to be already detected by this code so that it can know the possible selections. 
 * 
 */

           //Create random movements of npc
           
           /*
            * 
            * NPC movements need to have the possibility of being as complicated as needed i.e. being able to move in all directions to their end point
            * Possible options include:
            * 1. Pull the surrounding possible coordinates to move to and then build math to get character to final location. 
            * 2. Or just handle the movement via math to the final coordinate.
            * 
            * Character starts at 2_9_A and needs to end at 3_10_C
            * As long as program knows beginning location and ending location it can compare the two and handle the math.
            * 
            * Split the current coordinate on id
            * 
            *   var letter_indeces = [
                
                "A",
                "B",
                "C",
                "D"
                ];
            * 
            * 
            *  var movement_possibility = [
            *  
            *  "nan",
            *  "down",
            *  "up",
            *  "left",
            *  "right"
            *  
            *  ]
            * Assign random selector of index in this array to define how the npc is going to move
            * 0-3
            * 
            * 
            * 
            * 
            * 
            * if(npc_location !== end_location){
            * 
            * 
            *               var random_number = (Math.random() * 4 | 0) + 1; 
                            console.log(random_number);
            * 
            * }
            */
           
           var npc_display = 'grid_2_9_A';
           var inner_npc_display = npc_display + "_inner";
           
           var split_npc_display = npc_display.split("_");
           var snd_row = split_npc_display[1];//1, 2, 3, or 4...
           var snd_column = split_npc_display[2];//1, 2, 3, or 4...
           var snd_letter = split_npc_display[3];//A, B, C, or D
           
           var npc_location = snd_row + snd_column + snd_letter;
           console.log("Current npc location: " + npc_location);

           var initial_npc_spawn = document.getElementById(npc_display);
           initial_npc_spawn.className = "character_placement npc npc_location_001";///////MOST RECENT ADDITION. PLAN IS TO HAVE CONCURRENT NPC CLASS AS REFERENCE TO CHECK IF IT EXISTS. SECOND NPC CLASS IS FOR UNIQUE IDENTIFICATION OF CHARACTER.
          
           var inner_npc_display_id = document.getElementById(inner_npc_display);
           inner_npc_display_id.className += " impassable";

           
            var letter_indeces = [
                
                "A",
                "B",
                "C",
                "D"
                ];
                      

           var movement_possibility = [
               "error in assignment",
               "down",
               "up",
               "left",
               "right"
           ];
           
            
            var timerVariance = [
                
                "Specified time is unavailable",
                "13000",
                "16000",
                "8000",
                "12000"                
            ];
            
            
            

                
            
            setInterval(myTimerVariance, 16500);
            
            function myTimerVariance(selectedVariance){
                
                random_number3 = (Math.random() * 4 | 0) + 1;
                console.log("The selected variance from the variance array is: " + timerVariance[random_number3]);
              

                    selectedVariance = timerVariance[random_number3];  
              
                    setTimeout(myTimer, selectedVariance);
                        
                        

                        movement_selection = "";
                        random_number2 = (Math.random() * 4 | 0) + 1;
                        
                        function myTimer(movement_selection){
                           
                        movement_selection = movement_possibility[random_number2];
                        console.log("This is the selected direction for the character: " + movement_selection);
                        
                            return movement_selection;
                        }
                    

            
           
            

           
           if(movement_selection === 1){
               
               
                    //keyCode_A find current container with npc_location_001 class.
                    var find_location = document.getElementsByClassName("npc_location_001");
                    var original_placement = find_location[0].id;
                    console.log("Find originating character placement: " + original_placement);//Display 2
                
                    var split_original_placement = original_placement.split("_");
                    var inner_original_character_placement_id = split_original_placement[0] + "_" + split_original_placement[1] + "_" + split_original_placement[2] + "_" + split_original_placement[3] + "_inner";
                    var iocpid = document.getElementById(inner_original_character_placement_id);
                    console.log("Original inner npc placement: " + inner_original_character_placement_id);
                    //Assign each part of the original placement id to separate parts.
                    //Grid is unnecessary
                    var sop_row = split_original_placement[1];//1, 2, 3, or 4
                    var sop_column = split_original_placement[2];//1, 2, 3, or 4
                    var sop_letter = split_original_placement[3];//A, B, C, or D
                    //No_inner
                    var original_character_placement_id = sop_row + sop_column + sop_letter;
                    
                    console.log("Original placement split: " + split_original_placement);//Display 3
                    console.log("Original placement reformed: " + original_character_placement_id);
                    //Original placement is now in impassable location form and ready to compare. Access original_placement for resetting character position.
           
                if(snd_letter === letter_indeces[0]){//Move Down A ===> C no row change 
                    //
                    //keyCode_down impassable
                    //
                    var impassable_locations_array = [];
                    var find_impassable = document.getElementsByClassName("impassable");//This id will never equal that of character_placement id simply because of _inner
                    
                    var k;
                    var l;
                    var pseudo_array_length_01 = 17;
                    for(k = 0, l = 0;k < find_impassable.length, l < pseudo_array_length_01; k++, l++){
//                            console.log(find_impassable[k].id);
//                            var find_impassable_id = find_impassable[k].id;
//                            var stringify_find_impassable_id = find_impassable_id.toString();
//                            var sfi_id = stringify_find_impassable_id.split("_");
//
//
//                            var impassable_row_initial = sfi_id[1];
//                            var impassable_cell_initial = sfi_id[2];
//                            var impassable_subset_array = sfi_id[3];
//                          
//                            var impassable_locations = impassable_row_initial + impassable_cell_initial + impassable_subset_array;
//                            var string_impassable_locations = impassable_locations.toString();//Ensure impassable locations typing is set to string
//                            impassable_locations_array.push(string_impassable_locations);
//                            console.log("Impassable location array  " + impassable_locations_array[l]);//Display 4
//                            //All impassable locations have been pulled successfully from this script. End for loop impassable
//                            //Format for impassable locations array = 14C, 14D, 24A, 24B, etc...
                            
                            var snd_row_parse = parseInt(snd_row); 
                            var snd_column_parse = parseInt(snd_column);
                            
                            var new_snd_row = snd_row_parse;
                            var new_snd_column = snd_column_parse;
                            var new_snd_letter = letter_indeces[2];
                            
                            var new_snd_row_string = new_snd_row.toString();
                            var new_snd_column_string = new_snd_column.toString();
                            
                            var new_placement = new_snd_row_string + new_snd_column_string + new_snd_letter;
                            var string_new_placement = new_placement.toString();
                            
                            var go_to_new_location = "grid_" + new_snd_row + "_" + new_snd_column + "_" + new_snd_letter;//ID for new location if permitted.
                            var new_inner_location_id = "grid_" + new_snd_row + "_" + new_snd_column + "_" + new_snd_letter + "_inner";
                            var nilid = document.getElementById(new_inner_location_id);
                            var change_original = document.getElementById(original_placement);                           
                            var change_new = document.getElementById(go_to_new_location);
                            
//                            change_original.classList.remove("impassable");
//                            change_new.classList.add("impassable");
                            console.log("The original location class list: " + change_original.classList);
                            console.log("The new location class list: " + change_new.classList);
                            console.log("The original inner location class list: " + iocpid.classList);//Contains impassable location so remove it
                            console.log("The new inner location class list: " + nilid.classList);//Needs impassable location so add it
                            
                            
                            iocpid.classList.remove("impassable");
                            nilid.classList.add("impassable");
                            
                            if(impassable_locations_array.indexOf(string_new_placement) > -1){
                                
                                change_original.className = "character_placement impassable npc_location_001";
                                if(change_new === null){

                                }
                                else{
                                change_new.className = "character_placement";
                                }
                                console.log("The conditional on D to C is stating that the impassable array has the value of the next coordinate somewhere.");
                            }
                            else{
                                
                                if(change_new === null){
                                
                                    change_new = change_original;
                                    change_original.className = "character_placement impassable npc_location_001";
                                    
                                }else{
                                change_original.className = "character_placement";
                                change_new.className = "character_placement impassable npc_location_001";
                                
                                console.log("We are still waiting to see if impassable locations will be detected...");
                                }
                            }
                      
                       } 
                                   
                }//End letter_indeces[A] down movement to C
                    
                  
                    
                    
                    
                    
                    
                 
       return false; } 
      
        

                
return false;};