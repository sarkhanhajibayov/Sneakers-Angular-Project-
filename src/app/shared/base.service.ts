import { throwError } from 'rxjs';

export abstract class BaseService {  
    
    constructor() { }

    protected handleError(error: any) {

    var applicationError = error.headers.get('Application-Error');

    // either application-error in header or model error in body
    if (applicationError) {
      return throwError(applicationError);
    }
    
    return throwError('Server error');
  }
}