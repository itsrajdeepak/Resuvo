import React from 'react'
import { Button } from "@/components/ui/button"
import { Outlet,Navigate } from 'react-router-dom'
import './App.css'
import { useUser } from '@clerk/clerk-react'
import Header from './components/custom/Header'


function App() {
  const {user,isLoaded,isSignedIn}= useUser();

  if(!isSignedIn &&isLoaded){
    return  <Navigate to={'/auth/sign-in'}/>
  }
  
  return (
  <>
  <Header/>
  <Outlet/>
  </>
  )
}

export default App


