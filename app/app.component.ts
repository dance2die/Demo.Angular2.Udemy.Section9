import {Component} from 'angular2/core';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from "angular2/http";
import {OnInit} from 'angular2/core';
import {GithubService} from './github.service';

@Component({
    selector: 'my-app',
    template: `
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <github-user-followers followers="followers"></github-user-followers>
    `,
    providers: [PostService, GithubService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {
    isLoading = true;   // used for loader icon.
    followers;

    constructor(private _postService: PostService,
        private _githubService: GithubService) {
        // this._postService.createPost({
        //     userId: 1, title: "a", body: "b"
        // });
    }

    ngOnInit():any {
        this._postService.getPosts()
            .subscribe(posts => {
                this.isLoading = false;
                console.log(posts[0].title);
            });

        this._githubService.getUserFollowers()
            .subscribe(followers => {
                this.followers = followers
            });
    }
}