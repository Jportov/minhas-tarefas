import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Card } from './components/Tarefa/styles'
import EstiloGlobal, { Container } from './styles'
import store from './store'
import Home from './pages/Home/index'
import Cadastro from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />

        <Card />
      </Container>
    </Provider>
  )
}

export default App
