export function getURL(): string {
  return window.location.href;
}

export function redirectToExternalURL(url:string):void {
  setTimeout(() => {
    window.location.replace(url);
  }, 2000);
}

export function copyURLToClipBoard():void{
  const URL:any = document.getElementById('shortURL');
  URL.select();
  URL.setSelectionRange(0, 99999);


  document.execCommand('copy');
}
