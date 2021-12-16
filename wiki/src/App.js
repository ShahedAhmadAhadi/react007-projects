import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { useEffect, useState } from 'react';
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import ReactPaginate from 'react-paginate'

function App() {
  const [pageNumber, setPageNumber] = useState(1)
  const [search, setSearch] = useState('')
  const [fetchedData, setFetchedData] = useState([])
  let { info, results } = fetchedData
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`
  console.log(info)

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json())
      setFetchedData(data)
    })()
  }, [api])

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">Rick &amp; Morty <span className="text-primary">Wiki</span></h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
        <div className="row">
            <Filters />
          <div className="col-8">
            <div className='row'>
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber} />
    </div>
  );
}

export default App;
