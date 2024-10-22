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
import Test from './component/testseries/test';
import CodingLanguages from './component/CodingLanguage/Testpage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const playlist = [
    { id: 1, url: 'https://www.youtube.com/watch?v=HcOc7P5BMi4&t=10s', title: 'HTML' },
    { id: 2, url: 'https://www.youtube.com/watch?v=ESnrn1kAD4E&t=16s', title: 'CSS' },
    { id: 3, url: 'https://www.youtube.com/watch?v=ajdRvxDWH4w&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW', title: 'Java-Script' },
    { id: 4, url: 'https://www.youtube.com/watch?v=vz1RlUyrc3w&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige', title: 'REACT-JS' },
    { id: 5, url: 'https://www.youtube.com/watch?v=hlGoQC332VM', title: 'SQL' },
    { id: 6, url: 'https://www.youtube.com/watch?v=zaLfOjNEOaQ&list=PL8p2I9GklV456iofeMKReMTvWLr7Ki9At', title: 'Node.js' },


  
  ];

  const options = [
    { label: 'Option 1', onClick: () => console.log('Option 1 clicked') },
    { label: 'Option 2', onClick: () => console.log('Option 2 clicked') },
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
        {/* <Navbar /> */}
        <Sign/>

      </>
    },{
      path: "/video",
      element: <>
      <Video playlist={playlist} options={options} />
              <Footer />


      </>
    },{
      path: "/test",
      element: <>
        <Test/>
        
       <Footer />


      </>
    },{
      path: "/codinglanguages",
      element: <>
        <CodingLanguages/>
       <Footer />


      </>
    },
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
