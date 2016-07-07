import {Injectable} from 'angular2/core';
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private _baseUrl: string = "https://api.github.com/users/";

    constructor(private _http: Http){
    }

    getUser(username) {
        return this._http.get(this._baseUrl + username)
            .map(response => response.json());
    }

    getFollowers(username) {
        return this._http.get(this._baseUrl + username + "/followers")
            .map(response => response.json());
    }
}



