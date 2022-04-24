import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
    // async function fetchData() {
    //     const request = await axios.get(requests.fetchNetflixOriginals);
    //     console.(request.data.results);
    //     return request;
    // }
    // fetchData();

    return (
        <div className="app">
            {/* Navbar */}
            <Nav/>
            {/* Banner */}
            <Banner/>
            <Row
                title="NETFLIX ORIGINALS"
                fetchURL={requests.fetchNetflixOriginals}
                isLargeRow={true}
            />
            <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
            <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
        </div>
    );
}

export default App;
