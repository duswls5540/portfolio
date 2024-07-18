$(document).ready(function () {
  /* 마우스 휠 이벤트 */
  $('main> section').on('wheel', function (e) {
    e.preventDefault();
    $('*').css('scroll-behavior', 'none');
    let nav;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      nav = $(this).prev();
    } else {
      nav = $(this).next();
    }

    if (nav.length) {
      let moveTop = nav.offset().top;
      $('html,body').stop().animate({
        scrollTop: moveTop,
      }, 500);
    }
  });
  /* 마우스 휠 이벤트 끝 */

  /* 스크롤이벤트 시작 */
  let sc;
  let sectionI = $('main > section').length;
  let ht = $(window).height();
  $(window).scroll(function () {
    sc = $(window).scrollTop();
    ht = $(window).height();
    for (let i = 0; i < sectionI; i++) {
      if (sc >= ht * i && sc < ht * (i + 1)) {
        $('main>section').eq(i).addClass('on').siblings().removeClass('on');
        if (i <= 1 || i == sectionI - 1) {
          $('nav').removeClass('on');
          $('header').hide();  // 더 빠르게 숨기기
        } else {
          $('nav').addClass('on');
          $('header').show();  // 더 빠르게 보이기
          $('nav ul.lnb li').removeClass('on').eq(i - 2).addClass('on');
        }
      }
    }
  });
  /* 스크롤이벤트 끝 */

  $('nav ul li').click(function () {
    $('*').css('scroll-behavior', 'smooth');
  });

  $('.profile_left .card').hover(
    function () {
      $(this).hide();
      $('.profile_left .pb').show();
    },
    function () {
      $('.profile_left .pb').hide();
      $(this).show();
    }
  );
  let swiper1 = new Swiper(".st1", {
    effect: "cards",
    grabCursor: true,
  });
  let swiper2 = new Swiper(".st2", {
    effect: "cards",
    grabCursor: true,
  });
  let swiper3 = new Swiper(".st3", {
    effect: "cards",
    grabCursor: true,
  });
  /* const stack = [document.querySelector('.stack1'),document.querySelector('.stack2'),document.querySelector('.stack3')];
  const cards = Array.from(stack.children)
    .reverse()
    .filter((child) => child.classList.contains('card'));

  cards.forEach((card) => stack.appendChild(card));

  stack.addEventListener('click', function (e) {
    const card = e.target.closest('.card');
    if (card && card === stack.lastElementChild) {
      card.classList.add('swap');

      setTimeout(() => {
        card.classList.remove('swap');
        stack.insertBefore(card, stack.firstElementChild);
      }, 1200);
    }
  }); */
});