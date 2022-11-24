/**/
//1
let arr1 = [1,2,3,];
let [one,two,three,] = arr1

console.log(one)
console.log(two)
console.log(three)

//2 
let arr2 = [1,2,3,];
let sum = 0;
for (let i = 0; i < arr2.length; i++) {
    sum+= arr2[i]
}
console.log(sum)

//3
let arr3 = [1,2,3,]
arr3.push(4,5,)
console.log(arr3)
//4
let names = prompt ('Имя,Фамилия,Возраст');
let [Name,lestName,age] = names.split(',');
console.log(Name)
console.log(lestName)
console.log(age)
