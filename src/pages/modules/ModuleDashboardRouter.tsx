import { useParams } from 'react-router-dom'
import VigilanciaDashboard from './vigilancia/Dashboard'
import BelezaDashboard from './beleza/Dashboard'
import GenericDashboard from './GenericDashboard'

export default function ModuleDashboardRouter() {
  const { moduleId } = useParams<{ moduleId: string }>()
  if (moduleId === 'vigilancia') return <VigilanciaDashboard />
  if (moduleId === 'beleza') return <BelezaDashboard />
  return <GenericDashboard />
}
