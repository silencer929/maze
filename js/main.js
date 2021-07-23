import {Array2d} from "./2darray.js";
import {Cell} from "./cell.js";

var maze= document.querySelector("#maze");
var cxt=maze.getContext("2d");
var grid= new Array2d(30,30);
var width = 20;
var current;
var stack=new Array();
maze.height=600;
maze.width=600;
function generate_coordinates(){
	for(var i=0; i<grid.row;i++){
			for(var j=0; j<grid.column;j++){
				var cell= new Cell(i,j,width)
				grid.setValue(i,j,cell);
			}
		}
	current=grid.getValue(0,0);
}

function draw_grid(){
	for(var i=0; i<grid.row;i++){
		for(var j=0; j<grid.column;j++){
			var cell=grid.getValue(i,j);
		cell.draw_cell(cxt,width),6000;
		}
	}
}
function draw_maze(){
	current.visited=true;
	current.highlight(cxt,width);
	var next= grid.checkNeighbours(current);
	if(next){
		stack.push(current);
		current.remove_walls(next);
		current=next
		draw_maze();
	}
	else{
		if(stack.length>0){
			current=stack.pop();
			draw_maze();
		}
	}
}
document.addEventListener("DOMContentLoaded",()=>{
	generate_coordinates();
	draw_maze()
	draw_grid();
})