export function getURL(): string {
  return window.location.href;
}

export function redirectToExternalURL(url:string):void {
  setTimeout(() => {
    window.location.replace(url);
  }, 2000);
}
