export interface BaseApi<T> {
    statusCode: number;
    data: T;
}