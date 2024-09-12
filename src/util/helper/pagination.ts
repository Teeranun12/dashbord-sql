export class inputPagination {
    page : number;
    size : number;
    constructor( page: number,  size: number) {
        this.page = page;
        this.size = size;
    }
} 

export function paginate<T>(data: T[], pageInput : number , recordPerPage : number) {
    const startIndex = (pageInput - 1) * recordPerPage;
    const lastPage = Math.ceil(data.length / recordPerPage);

    if (pageInput <= 0 || recordPerPage <= 0) {
        pageInput = 1;
        recordPerPage = 9;
      }

    return {
        data : data.slice(startIndex, startIndex + recordPerPage),
        total : data.length,
        page : pageInput,
        lastPage : lastPage,
        recordPerPage : recordPerPage
    }

}
