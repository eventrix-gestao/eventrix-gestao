import { Routes, Route, Navigate } from 'react-router-dom'
import { useStore } from './store'
import LandingPage from './pages/landing/LandingPage'
import LoginPage from './pages/auth/LoginPage'
import HomePage from './pages/home/HomePage'
import ModuleLayout from './components/layout/ModuleLayout'
import ModuleDashboardRouter from './pages/modules/ModuleDashboardRouter'
import GenericDashboard from './pages/modules/GenericDashboard'

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const user = useStore(s => s.user)
    return user ? <>{children}</> : <Navigate to="/login" replace />
    }

    export default function App() {
      return (
          <Routes>
                <Route path="/" element={<LandingPage />} />
                      <Route path="/login" element={<LoginPage />} />
                            <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
                                  <Route path="/modulo/:moduleId" element={<PrivateRoute><ModuleLayout /></PrivateRoute>}>
                                          <Route index element={<ModuleDashboardRouter />} />
                                                  <Route path="empresas" element={<GenericDashboard />} />
                                                          <Route path="tarefas" element={<GenericDashboard />} />
                                                                  <Route path="agenda" element={<GenericDashboard />} />
                                                                          <Route path="relatorios" element={<GenericDashboard />} />
                                                                                  <Route path="fotos" element={<GenericDashboard />} />
                                                                                          <Route path="clientes" element={<GenericDashboard />} />
                                                                                                  <Route path="profissionais" element={<GenericDashboard />} />
                                                                                                          <Route path="caixa" element={<GenericDashboard />} />
                                                                                                                  <Route path="financeiro" element={<GenericDashboard />} />
                                                                                                                          <Route path="contratos" element={<GenericDashboard />} />
                                                                                                                                </Route>
                                                                                                                                      <Route path="*" element={<Navigate to="/" replace />} />
                                                                                                                                          </Routes>
                                                                                                                                            )
                                                                                                                                            }
