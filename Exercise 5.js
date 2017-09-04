var numbers;
numbers = new Array();
var sum = 0;

for(var i=0;i<10;i++){
	numbers.push(i);
}

while(numbers.length != 0){
    sum = sum + numbers.pop();
}

console.log(sum);