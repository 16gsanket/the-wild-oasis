import { BrowserRouter , Routes , Route , Navigate} from "react-router-dom"
import GlobalStyles from './styles/GlobalStyles'
import Dashboard from "./pages/Dashboard"
import Account from "./pages/Account"
import Bookings from "./pages/Bookings"
import Cabins from "./pages/Cabins"
import Login from "./pages/Login"
import Settings from "./pages/Settings"
import Users from "./pages/Users"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./ui/AppLayout"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{

      staleTimer:60*1000,
    }

  }
})

function App() {
  return (

    <QueryClientProvider client={queryClient}>
  
      <ReactQueryDevtools>
      </ReactQueryDevtools>
    <GlobalStyles/>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          
        <Route index element={<Navigate replace to='dashboard' />}/>
        <Route path='dashboard' element={<Dashboard />}/>
        
        <Route path='account' element={<Account />}/>
        <Route path='Bookings' element={<Bookings />}/>
        <Route path='cabins' element={<Cabins />}/>
        <Route path='settings' element={<Settings />}/>
        <Route path='user' element={<Users />}/>
        <Route path='login' element={<Login />}/>
        <Route path='*' element={<PageNotFound />}/>
      
        </Route>
      </Routes>
      
    </BrowserRouter>
    </QueryClientProvider>
    
  )
}

export default App
