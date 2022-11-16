
// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', vh+"px");
// // resize
// window.addEventListener("resize", ()=>{
// 	let vh = window.innerHeight * 0.01;
// 	document.documentElement.style.setProperty('--vh', vh+"px");
// })




$(()=>{

	// vh
	let vh = 0;
	const setVh = () => {
		// document.documentElement.style.setProperty('--vh', `${window.outerHeight}px`);
		document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
	};
	window.addEventListener('resize', setVh);
	setVh();

	let pathname = window.location.pathname.split("/");
	pathname = pathname[pathname.length - 1];

	let HeaderElem = `<header id="header"></header>`;
	let NavElem = `<nav id="nav"></nav>`;
	let GnbElem = `<nav id="gnb"></nav>`;
	let FooterElem = `<footer id="footer"></footer>`;
	$(document).find("#wrap").prepend(NavElem);
	$(document).find("#wrap").prepend(HeaderElem);
	$(document).find("#wrap").append(GnbElem);
	
	if( ! ( pathname.includes("ai.html") || pathname.includes("ai-main.html") || pathname.includes("ai-chat-my.html") || pathname.includes("ai-chat-today.html") || pathname.includes("ai-result.html") ) ){
		$(document).find("#wrap").append(FooterElem);
	}

	let Header = `
		<div class="header__nav"><a href="#">메뉴</a></div>
		<h1 class="header__logo"><a href="./index.html"><img src="./assets/img/common/logo.png" alt="logo" /></a></h1>
		<div class="header__cart"><a href="#">장바구니</a></div>
	`;
	$(document).find("#header").html(Header);

	let Nav = `
		<ul class="nav__group">
			<li class="nav__item active"><a href="#">신상품</a></li>
			<li class="nav__item"><a href="#">베스트</a></li>
			<li class="nav__item"><a href="./ai.html">맞춤식탁</a></li>
			<li class="nav__item"><a href="#">선물세트</a></li>
			<li class="nav__item"><a href="#">기획전</a></li>
			<li class="nav__item"><a href="#">이벤트</a></li>
		</ul>
	`;
	$(document).find("#nav").html(Nav);
	if( pathname.includes("ai.html") || pathname.includes("ai-main.html") || pathname.includes("ai-chat-my.html") || pathname.includes("ai-chat-today.html") || pathname.includes("ai-result.html") ){
		$(document).find(".nav__item").removeClass("active");
		$(document).find(".nav__item").eq(2).addClass("active");
	}

	let Footer = `
		<ul class="footer__nav">
			<li><a href="#">인정식탁소개</a></li>
			<li><a href="#">이용약관</a></li>
			<li><a href="#">개인정보처리방침</a></li>
			<li><a href="#">고객센터</a></li>
			<li><a href="#">PC버전</a></li>
		</ul>
		<div class="footer__copy">
			<p>
				<span>(주)인정에프앤비</span>
				<span>대표이사 : 김명중</span>
			</p>
			<p>
				<span>개인정보보호책임자 : 이수연</span>
			</p>
			<p>
				<span>사업자등록번호 : 217-81-20447 <a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=2618123567&amp;apv_perm_no=" target="_blank" class="link">사업자정보 확인</a></span>
			</p>
			<p>
				<span>통신판매업 : 제 2019-서울강남-04471 호</span>
			</p>
			<p>
				<span>주소 : 서울특별시 강남구 강남대로 636 (신사동) 두원빌딩 9층</span>
			</p>

			<p style="margin-top:1rem;">
				<span>팩스 : 02-949-1696</span>
				<span>이메일 : <a href="mailto:fnb0207@hanmail.net">fnb0207@hanmail.net</a></span>
			</p>
			<p>
				<span>고객행복센터 : <a href="tel:02-949-1693">02-949-1693</a></span>
			</p>

			<p style="margin-top:1rem;">
				<span>카카오톡 <a href="#">@인정식탁</a> 친구 추가하고 소식과 혜택을 받아보세요.</span>
			</p>
		</div>
		<ul class="footer__social">
			<li><a href="#" class="social__instagram" target="blank" title="새창으로 열림">인스타그램</a></li>
			<li><a href="#" class="social__facebook" target="blank" title="새창으로 열림">페이스북</a></li>
			<li><a href="#" class="social__blog" target="blank" title="새창으로 열림">네이버 블로그</a></li>
			<li><a href="#" class="social__post" target="blank" title="새창으로 열림">네이버 포스트</a></li>
			<li><a href="#" class="social__youtube" target="blank" title="새창으로 열림">유튜브</a></li>
		</ul>
	`;
	$(document).find("#footer").html(Footer);

	let Gnb = `
		<ul class="gnb__group">
			<li class="gnb__item-home"><a href="#" class="active">home</a></li>
			<li class="gnb__item-ai"><a href="./ai.html">ai</a></li>
			<li class="gnb__item-search"><a href="#">search</a></li>
			<li class="gnb__item-mypage"><a href="#">mypage</a></li>
		</ul>
	`;
	$(document).find("#gnb").html(Gnb);
	if( pathname.includes("ai.html") || pathname.includes("ai-main.html") || pathname.includes("ai-chat-my.html") || pathname.includes("ai-chat-today.html") || pathname.includes("ai-result.html") ){
		$(document).find(".gnb__group a").removeClass("active");
		$(document).find(".gnb__group li").eq(1).find("a").addClass("active");
	}



	$(document).on("click", ".header__nav", function(e){
		e.preventDefault();
	})

	$(document).on("click", ".header__cart", function(e){
		e.preventDefault();
	})

});