import type { ModuleId } from '../store'

  export interface ModuleConfig {
    id: ModuleId; name: string; tagline: string; description: string
        color: string; icon: string; nicho: string; features: string[]
}

export const MODULES: ModuleConfig[] = [
  { id:'vigilancia', name:'Vigilância Sanitária', tagline:'Controle sanitário inteligente', description:'Gestão de tarefas sanitárias entre nutricionistas e estabelecimentos.', color:'#10B981', icon:'🛡️', nicho:'Restaurantes · Pizzarias · Churrascarias', features:['Agenda de tarefas semanais','Upload de fotos como comprovante','3 perfis de usuário','Relatório PDF','Notificações de prazo'] },
  { id:'beleza', name:'Beleza & Serviços', tagline:'Gestão completa do seu salão', description:'Agenda, clientes, profissionais e caixa para salões e barbearias.', color:'#EC4899', icon:'✂️', nicho:'Salões · Barbearias · Manicures', features:['Agenda por profissional','Controle de comissões','Caixa do dia','Histórico de clientes','Relatório mensal'] },
  { id:'formaturas', name:'Formaturas', tagline:'Do ensaio à festa sob controle', description:'Gestão de eventos de formatura: turmas, agenda e financeiro.', color:'#7C3AED', icon:'🎓', nicho:'Produtoras · Cerimonialistas', features:['Cadastro de turmas','Agenda de cerimônias','Contratos digitais','Financeiro da turma','Checklist'] },
  { id:'bandas', name:'Bandas', tagline:'Gerencie sua banda como um pro', description:'Agenda de shows, cachê e rider técnico para bandas.', color:'#EF4444', icon:'🎸', nicho:'Bandas · Músicos · Grupos', features:['Agenda de shows','Divisão de cachê','Rider técnico','Setlist por show','Histórico'] },
  { id:'djs', name:'DJs', tagline:'Sua agenda. Seu negócio.', description:'Controle de agenda, equipamentos e contratos para DJs.', color:'#3B82F6', icon:'🎧', nicho:'DJs · Produtores · VJs', features:['Agenda de eventos','Equipamentos próprios','Contratos','Playlists','Financeiro'] },
  { id:'decoradores', name:'Decoradores', tagline:'Cada detalhe no lugar certo', description:'Catálogo de peças, orçamentos e checklist para decoradores.', color:'#DB2777', icon:'🌸', nicho:'Decoradores · Floristas', features:['Catálogo de peças','Orçamentos','Checklist montagem','Agenda','Financeiro'] },
  { id:'buffet', name:'Buffet', tagline:'Da cozinha ao evento planejado', description:'Cardápios, fichas técnicas e logística para buffets.', color:'#16A34A', icon:'🍽️', nicho:'Buffets · Gastronomia · Catering', features:['Cardápios por evento','Fichas técnicas','Orçamento pax','Equipe de serviço','Checklist'] },
  { id:'corridas', name:'Corridas', tagline:'Organize corridas do início ao fim', description:'Gestão de corridas de rua: inscrições e financeiro.', color:'#EA580C', icon:'🏃', nicho:'Organizadores · Assessores', features:['Cadastro de corridas','Controle de inscrições','Kit do corredor','Patrocinadores','Financeiro'] },
  { id:'producao', name:'Produção de Alimentos', tagline:'Padronize. Controle. Economize.', description:'Fichas técnicas e escala de produção para restaurantes.', color:'#F59E0B', icon:'🍕', nicho:'Pizzarias · Churrascarias · Restaurantes', features:['Fichas técnicas','Custo por prato','Escala de produção','Controle desperdício','Relatório'] },
  { id:'inventario', name:'Inventário de Bens', tagline:'Seu patrimônio sob controle', description:'Controle de ativos empresariais com valor e status.', color:'#8B5CF6', icon:'📦', nicho:'Qualquer empresa com patrimônio', features:['Cadastro de bens','Categorias','Status ativo/baixado','Valor total','Exportação'] },
  { id:'livrocaixa', name:'Livro Caixa', tagline:'Sem nota fiscal simplificado', description:'Lançamentos de compras sem nota fiscal para o contador.', color:'#14B8A6', icon:'📒', nicho:'Pequenas empresas · Comércio', features:['Entradas e saídas','Sem nota fiscal','Foto comprovante','Relatório por categoria','PDF contador'] },
  ]

  export const PLANS = {
    monthly: { label:'Mensal', price:129, period:'/mês' },
        quarterly: { label:'Trimestral', price:350, period:'/3 meses', savings:'Economize R$37' },
            trial: { label:'Trial grátis', price:0, period:'4 dias' }
}
