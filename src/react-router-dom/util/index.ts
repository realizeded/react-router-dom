export function isMatch(pathname:string,path:string,exact:boolean) {
    let reg = new RegExp(`^${path}(/.)*`,'i');
    if(exact) {
        reg = new RegExp(`^${path}$`,'i');
    }
    let matches = reg.test(pathname);
    if(matches) {
        return true;
    }
    return false;
  }