import type { Observable } from 'rxjs'

export interface SignInWithEmailAndPassword {
	(email: string, password: string): Observable<void>
}
