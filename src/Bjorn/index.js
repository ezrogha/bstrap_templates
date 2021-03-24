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
    document.title = "Bjorn"
  }, [])
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/bjorn/" exact component={Login} />
      <Route path="/bjorn/dashboard" component={Dashboard} />
      <Route path="/bjorn/categories" component={Categories} />
      <Route path="/bjorn/details" component={Details} />
      <Route path="/bjorn/posts" component={Posts} />
      <Route path="/bjorn/users" component={Users} />
      <Route path="/bjorn/profile" component={Profile} />
      <Footer />
    </BrowserRouter>
  )
}
