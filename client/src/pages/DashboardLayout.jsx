import Wrapper from '../assets/wrappers/Dashboard'
import React, { createContext, useContext, useState } from 'react'
import { BigSideBar, Navbar, SmallSideBar } from '../components'
import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/users/current-user')
    return data
  } catch (error) {
    return redirect('/')
  }
}

const DashboardContext = createContext()

const DashboardLayout = ({ isDarkThemeEnabled }) => {
  const { userWithoutPassword: user } = useLoaderData()
  const navigate = useNavigate()

  console.log(user)
  const [showSidebar, setShowSidebar] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled)
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    document.body.classList.toggle('dark-theme', newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme)
  }
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  const logoutUser = async () => {
    navigate('/')
    await customFetch.post('/auth/logout')
    toast.success('Logging out')
  }
  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className='dashboard'>
          <SmallSideBar />
          <BigSideBar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}
export const useDashboardContext = () => useContext(DashboardContext)

export default DashboardLayout
