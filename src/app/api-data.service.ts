import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http: HttpClient) { }

  data(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts')
  }
 adddata(data:any){
      return this.http.post('http://jsonplaceholder.typicode.com/posts',data)
   }

}
