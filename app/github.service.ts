import {Injectable, OnInit} from 'angular2/core';
import {Http} from "angular2/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class GithubService {
    private _userUrl: string = "https://api.github.com/users/octocat";
    private _followerUrl: string = "https://api.github.com/users/octocat/followers";

    constructor(private _http: Http){
    }
    
    getUserFollowers():any {
        var userObservable = this._http.get(this._userUrl)
            .map(response => response.json());
        var followerObservable = this._http.get(this._followerUrl)
            .map(response => response.json());

        return Observable.forkJoin(userObservable, followerObservable)
            .map(joined => new Object({
                user: joined[0],
                followers: joined[1]
            }));
    }
}



