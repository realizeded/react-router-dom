export function isMatch(pathname:string,path:string,exact:boolean,match:any = {}) {
    let beforePath = path;
    if(path.includes(':')) {
        let index = path.indexOf(':');
        path = path.slice(0,index-1);
        exact = false;
    }
    let reg = new RegExp(`^${path}(/.)*`,'i');
    if(exact) {
        reg = new RegExp(`^${path}$`,'i');
    }
    let matches = reg.exec(pathname);
    if(matches) {
        matchParams(pathname,beforePath,path,match);
        return true;
    }
    return false;
  }
  
  function matchParams(pathname:string,path:string,slicePath:string,match:any) {
    let reg = /(:.*)/;
    path = path.replace(slicePath+'/','');
    pathname = pathname.replace(slicePath+'/','');
    let matchs = reg.exec(path);
    if(!matchs) {
        match = {};
        return;
    } 
    let keyMatch = matchs[0].split('/');
    let valueMatch = pathname.split('/');
    keyMatch.forEach((k,i)=>{
        k = k.replace(':','');
        match[k] = valueMatch[i];
    });
  }