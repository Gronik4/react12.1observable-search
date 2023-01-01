import { useSelector, useDispatch } from 'react-redux';
import { changeField } from './redux/search';
import './css/App.css';
import './css/stamp.css';
import { SearchResult } from './components/SearchResult';
import { ShowDiscription } from './components/showDiscription';

function App() {
  const result = useSelector((state) => state.showresult);
  const dispatch = useDispatch();
  function change(evt) {
    const { value } =  evt.target;
    dispatch(changeField(value));
  }
  return (
    <div className="App">
      <ShowDiscription/>
      <input type='search' value={result.search} className='ipt' onChange={change}/> SEARCH 
      <SearchResult data={result}/>
    </div>
  );
}

export default App;
