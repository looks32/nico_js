// let myName = 'nico'

// console.log('Hello ' + myName);

// myName = 'nicolas'

// console.log('Hello ' + myName);

// let = myName = 'nicolas nono'

// console.log('Hello ' + myName);

// const myName2 = 'nico2'

// console.log('Hello ' + myName);

// myName2 = 'nicolas2'

// console.log('Hello ' + myName);

// const myName2 = 'nico2 nono';

// console.log('Hello ' + myName);

/* 
    let 은 재선언과 수정이 가능
    const는 재선언도 수정도 불가능

    보통 const를 사용하고 변화가 가능한 값에는 let을 쓰는게 일반적
*/

// booleans
// undefined 와 null 은 다르다. 
// undefined 는 정의 되지 않았다는 뜻이고
// null은 인위적으로 값이 없음을 넣은 것이다.

// objects
// const player = {
//     name : 'nico',
//     point : 10,
//     fat : true,
// }

// console.log(player)
// console.log(player.name)
// console.log(player['name']); // 이렇게도 표기가 가능
// player.lastName = 'potato'; //object 추가
// console.log(player)
// player.fat = false; //object 수정
// console.log(player)

// //function
// function sayHello(nameOfPerson, age){
//     console.log('안녕하세요 제 이름은 ' + nameOfPerson + '그리고 제 나이는 ' + age +'입니다.')
// }
 
// sayHello('nico', 10)
// sayHello('nico2', 23)
// sayHello('nico3', 21)

// function plus (firstNum, secondNum){
//     console.log(firstNum + secondNum);
// }

// function divide (a, b){
//     console.log(a / b);
// }

// plus(60, 8)
// divide(98, 20)


// const player2 = {
//     name : 'nico',
//     sayHello : function(otherPersonsName){
//         console.log('hello! ' + otherPersonsName)
//     }
// }

// console.log(player2.name);
// player2.sayHello('lynn');


// const cal = {
// 	add : function (a,b){
// 		console.log(a+b)
// 	},
// 	minus : function (a,b){
// 		console.log(a-b)
// 	},
// 	divi : function (a,b){
// 		console.log(a/b)
// 	}
// }

// cal.add(2,2);
// cal.minus(9,9);
// cal.divi(200,2);

// const age = 96;

// function calKorAge(usaAge){
// 	return usaAge + 2
// 	alert('12') 
//     /* alert를 선언했음에도 실행이 안되는 이유는 상단에서 return을 했기때문, js에서는 return을 하면 function이 종료되는 규칙때문 */ 
// }

// const korAge = calKorAge(age);
// console.log(korAge);

// const manyAge = parseInt(prompt('몇살이셈?'));
// if(isNaN(manyAge) || manyAge < 0){
// 	console.log('양수의 숫자만 적으셈');
// } else if(manyAge < 18){
// 	console.log('님 너무 어리심')
// } else if(manyAge >= 17 && manyAge <= 50){
// 	console.log('술가능')
// } else if(manyAge > 50 && manyAge <= 80){
// 	console.log('운동하세요')
// } else if (manyAge === 100) {
// 	console.log('wow 당신은 지혜롭군요.')
// } else if (manyAge > 80) {
// 	console.log('나이도 많은데 자제하시는게..')
// }

//if(true && true){} == true
//if(true && false){} == false
//if(false && false){} == false
//if(true || false){} == true
//if(false || false){} == false

//else if는 순차적으로 실행되다가 실행 되는 순간 멈추기 때문에 순서도 중요하게 작성해야한다.

// == 자료형을 일치 시킨 후 비교
// === 자료형 변화없이 같은지 비교
// != 두 자료형을 일치 시킨 후  비교
// !== 자료형 변화없이 같은지 비교



const tit1 = document.getElementById('title');
console.log(tit1); //간단하게 확인할 때 사용한다.
console.dir(tit1); //디테일한 정보를 볼 수 있다.

const hellos = document.getElementsByClassName('hello');
const hellos2 = document.querySelector('.hello');
const hellos3 = document.querySelectorAll('.hello');
console.log(hellos) //불러오기는 하지만 배열로 가져온다.
console.log(hellos2) // css 선택자로 1개만 불러온다. 여러개일 경우 맨 처음에 선언된 걸 불러온다.
console.log(hellos3) // 해당하는 class를 모두 불러오지만 배열로 불러온다.



hellos2.style.color = 'red';

function handleTitleClick(){
    hellos2.style.color = 'blue';
}

hellos2.addEventListener('click',handleTitleClick);




let tit2 = document.querySelector('.title2')

function hadleTitleClick(){
	tit2.innerText = 'good'

	const clickedClass = 'clicked';
	// if(tit2.classList.contains(clickedClass)){
	// 	tit2.classList.remove(clickedClass)
	// }else{
	// 	tit2.classList.add(clickedClass)
	// }
	tit2.classList.toggle(clickedClass)
}

// tit2.onclick = hadleTitleClick  // 이 방법보다

tit2.addEventListener('click',hadleTitleClick) // 이 방법을 더 선호하는 이유는 필요없을때 removeEventListener을 할수 있기 때문

//tit2.removeEventListener

function handleWindowResize () {
	document.body.style.backgroundColor = 'tomato'
}

window.addEventListener('resize', handleWindowResize);