/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FavoritesService {
    /**
     * @param pokemonNames
     * @returns string Success
     * @throws ApiError
     */
    public static getApiFavorites(
        pokemonNames?: Array<string>,
        authHeader?: string,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/favorites',
            query: {
                'pokemonNames': pokemonNames,
            },
            headers: {
                'Authorization': authHeader
            },
        });
    }
    /**
     * @param pokemonName
     * @returns string Success
     * @throws ApiError
     */
    public static postApiFavorites(
        pokemonName?: string,
        authHeader?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/favorites',
            query: {
                'pokemonName': pokemonName,
            },
            headers: {
                'Authorization': authHeader
            },
        });
    }
    /**
     * @param pokemonName
     * @returns boolean Success
     * @throws ApiError
     */
    public static deleteApiFavorites(
        pokemonName: string,
        authHeader?: string,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/favorites/{pokemonName}',
            path: {
                'pokemonName': pokemonName,
            },
            headers: {
                'Authorization': authHeader
            },
        });
    }
}
