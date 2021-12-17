import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { useEffect, useState } from 'react';
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Episodes from './Pages/Episodes';
import Location from './Pages/Locations';
import CardDetails from './components/Cards/CardDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  )
}

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')
  const [species, setSpecies] = useState('')
  const [fetchedData, setFetchedData] = useState([])
  let { info, results } = fetchedData
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
  console.log(info)

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json())
      setFetchedData(data)
    })()
  }, [api])

  return (
    <div className="App">
      <h1 className='text-center mb-4'>Characters</h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
        <div className="row">
            <Filters setSpecies={setSpecies} setGender={setGender} setStatus={setStatus} setPageNumber={setPageNumber} />
          <div className="col-8">
            <div className='row'>
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber} />
    </div>
  );
}

export default App;
