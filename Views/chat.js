const chating = `<div class="chat__ing"><div class="chat__ing-group"><span></span><span></span><span></span></div></div>`;

const step_gender = {
	category : 'gender',
	ask : ['너무 반가워요!', '전 남자예요! 당신은요?'],
	answer : [
		{ title:"여성", value:"여성", data : "여성", class : "", function:"printChat(1000,step_age,1)" },		 // printChat() 3번째 option = 1 일때 step_age.ask 노출
		{ title:"남성", value:"남성", data : "남성", class : "", function:"printChat(1000,step_age,2)" }		 // printChat() 3번째 option = 2 일때 step_age.ask2 노출
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
		{ title:"10대", value:"10대", data : "10대", class : "" },
		{ title:"20대", value:"20대", data : "20대", class : "" },
		{ title:"30대", value:"30대", data : "30대", class : "" },
		{ title:"40대", value:"40대", data : "40대", class : "" },
		{ title:"50대", value:"50대", data : "50대", class : "" },
		{ title:"60대", value:"60대", data : "60대", class : "" },
		{ title:"60대 이상", value:"10대", data : "70대", class : "" },
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
		{ title:"130cm 이하", value:"130cm 이하", data : "130cm 이하", class : "" },
		{ title:"130~140cm", value:"130~140cm", data : "130~140cm", class : "" },
		{ title:"140~150cm", value:"140~150cm", data : "140~150cm", class : "" },
		{ title:"150~160cm", value:"150~160cm", data : "150~160cm", class : "" },
		{ title:"160~170cm", value:"160~170cm", data : "160~170cm", class : "" },
		{ title:"170~180cm", value:"170~180cm", data : "170~180cm", class : "" },
		{ title:"180~190cm", value:"180~190cm", data : "180~190cm", class : "" },
		{ title:"190cm 이상", value:"190cm 이상", data : "190cm 이상", class : "" },
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
		{ title:"40kg 이하", value:"40kg 이하", data : "40kg 이하", class : "" },
		{ title:"40~50kg", value:"40~50kg", data : "40~50kg", class : "" },
		{ title:"50~60kg", value:"50~60kg", data : "50~60kg", class : "" },
		{ title:"60~70kg", value:"60~70kg", data : "60~70kg", class : "" },
		{ title:"70~80kg", value:"70~80kg", data : "70~80kg", class : "" },
		{ title:"80~90kg", value:"80~90kg", data : "80~90kg", class : "" },
		{ title:"90~100kg", value:"90~100kg", data : "90~100kg", class : "" },
		{ title:"100kg 이상", value:"100kg 이상", data : "100kg 이상", class : "" },
	],
	class : 'step_weight',
	selection : '1',
	function : 'weightResult()',
	next : 'calories',
}

let step_food = {
	category : 'food',
	ask : ['오늘은 어떤 음식이 땡기시나요?'],
	answer : [
		{ title:"바닷소리가 들리는 지중해 식단", value:"지중해 식단", data : "지중해 식단", class : "wfull" },
		{ title:"고급 와인과 함께~ 이태리 식단", value:"이태리 식단", data : "이태리 식단", class : "wfull" },
		{ title:"엘레강스 한 동유럽 풍 식단", value:"동유럽 식단", data : "동유럽 식단", class : "wfull" },
		{ title:"짜짜라!! 호이호이! 중국 식단", value:"중국 식단", data : "중국 식단", class : "wfull" },
		{ title:"오이시이~ 깔끔한 일본 식단", value:"일본 식단", data : "일본 식단", class : "wfull" },
		{ title:"역시 난 한국인! 한국 식단", value:"한국 식단", data : "한국 식단", class : "wfull" },
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
		{ title:"체중을 감량하고 싶어요!", value:"체중감량", data : "소아비만", class : "wfull" },
		{ title:"인스턴트 말고 건강한 음식이 좋아요!", value:"건강식", data : "성인비만", class : "wfull" },
		{ title:"체력보강! 든든한 식단이 좋아요!", value:"체력보강", data : "수험생", class : "wfull" },
		{ title:"부모님이 해주신 집밥이 먹고 싶어요!", value:"집밥", data : "노년(장수)", class : "wfull" },
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
		{ title:"당뇨", value:"당뇨", data : "당뇨", class : "" },
		{ title:"심혈관", value:"심혈관질환", data : "심혈관", class : "" },
		{ title:"간질환", value:"간질환", data : "간질환", class : "" },
		{ title:"암예방", value:"암예방", data : "암예방", class : "" },
		{ title:"골다공증", value:"골다공증", data : "골다공증", class : "" },
		{ title:"빈혈", value:"빈혈", data : "빈혈", class : "" },
		{ title:"변비", value:"변비", data : "변비", class : "" },
		{ title:"뇌졸증", value:"뇌졸증", data : "뇌졸증", class : "" },
		{ title:"없음", value:"질환 없음", data : "질환 없음", class : "btn__reset" },
	],
	class : 'step_health select-multi',
	selection : '3',
	function : '',
	next : 'end',
}