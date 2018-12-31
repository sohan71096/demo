function SumAll(...num:number[])
{
	let s:number=0;
	
	for(let data of num){
	s=s+data;
	console.log("Addition of number:"+data);

}
console.log("Sum: "+s);
}
SumAll(1,2,3,4);