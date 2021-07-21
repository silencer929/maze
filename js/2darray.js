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
		return this.table[row][column];
	}
}