import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import {Header,Footer,Home,About,Contact,Github,githubInfoLoader,User} from './components';

// const router = createBrowserRouter([{
//   path: '/',
//   element: <Layout/>,
//   children: [
//     {
//       path: '',
//       element: <Home/>
//     },
//     {
//       path: 'about',
//       element: <About/>
//     },
//     {
//       path: 'contact',
//       element: <Contact/>
//     },
//     {
//       path: 'github',
//       element: <Github/>
//     }
//   ]
// }])

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github/>}/>
      <Route path='user/:id' element={<User/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
