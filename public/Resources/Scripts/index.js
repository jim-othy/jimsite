const smoothScroll = (event) => {
  const target = $(this.hash);
  const $target = $(target);
  const isTargetFocused = $target.is(":focus");
  
  if (target.length && !isTargetFocused) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000, () => {
      $target.attr('tabindex', '-1').focus();
    });
  }
};

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .on('click', (event) => {
    const pathname = location.pathname.replace(/^\//, '');
    const currentPathname = this.pathname.replace(/^\//, '');
    const hostname = location.hostname;
    const currentHostname = this.hostname;

    if (pathname === currentPathname && hostname === currentHostname) {
      smoothScroll(event);
    }
  });