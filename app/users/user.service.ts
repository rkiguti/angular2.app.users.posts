import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private _url = "https://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http){}
    
    getUsers() {
        return this._http.get(this._url)
            .map(res => res.json());
    }

    getUser(id) {
        return this._http.get(this._url + '/' + id)
            .map(res => res.json());
    }

    addUser(user) {
        return this._http.post(this._url, user)
            .map(res => res.json());
    }

    updateUser(user) {
        return this._http.put(this._url + '/' + user.id, user)
            .map(res => res.json());
    }

    deleteUser(id) {
		return this._http.delete(this._url + '/' + id)
			.map(res => res.json());
	}
}