import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends RestService {
  endpoint = `${environment.api}/users`;
}