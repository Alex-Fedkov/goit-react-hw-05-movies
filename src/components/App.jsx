import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "./Loader/Loader";

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MoviesDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  return (
    <div>     
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<><Loader/></>}>
            <Layout />
          </Suspense>}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MoviesDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews/>} />
          </Route>      
          <Route path="*" element={<NotFound />} />
        </Route>        
      </Routes>
    </div>
  );
};
