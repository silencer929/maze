export class Cell
{
	constructor(row,column,width)
	{
		this.x=row*width;
		this.y=column*width;
		this.row=row;
		this.column=column;
		this.walls=[true,true,true,true];
		this.visited=false;
	}
	draw_cell(cxt,width){
		cxt.beginPath();
		cxt.strokeStyle="white";
			cxt.lineWidth=2;
			// draw the top line
			if(this.walls[0]===true){
				cxt.moveTo(this.x,this.y);
				cxt.lineTo(this.x+width,this.y);
			}

			// draw the  right side line
			if(this.walls[1]===true){
				cxt.moveTo(this.x+width,this.y);
				cxt.lineTo(this.x+width,this.y+width);

			}

			//draw the bottom side line
			if(this.walls[2]===true){
				cxt.moveTo(this.x+width,this.y+width);
				cxt.lineTo(this.x,this.y+width);
			}

			//draw the left side line
			if(this.walls[3]===true){
				cxt.moveTo(this.x,this.y+width);
				cxt.lineTo(this.x,this.y);
			}
			if(this.visited){
				cxt.fillRect(this.x,this.y,width,width);
				cxt.fill();
			}
			cxt.closePath()
			cxt.stroke();
	}
	remove_walls(next){
		var x = this.row - next.row;
		var y = this.column - next.column;
		if(x===1){
			this.walls[3]=false;
			next.walls[1]=false;
		}else if(x===-1){
			this.walls[1]=false;
			next.walls[3]=false;
		}
		if(y===1){
			this.walls[0]=false;
			next.walls[2]=false;
		}
		else if(y===-1){
			this.walls[2]=false;
			next.walls[0]=false;
		}
	}
	highlight(cxt,width){
		if(this.visited){
			cxt.fillStyle="green"
			cxt.fillRect(this.x,this.y,width,width);
			}
	}
}