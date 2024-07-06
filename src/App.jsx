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


const video = [
    "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    "https://www.youtube.com/watch?v=O6Xo21L0ybE",
    "https://www.youtube.com/watch?v=jkGIu5BGZXE"
  ];

  const options = [
    { label: 'Download', onClick: () => alert('Download option clicked') },
    { label: 'Share', onClick: () => alert('Share option clicked') },
    { label: 'Add to Playlist', onClick: () => alert('Add to Playlist option clicked') },
  ];
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
      <Video url={video} options={options} />
              <Footer />


      </>
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
