import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { RootStoreContext } from '@/rootStoreContext'
import RootStore from '@/stores/rootStore'
import MainPage from '@/pages/MainPage'

export default function App() {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:image" element={<MainPage />} />
        </Routes>
      </Router>
    </RootStoreContext.Provider>
  )
}
