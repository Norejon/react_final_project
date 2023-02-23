import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import MovieInfo from "./components/MovieInfo";
import Genres from "./components/Genres";
import NotFoundPage from "./components/NotFoundPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'movies/'}/>}/>
                    <Route path={'movies/:id'} element={<MovieInfo/>}/>
                    <Route path={'/:genres/:id'} element={<MovieInfo/>}/>
                </Route>
                <Route path={'/genres'} element={<Genres/>}/>
                <Route path={'/:genre'} element={<MainLayout/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
