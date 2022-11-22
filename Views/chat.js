const chating = `<div class="chat__ing"><div class="chat__ing-group"><span></span><span></span><span></span></div></div>`;

const step_gender = {
	category : 'gender',
	ask : ['너무 반가워요!', '전 남자예요! 당신은요?'],
	answer : [
		{ title:"여성", value:"여성", data : "0", class : "", function:"printChat(1000,step_age,1)" },		 // printChat() 3번째 option = 1 일때 step_age.ask 노출
		{ title:"남성", value:"남성", data : "1", class : "", function:"printChat(1000,step_age,2)" }		 // printChat() 3번째 option = 2 일때 step_age.ask2 노출
	],
	class : 'step_gender',
	selection : '1',
	// function : 'printChat(1000, step_age, 1)',
	function : '',
	next : 'step_age',
}

const step_age = {
	category : 'age',
	ask : ['여성 분이시군요!', '실례지만 나이대는 어떻게 되세요?'],				// printChat() 3번째 option = 1 일때 노출
	ask2 : ['저랑 같은 남성 이군요!', '실례지만 나이대는 어떻게 되세요?'],		 // printChat() 3번째 option = 2 일때 노출
	answer : [
		{ title:"10대", value:"10대", data : "0", class : "" },
		{ title:"20대", value:"20대", data : "1", class : "" },
		{ title:"30대", value:"30대", data : "2", class : "" },
		{ title:"40대", value:"40대", data : "3", class : "" },
		{ title:"50대", value:"50대", data : "4", class : "" },
		{ title:"60대 이상", value:"10대", data : "5", class : "" },
	],
	class : 'step_age',
	selection : '1',
	function : 'printChat(1000, step_tall)',
	next : 'step_tall',
}

const step_tall = {
	category : 'tall',
	ask : ['고객님의 키를 알 수 있을까요?'],
	answer : [
		{ title:"130cm 미만", value:"130cm 미만", data : "0", class : "" },
		{ title:"130~139cm", value:"130~139cm", data : "1", class : "" },
		{ title:"140~149cm", value:"140~149cm", data : "2", class : "" },
		{ title:"150~159cm", value:"150~159cm", data : "3", class : "" },
		{ title:"160~169cm", value:"160~169cm", data : "4", class : "" },
		{ title:"170~179cm", value:"170~179cm", data : "5", class : "" },
		{ title:"180~189cm", value:"180~189cm", data : "6", class : "" },
		{ title:"190cm 이상", value:"190cm 이상", data : "7", class : "" },
	],
	class : 'step_tall',
	selection : '1',
	function : 'printChat(1000, step_weight)',
	next : 'step_weight',
}

const step_weight = {
	category : 'weight',
	ask : ['몸무게도 알려주세요!'],
	answer : [
		{ title:"40kg 미만", value:"40kg 미만", data : "0", class : "" },
		{ title:"40~49kg", value:"40~49kg", data : "1", class : "" },
		{ title:"50~59kg", value:"50~59kg", data : "2", class : "" },
		{ title:"60~69kg", value:"60~69kg", data : "3", class : "" },
		{ title:"70~79kg", value:"70~79kg", data : "4", class : "" },
		{ title:"80~89kg", value:"80~89kg", data : "5", class : "" },
		{ title:"90~99kg", value:"90~99kg", data : "6", class : "" },
		{ title:"100kg 이상", value:"100kg 이상", data : "7", class : "" },
	],
	class : 'step_weight',
	selection : '1',
	// function : 'weightResult()',
	function : 'obesityResult()',
	next : 'calories',
}

