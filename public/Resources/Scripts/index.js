// Select all links with hashes
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Change focus
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // tabindex for elements not focusable
            $target.focus(); // Set focus
          };
        });
      }
    }
  });