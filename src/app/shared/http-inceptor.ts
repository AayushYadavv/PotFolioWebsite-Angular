import { Injectable} from '@angular/core'
import { HttpEvent,HttpInterceptor,HttpHandler,HttpRequest,HttpEventType } from "@angular/common/http"
import { Observable, from } from 'rxjs'
import { tap } from "rxjs/operators"
import { AuthService } from '../shared/services/auth.service'


@Injectable()
export class HttpInceptor implements  HttpInterceptor {
    constructor(private authServ:AuthService){}
    intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{
        return next.handle(req).pipe(
            tap(res=>{
                if(res.type === HttpEventType.Sent){
                    this.authServ.waiting.next(true)
                    
                    
                }
                if(res.type === HttpEventType.Response){
                    this.authServ.waiting.next(false)

                }
                
            })
        )

    }
}
