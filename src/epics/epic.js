import { ofType } from "redux-observable";
import { of } from "rxjs";
import { map, filter, debounceTime, switchMap, catchError } from 'rxjs';
import { searchRequest, searchResult, searchError, changeField } from "../redux/search";
import giveResult$ from "../pseudoServer/GiveResult";

export const changeEpic = actions$ => actions$.pipe(
  ofType(changeField),
  map(o => o.payload.trim()),
  filter(o => o !== ''),
  debounceTime(500),
  map(o => searchRequest(o))
);

export const requestEpic = actions$ => actions$.pipe(
  ofType(searchRequest),
  map(o => o.payload),
  switchMap(o => giveResult$(o).pipe(
    map(o => searchResult(o)),
    catchError(e => of(searchError(e)))
    )),
  
  
);
