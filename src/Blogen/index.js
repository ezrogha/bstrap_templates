import React, { useEffect } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Categories from './pages/Categories'
import Details from './pages/Details'
import Posts from './pages/Posts'
import Users from './pages/Users'
import Profile from './pages/Profile'

export default () => {
  useEffect(() => {
    document.title = "Blogen"
  }, [])
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/blogen/" exact component={Login} />
      <Route path="/blogen/dashboard" component={Dashboard} />
      <Route path="/blogen/categories" component={Categories} />
      <Route path="/blogen/details" component={Details} />
      <Route path="/blogen/posts" component={Posts} />
      <Route path="/blogen/users" component={Users} />
      <Route path="/blogen/profile" component={Profile} />
      <Footer />
    </BrowserRouter>
  )
}
