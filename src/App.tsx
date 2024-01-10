
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from "./context/AuthContext";
import Users from './pages/UsersPage'
import UserPosts from './pages/UserPostsPage'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>

        <main>

          <Routes>
            <Route path="/" element={<Navigate to="/login/" />} />
            <Route path='/login/' element={<LoginPage/>}/>
            <Route path='/users/' element={<Users/>}/>
            <Route path="/user/:userId" element={<UserPosts />} />
          </Routes>
    
        </main>

      </AuthProvider>
    </BrowserRouter>


  )
}

export default App
