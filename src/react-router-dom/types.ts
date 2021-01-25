export interface RouterComponentLocation {
    pathname:string
}

export interface RouterComponentHistory {
    push(path:string):void
}
export interface RouteComponentProps {
    location:RouterComponentLocation
    history:RouterComponentHistory
}