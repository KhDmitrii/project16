import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BaseHttp {
  baseUrl = 'http://localhost:3000/';

  constructor(public http: HttpClient, public path: string) {}

  private getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }

  private get(url: string = ''): Observable<any> {
    return this.http.get(this.getUrl(url));
  }

  private post(url: string = '', data: any): Observable<any> {
    return this.http.post(this.getUrl(url), data);
  }

  private put(url: string = '', data: any): Observable<any> {
    return this.http.put(this.getUrl(url), data);
  }

  private delete(url: string = ''): Observable<any> {
    return this.http.delete(this.getUrl(url));
  }

  public getAll(): Promise<any[]> {
    return this.get(`${this.path}`).toPromise();
  }

  public postOne(data: any): Promise<any> {
    return this.post(`${this.path}`, data).toPromise();
  }

  public getOneById(id: number): Promise<any> {
    return this.get(`${this.path}/${id}`).toPromise();
  }

  public putOneById(id: number, data: any): Promise<any> {
    return this.put(`${this.path}/${id}`, data).toPromise();
  }

  public deleteOneById(id: number): Promise<any> {
    return this.delete(`${this.path}/${id}`).toPromise();
  }
}