let step_food = {
	category : 'food',
	ask : ['오늘은 어떤 음식이 땡기시나요?'],
	answer : [
		{ title:"바닷소리가 들리는 지중해 식단", value:"지중해 식단", data : "3", class : "wfull" },
		{ title:"고급 와인과 함께~ 이태리 식단", value:"이태리 식단", data : "5", class : "wfull" },
		{ title:"엘레강스 한 동유럽 풍 식단", value:"동유럽 식단", data : "4", class : "wfull" },
		{ title:"짜짜라!! 호이호이! 중국 식단", value:"중국 식단", data : "2", class : "wfull" },
		{ title:"오이시이~ 깔끔한 일본 식단", value:"일본 식단", data : "1", class : "wfull" },
		{ title:"역시 난 한국인! 한국 식단", value:"한국 식단", data : "0", class : "wfull" },
	],
	class : 'step_food',
	selection : '1',
	function : 'printChat(1000, step_favorit)',
	next : 'step_favorit',
}

const step_favorit = {
	category : 'favorit',
	ask : ['건강한 식단을 원하세요?', '고객님이 선호하는 식단을 선택해주세요!'],
	answer : [
		{ title:"체중을 감량하고 싶어요!", value:"소아비만", data : "0", class : "wfull" },
		{ title:"인스턴트 말고 건강한 음식이 좋아요!", value:"성인비만", data : "1", class : "wfull" },
		{ title:"체력보강! 든든한 식단이 좋아요!", value:"수험생", data : "2", class : "wfull" },
		{ title:"부모님이 해주신 집밥이 먹고 싶어요!", value:"노년", data : "3", class : "wfull" },
	],
	class : 'step_favorit',
	selection : '1',
	function : 'printChat(1000, step_health)',
	next : 'step_health',
}

const step_health = {
	category : 'health',
	ask : ['혹시 어디 불편하신가요?', '현재 고객님 건강에 문제되는 질환 3가지만 선택해주세요!'],
	answer : [
		{ title:"당뇨", value:"당뇨", data : "0", class : "" },
		{ title:"심혈관", value:"심혈관질환", data : "1", class : "" },
		{ title:"간질환", value:"간질환", data : "2", class : "" },
		{ title:"암예방", value:"암예방", data : "3", class : "" },
		{ title:"골다공증", value:"골다공증", data : "4", class : "" },
		{ title:"빈혈", value:"빈혈", data : "5", class : "" },
		{ title:"변비", value:"변비", data : "6", class : "" },
		{ title:"뇌졸증", value:"뇌졸증", data : "7", class : "" },
		{ title:"없음", value:"질환 없음", data : "8", class : "btn__reset" },
	],
	class : 'step_health select-multi',
	selection : '3',
	function : '',
	next : 'end',
}





/**
 * 성별의 고유값을 파라미터로 넣으면 성별이 리턴된다.
 * @param {string} data 
 * @returns "0" => "남"
 */
 const dataToGender = function(data){
	let result = "";
	switch(data){
		case "0" :	result = "남자";		break;
		case "1" :	result = "여자";		break;
		default  :	break;
	}
	return result;
}

/**
 * 성별을 파라미터로 넣으면 성별의 고유값이 리턴된다.
 * @param {string} gender 
 * @returns "남" => "0"
 */
const genderToData = function(gender){
	let result = "";
	switch(gender){
		case "남자" :		result = "0";		break;
		case "여자" :		result = "1";		break;
		default  :	break;
	}
	return result;
}





/**
 * 나이의 고유값을 파라미터로 넣으면 나이가 리턴된다.
 * @param {string} data 
 * @returns "0" => "10대"
 */
const dataToAge = function(data){
	let result = "";
	switch(data){
		case "0" :	result = "10대";		break;
		case "1" :	result = "20대";		break;
		case "2" :	result = "30대";		break;
		case "3" :	result = "40대";		break;
		case "4" :	result = "50대";		break;
		case "5" :	result = "60대 이상";	 break;
		default  :	break;
	}
	return result;
}

/**
 * 나이를 파라미터로 넣으면 나이의 고유값이 리턴된다.
 * @param {string} age 
 * @returns "10대" => "0"
 */
