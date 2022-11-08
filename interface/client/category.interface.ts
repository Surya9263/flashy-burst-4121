
export interface CIcategory {
    _id:string,
    name:string
}

export interface initialState {
    isLoading:boolean;
    isErro:boolean;
    errorMsg:string;
    categories:Array<CIcategory>
}

