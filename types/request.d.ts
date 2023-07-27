import { AxiosRequestConfig } from 'axios';
declare function _get<T>(url: string, options?: AxiosRequestConfig): Promise<T>;
declare function _post(url: string, data?: any): Promise<any>;
declare function _postMultiPart(url: string, formData: FormData, options?: AxiosRequestConfig): Promise<any>;
declare function _put(url: string, data?: any): Promise<any>;
declare function _delete<T>(url: string): Promise<T>;
declare function _deleteWithOptions<T>(url: string, options?: AxiosRequestConfig): Promise<T>;
declare function _patch(url: string, data?: any): Promise<any>;
declare const _default: {
    get: typeof _get;
    post: typeof _post;
    postMultiPart: typeof _postMultiPart;
    put: typeof _put;
    delete: typeof _delete;
    deleteWithOptions: typeof _deleteWithOptions;
    patch: typeof _patch;
};
export default _default;
