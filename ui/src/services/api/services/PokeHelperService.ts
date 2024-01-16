/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginUserDto } from '../models/LoginUserDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PokeHelperService {
    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiHealth(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/health',
        });
    }
    /**
     * @param requestBody
     * @returns string Success
     * @throws ApiError
     */
    public static putApiLogin(
        requestBody?: LoginUserDto,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
