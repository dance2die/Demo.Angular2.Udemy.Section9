import {Component, Input, OnInit} from 'angular2/core';
import {GithubService} from "./github.service";
import {Observable} from "rxjs/Rx";
import {HTTP_PROVIDERS} from "angular2/http";

@Component({
    selector: 'github-user-followers',
    template: `
        <h2>{{user.login}}</h2>
        <img src="{{user.avatar_url}}">
        <br />
        <div>
            <h2>Followers</h2>
            <ul>
                <li *ngFor="#follower of followers">
                    <img src="{{follower.avatar_url}}"> {{follower.login}}
                </li>
            </ul>
        </div>
    `,
    providers: [HTTP_PROVIDERS, GithubService]
})
export class GithubUserFollowersComponent implements OnInit {
    username = "octocat";
    user = {};
    followers = [];

    constructor(private _githubService: GithubService) {
    }

    ngOnInit():any {
        Observable.forkJoin(
            this._githubService.getUser(this.username),
            this._githubService.getFollowers(this.username)
        )
            .subscribe(
                result => {
                    this.user = result[0];
                    this.followers = result[1];
                },
                null,
                () => {}
            );
    }
}
