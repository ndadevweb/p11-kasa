import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { HomePage, LodgementPage, AboutPage, ErrorPage } from '../pages/index'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/lodgement/:id',
        caseSensitive: true,
        element: <LodgementPage />
      },
      {
        path: '/about',
        caseSensitive: true,
        element: <AboutPage />
      },
      {
        path: '*', element: <ErrorPage />
      }
    ]
  }
])