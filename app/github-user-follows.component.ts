import {Component, Input} from 'angular2/core';

@Component({
    selector: 'github-user-followers',
    template: `
        <h2>{{username}}</h2>
        <br />
        <div>
            <h2>Followers</h2>
            <ul>
                <li *ngFor="#follower of followers">
                    {{follower.user.avatar_url}} {{follower.followers.login}}
                </li>
            </ul>
        </div>
    `
})
export class GithubUserFollowersComponent {
    @Input() followers = undefined;
}
