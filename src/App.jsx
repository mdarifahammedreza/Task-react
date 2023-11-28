import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Layout/Home/Home";

function App() {
  const [items, setitems] = useState([]);
  // const [searchword, setSearchword] = useState("");
  const search = (searchTerm) => {
    // setSearchword(searchTerm);
    handleSearch(searchTerm);
  };
  const [searchitem, setsearchitem] = useState({});
  const searchItemCardHandeler = (info) => {
    setsearchitem(info);
  };

  //fetching data
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/Tehnix/c9d53939b2ed600b321fed8e1898f3a7/raw/dfe7adaf6f73e320ae4ed42761d6b50cf25eb569/devices.json"
    )
      .then((response) => response.json())
      .then((data) => setitems(data.devices));
  }, []);

  //search permomance

  const [filteredsearch, setFilteredsearch] = useState({});

  const handleSearch = (searchword) => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchword.toLowerCase())
    );
    setFilteredsearch(filtered);
    console.log(searchword);
  };

  return (
    <>
      <Header
        search={search}
        filteredsearch={filteredsearch}
        searchItemCardHandeler={searchItemCardHandeler}></Header>
      <Home items={items}></Home>
    </>
  );
}

export default App;
