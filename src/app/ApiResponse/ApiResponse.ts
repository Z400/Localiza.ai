export interface ApiResponse<T = undefined>{
   
    message: string | undefined,
    status: string | undefined,
    objeto?: T;

}