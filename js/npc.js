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

           var npc_display = 'grid_2_9_A';
           var inner_npc_display = npc_display + "_inner";

           var initial_npc_spawn = document.getElementById(npc_display);
           initial_npc_spawn.className = "character_placement";
           initial_npc_spawn.innerHTML = "<img src='img/boss_man_01.png' />";
           initial_npc_spawn.backgroundSize = "50px 65px";
          
           var inner_npc_display_id = document.getElementById(inner_npc_display);
           inner_npc_display_id.className += " impassable";