import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
import Sidebar from "./components/Sidebar";
import HomeLayout from "./layout/HomeLayout";

const API_KEY = "3a0dab825da64786a4d7e9b46e9b91ec";
function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${API_KEY}&city=San+Diego,CA&country=US`;
      const res = await fetch(url);
      const json = await res.json(res);
      setData(json);
      console.log(json);
    };
    fetchData();
  }, []);

  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/">
          <Route index element={<Home data={data} />} />
          <Route path=":date" element={<Details data={data} />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
