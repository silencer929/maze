	"use strict";
 export class Array2d
{
	constructor(column=0,row=0)
	{
		this.row=row;
		this.column=column
		this.table=new Array(this.row);
		for (var i =0; i<this.table.length; i++) {
			this.table[i]=new Array(this.column);
		}
	}
	setValue(row, column,value){
		this.table[row][column]=value;
	}
	getValue(row, column){
		if(row<0|| row > this.row-1|| column<0|| column>this.column-1){
			return false;
		}
		else{
			return this.table[row][column];
		}
	}
	checkNeighbours(cell){
		var top, right, bottom, left;
		var neighbours=[];
		top= this.getValue(cell.row-1,cell.column);
		right= this.getValue(cell.row,cell.column+1);
		bottom= this.getValue(cell.row+1,cell.column);
		left= this.getValue(cell.row,cell.column-1);
		if(top && top.visited===false){
			neighbours.push(top);
		}
		if(right && right.visited===false){
			neighbours.push(right);
		}
		if(bottom && bottom.visited===false){
			neighbours.push(bottom);
		}
		if(left && left.visited===false){
			neighbours.push(left);
		}
		if(neighbours.length>0){
			var r= Math.floor(Math.random(0)*neighbours.length);
			return neighbours[r];
		}
	}
}