const ageToData = function(age){
	let result = "";
	switch(age){
		case "10대" :		result = "0";		break;
		case "20대" :		result = "1";		break;
		case "30대" :		result = "2";		break;
		case "40대" :		result = "3";		break;
		case "50대" :		result = "4";		break;
		case "60대 이상" :	 result = "5";	 	 break;
		default  :	break;
	}
	return result;
}





/**
 * 키의 고유값을 파라미터로 넣으면 키가 리턴된다.
 * @param {string} data 
 * @returns "0" => "130cm 미만"
 */
 const dataToTall = function(data){
	let result = "";
	switch(data){
		case "0" :	result = "130cm 미만";		 break;
		case "1" :	result = "130~139cm";		break;
		case "2" :	result = "140~149cm";		break;
		case "3" :	result = "150~159cm";		break;
		case "4" :	result = "160~169cm";		break;
		case "5" :	result = "170~179cm";		break;
		case "6" :	result = "180~189cm";		break;
		case "7" :	result = "190cm 이상";		 break;
		default  :	break;
	}
	return result;
}

/**
 * 키를 파라미터로 넣으면 키의 고유값이 리턴된다.
 * @param {string} tall 
 * @returns "130cm 미만" => "0"
 */
const tallToData = function(tall){
	let result = "";
	switch(tall){
		case "130cm 미만" :		 result = "0";		 break;
		case "130~139cm" :		result = "1";		break;
		case "140~149cm" :		result = "2";		break;
		case "150~159cm" :		result = "3";		break;
		case "160~169cm" :		result = "4";		break;
		case "170~179cm" :		result = "5";		break;
		case "180~189cm" :		result = "6";		break;
		case "190cm 이상" :		 result = "7";		 break;
		default  :	break;
	}
	return result;
}





/**
 * 몸무게의 고유값을 파라미터로 넣으면 몸무게가 리턴된다.
 * @param {string} data 
 * @returns "0" => "40kg 미만"
 */
 const dataToWeight = function(data){
	let result = "";
	switch(data){
		case "0" :	result = "40kg 미만";		 break;
		case "1" :	result = "40~49kg";		 	break;
		case "2" :	result = "50~59kg";		 	break;
		case "3" :	result = "60~69kg";		 	break;
		case "4" :	result = "70~79kg";		 	break;
		case "5" :	result = "80~89kg";		 	break;
		case "6" :	result = "90~99kg";		 	break;
		case "7" :	result = "100kg 이상";		 break;
		default  :	break;
	}
	return result;
}

/**
 * 몸무게를 파라미터로 넣으면 몸무게의 고유값이 리턴된다.
 * @param {string} weight 
 * @returns "40kg 미만" => "0"
 */
const weightToData = function(weight){
	let result = "";
	switch(weight){
		case "40kg 미만" :		 result = "0";		  break;
		case "40~49kg" :		 result = "1";		 break;
		case "50~59kg" :		 result = "2";		 break;
		case "60~69kg" :		 result = "3";		 break;
		case "70~79kg" :		 result = "4";		 break;
		case "80~89kg" :		 result = "5";		 break;
		case "90~99kg" :		 result = "6";		 break;
		case "100kg 이상" :		 result = "7";		  break;
		default  :	break;
	}
	return result;
}








/**
 * 비만도의 고유값을 파라미터로 넣으면 비만도가 리턴된다.
 * @param {string} data 
 * @returns "0" => "저체중"
 */
 const dataToObe = function(data){
	let result = "";
	switch(data){
		case "0" :	result = "저체중";		 break;
		case "1" :	result = "정상";		 break;
		case "2" :	result = "비만";		 break;
		case "3" :	result = "고도비만";		 break;
		default  :	break;
	}
	return result;
}

/**
 * 비만도를 파라미터로 넣으면 비만도의 고유값이 리턴된다.
 * @param {string} obe 
 * @returns "저체중" => "0"
 */
const obeToData = function(obe){
	let result = "";
	switch(obe){
		case "저체중" :		  result = "0";		  break;
		case "정상" :		 result = "1";		  break;
		case "비만" :		 result = "2";		  break;
		case "고도비만" :	  result = "3";		  break;
		default  :	break;
	}
	return result;
}








