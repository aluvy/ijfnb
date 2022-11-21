$(()=>{

	// append
	let pathname = window.location.pathname.split("/");
	pathname = pathname[pathname.length - 1];

	let HeaderElem = `<header id="header"></header>`;
	let FooterElem = `<footer id="footer"></footer>`;

	$(document).find("#wrap").prepend(HeaderElem);
	$(document).find("#wrap").append(FooterElem);


	// html
	let Header = `
		<ul class="header__util">
			<li><a href="#">회원가입</a></li>
			<li><a href="#">로그인</a></li>
			<li><a href="#">고객센터</a></li>
		</ul>
		<div class="header__mid__wrap">
			<h1 class="header__logo"><a href="./index.html"><img src="./assets/img/common/logo.png" alt="logo" /></a></h1>
			<div class="header__search">
				<input type="text" />
				<button type="button"></button>
			</div>
			<ul class="header__my">
				<li><a href="#"><p>마이쇼핑</p></a></li>
				<li><a href="#"><p>장바구니</p></a></li>
			</ul>
		</div>
		<nav class="header__gnb__group">
			<div class="gnb__all"><a href="#">전체카테고리</a></div>
			<ul class="header__gnb">
				<li><a href="#">신상품</a></li>
				<li><a href="#">베스트</a></li>
				<li><a href="./ai.html">맞춤식탁</a></li>
				<li><a href="#">선물세트</a></li>
				<li><a href="#">기획전</a></li>
				<li><a href="#">이벤트</a></li>
			</ul>
		</nav>
	`;
	$(document).find("#header").html(Header);
	if( !(pathname.includes("index.html")) ){
		$(document).find(".header__gnb li").eq(2).addClass("active");
	}


	let Footer = `
		<div class="footer__nav__wrap">
			<ul class="footer__nav">
				<li><a href="#">회사소개</a></li>
				<li><a href="#">개인정보처리방침</a></li>
				<li><a href="#">이용약관</a></li>
				<li><a href="#">고객센터</a></li>
			</ul>
		</div>
		<div class="footer__copy__wrap">
			<div class="footer__copy">
				<div class="footer__call">
					<span>02-949-1693</span>
					<a href="#">전화문의</a>
					<a href="#">1:1 FAQ</a>
				</div>
				<div class="footer__info">
					<p>
						<span>상호명: (주)인정에프앤비</span>
						<span>대표자: 김명중</span>
						<span>개인정보보호책임자: 이수연</span>
						<span>사업자등록번호: 217-81-20447</span>
						<span>통신판매업 신고번호: 제 2019-서울강남-04471호</span>
					</p>
					<p>
						<span>06034 서울특별시 강남구 강남대로 636 (신사동) 두원빌딩 9층</span>
					</p>
					<p>
						<a href="#">사업자 정보확인</a>
					</p>
				</div>
			</div>
			<div class="footer__social">
				<p>epost.co.kr</p>
				<div class="social__item social__facebook"><a href="#" target="blank" title="새창으로 열림">페이스북</a></div>
				<div class="social__item social__instagram"><a href="#" target="blank" title="새창으로 열림">인스타그램</a></div>
			</div>
		</div>
	`;

	$(document).find("#footer").html(Footer);
});