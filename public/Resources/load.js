const animationSpeed = 'slow';
const $htmlBody = $('html, body');
const isLocalLink = (url) => url.startsWith('#') || url.startsWith('javascript:');

$htmlBody.hide();

$(document).ready(() => {
  $htmlBody.fadeIn(animationSpeed, () => {
    $('a[href], button[href]').on('click', (event) => {
      const url = $(event.currentTarget).attr('href');
      if (isLocalLink(url)) return;
      event.preventDefault();
      $htmlBody.fadeOut(animationSpeed, () => {
        window.location = url;
      });
    });
  });
});