/**
 * 식단의 고유값을 파라미터로 넣으면 식단이 리턴된다.
 * @param {string} data 
 * @returns "0" => "한국 식단"
 */
 const dataToFood = function(data){
	let result = "";
	switch(data){
		case "0" :	result = "한국 식단";		 break;
		case "1" :	result = "일본 식단";		 break;
		case "2" :	result = "중국 식단";		 break;
		case "3" :	result = "지중해 식단";		 break;
		case "4" :	result = "동유럽 식단";		 break;
		case "5" :	result = "이태리 식단";		 break;
		default  :	break;
	}
	return result;
}

/**
 * 식단을 파라미터로 넣으면 식단의 고유값이 리턴된다.
 * @param {string} food 
 * @returns "한국 식단" => "0"
 */
const foodToData = function(food){
	let result = "";
	switch(food){
		case "한국 식단" :		  	  result = "0";		  break;
		case "일본 식단" :		  	  result = "1";		  break;
		case "중국 식단" :		  	  result = "2";		  break;
		case "지중해 식단" :		  result = "3";		  break;
		case "동유럽 식단" :		  result = "4";		  break;
		case "이태리 식단" :		  result = "5";		  break;
		default  :	break;
	}
	return result;
}








/**
 * 건강의 고유값을 파라미터로 넣으면 건강이 리턴된다.
 * @param {string} data 
 * @returns "0" => "소아비만"
 */
 const dataToFavorit = function(data){
	let result = "";
	switch(data){
		case "0" :	result = "소아비만";		 break;
		case "1" :	result = "성인비만";		 break;
		case "2" :	result = "수험생";		 break;
		case "3" :	result = "노년";		 break;
		case "4" :	result = "없음";		 break;
		default  :	break;
	}
	return result;
}

/**
 * 건강을 파라미터로 넣으면 건강의 고유값이 리턴된다.
 * @param {string} favorit 
 * @returns "소아비만" => "0"
 */
const favoritToData = function(favorit){
	let result = "";
	switch(favorit){
		case "소아비만" :		  	  result = "0";		  break;
		case "성인비만" :		  	  result = "1";		  break;
		case "수험생" :		  	  result = "2";		  break;
		case "노년" :		  	  result = "3";		  break;
		case "없음" :		  	  result = "4";		  break;
		default  :	break;
	}
	return result;
}








/**
 * 질병의 고유값을 파라미터로 넣으면 질병이 리턴된다.
 * @param {string} data 
 * @returns "0" => "당뇨"
 */
 const dataToHealth = function(data){
	let result = "";
	switch(data){
		case "0" :	result = "당뇨";		 break;
		case "1" :	result = "심혈관질환";		 break;
		case "2" :	result = "간질환";		 break;
		case "3" :	result = "암예방";		 break;
		case "4" :	result = "골다공증";		 break;
		case "5" :	result = "빈혈";		 break;
		case "6" :	result = "변비";		 break;
		case "7" :	result = "뇌졸증";		 break;
		case "8" :	result = "질환 없음";		 break;
		default  :	break;
	}
	return result;
}

/**
 * 질병을 파라미터로 넣으면 질병의 고유값이 리턴된다.
 * @param {string} health 
 * @returns "당뇨" => "0"
 */
const healthToData = function(health){
	let result = "";
	switch(health){
		case "당뇨" :			result = "0";		  break;
		case "심혈관질환" :		  result = "1";		  break;
		case "간질환" :			result = "2";		  break;
		case "암예방" :			result = "3";		  break;
		case "골다공증" :		 result = "4";		  break;
		case "빈혈" :			result = "5";		  break;
		case "변비" :		  	  result = "6";		  break;
		case "뇌졸증" :		  	  result = "7";		  break;
		case "질환 없음" :		  result = "8";		  break;
		default  :	break;
	}
	return result;
}