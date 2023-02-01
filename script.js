function scrollAction(action) {
  console.log('Action: ' + action);
  var iframe = document.getElementById('SiteIframe').contentWindow;

  switch (action) {
    case 1:
      window.parent.scrollTo(0, 0);
      break;
    case 2:
      window.parent.scrollTo(0, window.parent.document.body.scrollHeight);
      break;
    case 3:
      //iframe.postMessage(window.parent.scrollTo(0, 0));
      iframe.postMessage('window.parent.scrollTo(0, 0)');
      break;
    case 4:
      iframe.postMessage(window.parent.scrollTo(0, window.scrollHeight));
      break;
    default:
      console.error('An error occurred.');
  }
}
