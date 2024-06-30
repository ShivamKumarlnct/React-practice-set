import './App.css';
import Navbar from './component/navbar/navbar';
import Destination from './component/destination/destination';
import Home from './component/home/home';
import Middle from './component/middle/middle';
import Footer from './component/footer/footer';
import Review from './component/review/review';
import Question from './component/question/question';
import Subscribe from './component/subscribe/subscribe';
import Portfolio from './component/portfolio/portfolio';
import About from './component/about/about';
import Sign from './component/sign/sign';
import Video from './component/video/video';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar />
        <Home />
        <Middle />
        <Destination />
        <Portfolio />
        <Review />
        <Question />
        <Subscribe />
        <Footer />
      </>
    },
    {
      path: "/about",
      element: <>
        <About />
        <Footer />
      </>
    },{
      path: "/sign",
      element: <>
        <Navbar />
        <Sign/>

      </>
    },{
      path: "/video",
      element: <>
        <Navbar />
        <Video/>

      </>
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
