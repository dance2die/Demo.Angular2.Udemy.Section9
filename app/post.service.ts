import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';
import {Post} from './post';
import {Observable} from "rxjs/Rx";

@Injectable()
export class PostService {
    private _url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http) {
    }
    
    getPosts() : Observable<Post[]> {
        return this._http.get(this._url)
            .map(response => response.json());
    }

    createPost(post: Post) {
        return this._http.post(this._url, JSON.stringify(post))
            .map(response => response.json());
    }
}





