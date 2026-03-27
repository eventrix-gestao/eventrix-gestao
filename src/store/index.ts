import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ModuleId = 'vigilancia'|'beleza'|'formaturas'|'bandas'|'djs'|'decoradores'|'buffet'|'corridas'|'producao'|'inventario'|'livrocaixa'
export type UserRole = 'admin'|'nutricionista'|'proprietario'|'gerente'|'profissional'

export interface User {
  id: string; name: string; email: string; role: UserRole
    activeModules: ModuleId[]
    trialModules: { moduleId: ModuleId; expiresAt: string }[]
  }

  interface AppState {
    user: User | null; currentModule: ModuleId | null
      setUser: (u: User | null) => void
        setCurrentModule: (m: ModuleId | null) => void
          hasAccess: (m: ModuleId) => boolean
            logout: () => void
            }

            export const DEMO_USERS = {
              nutricionista: { id:'1', name:'Dra. Ana Silva', email:'ana@nutri.com', role:'nutricionista' as UserRole, activeModules:['vigilancia'] as ModuleId[], trialModules:[] },
                salao: { id:'2', name:'Studio Beleza', email:'studio@beleza.com', role:'proprietario' as UserRole, activeModules:['beleza','livrocaixa'] as ModuleId[], trialModules:[] },
                  banda: { id:'3', name:'Banda Forró Total', email:'forro@banda.com', role:'profissional' as UserRole, activeModules:['bandas','djs'] as ModuleId[], trialModules:[] },
                    completo: { id:'4', name:'Admin Demo', email:'admin@eventrix.com', role:'admin' as UserRole, activeModules:['vigilancia','beleza','formaturas','bandas','djs','decoradores','buffet','corridas','producao','inventario','livrocaixa'] as ModuleId[], trialModules:[] }
                    }

                    export const useStore = create<AppState>()(
                      persist(
                          (set, get) => ({
                                user: null, currentModule: null,
                                      setUser: (u) => set({ user: u }),
                                            setCurrentModule: (m) => set({ currentModule: m }),
                                                  hasAccess: (m) => { const { user } = get(); if (!user) return false; return user.activeModules.includes(m) },
                                                        logout: () => set({ user: null, currentModule: null })
                                                            }),
                                                                { name: 'eventrix-gestao-store' }
                                                                  )
                                                                  )
