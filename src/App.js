import "./App.css";
import Row from "./Row";
import requests from "./requests";
import axios from "./axios";

function App() {
    // async function fetchData() {
    //     const request = await axios.get(requests.fetchNetflixOriginals);
    //     console.(request.data.results);
    //     return request;
    // }
    // fetchData();

    return (
        <div className="App">
            <h1>Hello World! let's build Netflix Clone Front-End Today.</h1>
            <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}/>
            <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
        </div>
    );
}

export default App;
