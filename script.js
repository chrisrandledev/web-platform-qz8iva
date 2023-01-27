function scrollAction(action) {
  console.log('Action: ' + action);
  var iframe = document.getElementById('SiteIframe');
  if (iframe) {
    console.log('iframe');
    iframe = iframe.contentWindow;
  } else {
    iframe = self;
    console.log('self');
  }
  switch (action) {
    case 1:
      window.parent.scrollTo(0, 0);
      break;
    case 2:
      window.parent.scrollTo(0, window.parent.document.body.scrollHeight);
      break;
    case 3:
      if (iframe) {
        iframe.scrollTo(0, 0);
      } else {
        self.scrollTo(0, 0);
      }
      break;
    case 4:
      if (iframe) {
        iframe.scrollTo(0, iframe.document.body.scrollHeight);
      } else {
        self.scrollTo(0, self.document.body.scrollHeight);
      }
      break;
    default:
      console.error('An error occurred.');
  }
}
