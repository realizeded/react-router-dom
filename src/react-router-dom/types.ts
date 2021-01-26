export interface RouterComponentLocation {
    pathname:string
}

export interface RouterComponentHistory {
    push(path:string):void
}

export interface RouterComponentMatch {
    params:{
        [key:string]:any
    }
}
export interface RouteComponentProps {
    location:RouterComponentLocation
    history:RouterComponentHistory
    match:RouterComponentMatch
}