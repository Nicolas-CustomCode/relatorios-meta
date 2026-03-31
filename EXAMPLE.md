<!DOCTYPE html>

<html class="light" lang="pt-br"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Editorial Intelligence - Relatório de Saldos</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "surface-container": "#eaeff2",
              "outline-variant": "#acb3b7",
              "background": "#f7f9fb",
              "secondary-container": "#d5e3fc",
              "tertiary-dim": "#005f40",
              "error-dim": "#6b0221",
              "on-secondary-fixed-variant": "#4e5c71",
              "surface-container-lowest": "#ffffff",
              "on-secondary-container": "#455367",
              "on-primary-container": "#ffffff",
              "on-surface": "#2c3437",
              "outline": "#747c80",
              "on-tertiary": "#e6ffee",
              "on-tertiary-fixed": "#00452d",
              "tertiary-fixed": "#69f6b8",
              "secondary-fixed-dim": "#c7d5ed",
              "secondary": "#526074",
              "primary-dim": "#0044d0",
              "on-primary-fixed": "#ffffff",
              "tertiary-fixed-dim": "#58e7ab",
              "surface-container-highest": "#dce4e8",
              "inverse-primary": "#6889ff",
              "inverse-on-surface": "#9a9d9f",
              "inverse-surface": "#0b0f10",
              "on-background": "#2c3437",
              "on-secondary": "#f8f8ff",
              "surface-tint": "#004be4",
              "primary-fixed-dim": "#004be4",
              "primary": "#004be4",
              "tertiary": "#006d4a",
              "surface-dim": "#d4dbdf",
              "on-primary": "#f3f2ff",
              "on-tertiary-container": "#005a3c",
              "on-primary-fixed-variant": "#cad3ff",
              "surface-container-low": "#f0f4f7",
              "error-container": "#f97386",
              "surface-bright": "#f7f9fb",
              "secondary-dim": "#465468",
              "surface-variant": "#dce4e8",
              "on-surface-variant": "#596064",
              "surface": "#f7f9fb",
              "on-tertiary-fixed-variant": "#006544",
              "surface-container-high": "#e3e9ed",
              "on-error": "#fff7f7",
              "on-secondary-fixed": "#324053",
              "primary-fixed": "#0356ff",
              "tertiary-container": "#69f6b8",
              "error": "#a8364b",
              "on-error-container": "#6e0523",
              "secondary-fixed": "#d5e3fc",
              "primary-container": "#0356ff"
            },
            fontFamily: {
              "headline": ["Inter"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-background text-on-surface antialiased">
<!-- SideNavBar -->
<aside class="h-screen w-64 fixed left-0 top-0 z-50 bg-[#f0f4f7] dark:bg-slate-950 flex flex-col p-4 gap-2 shadow-[4px_0_24px_-4px_rgba(44,52,55,0.06)]">
<div class="mb-8 px-2 flex items-center gap-3">
<div class="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-white">
<span class="material-symbols-outlined" data-icon="analytics">analytics</span>
</div>
<div>
<h1 class="font-black text-[#2c3437] dark:text-white uppercase tracking-widest text-sm">Curator Pro</h1>
<p class="text-[10px] text-on-surface-variant uppercase tracking-tighter">Enterprise Edition</p>
</div>
</div>
<nav class="flex-1 flex flex-col gap-1">
<a class="flex items-center gap-3 px-4 py-3 text-[#596064] dark:text-slate-400 hover:bg-[#e2e8f0] dark:hover:bg-slate-800 rounded-xl transition-all translate-x-1 duration-200" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="font-medium text-sm tracking-wide">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-800 text-[#004be4] dark:text-white rounded-xl shadow-sm translate-x-1 duration-200" href="#">
<span class="material-symbols-outlined" data-icon="analytics">analytics</span>
<span class="font-medium text-sm tracking-wide">Relatórios</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-[#596064] dark:text-slate-400 hover:bg-[#e2e8f0] dark:hover:bg-slate-800 rounded-xl transition-all translate-x-1 duration-200" href="#">
<span class="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
<span class="font-medium text-sm tracking-wide">Saldos</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-[#596064] dark:text-slate-400 hover:bg-[#e2e8f0] dark:hover:bg-slate-800 rounded-xl transition-all translate-x-1 duration-200" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="font-medium text-sm tracking-wide">Configurações</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-[#596064] dark:text-slate-400 hover:bg-[#e2e8f0] dark:hover:bg-slate-800 rounded-xl transition-all translate-x-1 duration-200" href="#">
<span class="material-symbols-outlined" data-icon="help_outline">help_outline</span>
<span class="font-medium text-sm tracking-wide">Suporte</span>
</a>
</nav>
<div class="mt-auto pt-4 border-t border-outline-variant/10">
<a class="flex items-center gap-3 px-4 py-3 text-[#596064] dark:text-slate-400 hover:bg-[#e2e8f0] dark:hover:bg-slate-800 rounded-xl transition-all" href="#">
<span class="material-symbols-outlined" data-icon="logout">logout</span>
<span class="font-medium text-sm tracking-wide">Logout</span>
</a>
</div>
</aside>
<!-- Main Content Area -->
<main class="ml-64 min-h-screen">
<!-- TopAppBar -->
<header class="sticky top-0 z-40 flex items-center justify-between px-8 py-4 w-full bg-[#f7f9fb] dark:bg-slate-900 font-['Inter'] antialiased text-[#2c3437] dark:text-slate-200">
<div class="flex items-center gap-8">
<h2 class="text-xl font-bold tracking-tight text-[#2c3437] dark:text-white">Editorial Intelligence</h2>
<div class="hidden lg:flex items-center bg-surface-container-low rounded-full px-4 py-2 w-96">
<span class="material-symbols-outlined text-outline" data-icon="search">search</span>
<input class="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-outline" placeholder="Pesquisar contas ou transações..." type="text"/>
</div>
</div>
<div class="flex items-center gap-4">
<div class="flex items-center gap-2 mr-4">
<button class="p-2 text-[#596064] dark:text-slate-400 hover:bg-[#f0f4f7] dark:hover:bg-slate-800 transition-colors rounded-full relative">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<button class="p-2 text-[#596064] dark:text-slate-400 hover:bg-[#f0f4f7] dark:hover:bg-slate-800 transition-colors rounded-full">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</div>
<button class="bg-primary hover:bg-primary-dim text-white px-6 py-2 rounded-xl font-semibold shadow-sm transition-all scale-95 active:duration-150 flex items-center gap-2">
<span class="material-symbols-outlined text-sm" data-icon="refresh">refresh</span>
                    Atualizar
                </button>
<div class="flex items-center gap-3 ml-4 border-l border-outline-variant/20 pl-6">
<div class="text-right">
<p class="text-xs font-bold">Admin User</p>
<p class="text-[10px] text-on-surface-variant">Enterprise Manager</p>
</div>
<img alt="User profile avatar" class="w-10 h-10 rounded-full object-cover ring-2 ring-primary/10" data-alt="Professional headshot of a businessman in a suit against a neutral office background with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_IybrtlWIPV0Eo1eeFmmo7sgqm3AY6iwNndEBVhn-MgC2GSRWkCVcIwfe2rEcVBkhy-MiQq9H_Y3Z3cbMQFJExu-tH3XH2083kqMIXWqICAck0d9T5PrVuplKKYpKIgwMy4Qx0TczuRzhsy0u7IZ217O8m08jF314mlPt2XFvYlQDrbi3n0UV0zoo0-Eys608Ai5HeCv23r27Iwm97MJrcuKfWP4dZT69GRgIMsIgBZj21IWFevQHa0905OXg2_DsIJJFkDYakNQx"/>
</div>
</div>
</header>
<!-- Page Content -->
<div class="p-8 space-y-8">
<!-- Editorial Header Section -->
<div class="flex items-end justify-between">
<div>
<h1 class="text-4xl font-bold text-on-surface tracking-tight leading-none mb-2">Relatório de Saldos</h1>
<p class="text-on-surface-variant font-medium">Visão consolidada das contas e saúde financeira operacional.</p>
</div>
<div class="flex gap-2">
<button class="flex items-center gap-2 px-4 py-2 rounded-xl border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container-low transition-all text-sm font-semibold">
<span class="material-symbols-outlined text-lg" data-icon="filter_list">filter_list</span>
                        Filtros Avançados
                    </button>
<button class="flex items-center gap-2 px-4 py-2 rounded-xl border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container-low transition-all text-sm font-semibold">
<span class="material-symbols-outlined text-lg" data-icon="download">download</span>
                        Exportar CSV
                    </button>
</div>
</div>
<!-- Bento Metrics Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<!-- Summary Card 1: Total Saldo -->
<div class="bg-surface-container-lowest p-6 rounded-xl shadow-[4px_0_24px_-4px_rgba(44,52,55,0.06)] relative overflow-hidden group">
<div class="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-6xl text-primary" data-icon="account_balance">account_balance</span>
</div>
<p class="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Total em Saldo</p>
<h3 class="text-3xl font-black text-on-surface mb-1">R$ 1.248.390,42</h3>
<p class="text-xs text-tertiary font-semibold flex items-center gap-1">
<span class="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
                        +12.5% em relação ao mês anterior
                    </p>
</div>
<!-- Summary Card 2: Contas OK -->
<div class="bg-surface-container-lowest p-6 rounded-xl shadow-[4px_0_24px_-4px_rgba(44,52,55,0.06)] group">
<p class="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Contas OK</p>
<div class="flex items-center justify-between">
<h3 class="text-3xl font-black text-on-surface">03</h3>
<div class="w-12 h-12 bg-tertiary-container/30 rounded-full flex items-center justify-center text-tertiary">
<span class="material-symbols-outlined" data-icon="check_circle" data-weight="fill" style="font-variation-settings: 'FILL' 1;">check_circle</span>
</div>
</div>
<p class="mt-4 text-xs text-on-surface-variant">Todas as contas acima do mínimo estabelecido.</p>
</div>
<!-- Summary Card 3: Contas em Atenção -->
<div class="bg-surface-container-lowest p-6 rounded-xl shadow-[4px_0_24px_-4px_rgba(44,52,55,0.06)] group border-l-4 border-error">
<p class="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Em Atenção</p>
<div class="flex items-center justify-between">
<h3 class="text-3xl font-black text-error">01</h3>
<div class="w-12 h-12 bg-error-container/30 rounded-full flex items-center justify-center text-error">
<span class="material-symbols-outlined" data-icon="warning" data-weight="fill" style="font-variation-settings: 'FILL' 1;">warning</span>
</div>
</div>
<p class="mt-4 text-xs text-on-surface-variant">Conta <span class="font-bold">act_3456...</span> requer recarga imediata.</p>
</div>
<!-- Summary Card 4: Próxima Atualização -->
<div class="bg-primary p-6 rounded-xl shadow-lg shadow-primary/20 text-white relative overflow-hidden">
<div class="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
<p class="text-xs font-bold opacity-80 uppercase tracking-widest mb-4">Status do Sistema</p>
<h3 class="text-xl font-bold mb-2">Sincronizado</h3>
<div class="flex items-center gap-2 text-sm opacity-90">
<span class="material-symbols-outlined text-sm" data-icon="schedule">schedule</span>
                        Última: 14:02:45
                    </div>
<button class="mt-4 w-full bg-white/20 hover:bg-white/30 py-2 rounded-lg text-xs font-bold uppercase transition-colors">
                        Forçar Sync
                    </button>
</div>
</div>
<!-- Main Data Table Container -->
<div class="bg-surface-container-lowest rounded-xl shadow-[0_4px_32px_rgba(0,0,0,0.03)] overflow-hidden">
<div class="px-6 py-5 border-b border-outline-variant/10 flex items-center justify-between">
<h4 class="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Listagem de Saldos Analítica</h4>
<div class="flex gap-4">
<span class="text-xs font-medium text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">Exibindo 4 de 4 registros</span>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container-low/30 text-on-surface-variant">
<th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest">Id da Conta</th>
<th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest">Nome da Campanha</th>
<th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-right">Mínimo</th>
<th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-right">Saldo Atual</th>
<th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-center">Status</th>
<th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest">Atualizado</th>
<th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest">Tipo</th>
<th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-center">Ações</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/5">
<!-- Row 1: Attention -->
<tr class="hover:bg-error-container/5 transition-colors bg-error-container/10">
<td class="px-6 py-5 font-mono text-xs text-on-surface font-medium">act_345603895259228</td>
<td class="px-6 py-5 text-sm font-semibold text-on-surface">Growth Latam Q4</td>
<td class="px-6 py-5 text-sm text-on-surface-variant text-right">R$ 5.000,00</td>
<td class="px-6 py-5 text-sm font-bold text-error text-right">R$ 1.250,50</td>
<td class="px-6 py-5 text-center">
<span class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter bg-error text-on-error">
                                        Atenção
                                    </span>
</td>
<td class="px-6 py-5 text-xs text-on-surface-variant">15/05/2024 14:02</td>
<td class="px-6 py-5">
<span class="text-xs font-medium bg-surface-container text-on-surface-variant px-2 py-1 rounded">Prepaid</span>
</td>
<td class="px-6 py-5 text-center">
<button class="p-2 hover:bg-white rounded-full transition-colors text-outline">
<span class="material-symbols-outlined text-lg" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<!-- Row 2: OK -->
<tr class="hover:bg-surface-container-high transition-colors">
<td class="px-6 py-5 font-mono text-xs text-on-surface-variant">act_838865748651669</td>
<td class="px-6 py-5 text-sm font-semibold text-on-surface">Retargeting Global</td>
<td class="px-6 py-5 text-sm text-on-surface-variant text-right">R$ 10.000,00</td>
<td class="px-6 py-5 text-sm font-bold text-on-surface text-right">R$ 84.320,00</td>
<td class="px-6 py-5 text-center">
<span class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter bg-tertiary-container text-on-tertiary-container">
                                        Ok
                                    </span>
</td>
<td class="px-6 py-5 text-xs text-on-surface-variant">15/05/2024 14:00</td>
<td class="px-6 py-5">
<span class="text-xs font-medium bg-surface-container text-on-surface-variant px-2 py-1 rounded">Postpaid</span>
</td>
<td class="px-6 py-5 text-center">
<button class="p-2 hover:bg-surface-container-low rounded-full transition-colors text-outline">
<span class="material-symbols-outlined text-lg" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<!-- Row 3: OK -->
<tr class="hover:bg-surface-container-high transition-colors">
<td class="px-6 py-5 font-mono text-xs text-on-surface-variant">act_70403442539824</td>
<td class="px-6 py-5 text-sm font-semibold text-on-surface">Branding institutional</td>
<td class="px-6 py-5 text-sm text-on-surface-variant text-right">R$ 2.500,00</td>
<td class="px-6 py-5 text-sm font-bold text-on-surface text-right">R$ 15.100,00</td>
<td class="px-6 py-5 text-center">
<span class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter bg-tertiary-container text-on-tertiary-container">
                                        Ok
                                    </span>
</td>
<td class="px-6 py-5 text-xs text-on-surface-variant">15/05/2024 13:45</td>
<td class="px-6 py-5">
<span class="text-xs font-medium bg-surface-container text-on-surface-variant px-2 py-1 rounded">Prepaid</span>
</td>
<td class="px-6 py-5 text-center">
<button class="p-2 hover:bg-surface-container-low rounded-full transition-colors text-outline">
<span class="material-symbols-outlined text-lg" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<!-- Row 4: OK -->
<tr class="hover:bg-surface-container-high transition-colors">
<td class="px-6 py-5 font-mono text-xs text-on-surface-variant">act_1292176925940732</td>
<td class="px-6 py-5 text-sm font-semibold text-on-surface">Awareness Campaign</td>
<td class="px-6 py-5 text-sm text-on-surface-variant text-right">R$ 50.000,00</td>
<td class="px-6 py-5 text-sm font-bold text-on-surface text-right">R$ 1.147.719,92</td>
<td class="px-6 py-5 text-center">
<span class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter bg-tertiary-container text-on-tertiary-container">
                                        Ok
                                    </span>
</td>
<td class="px-6 py-5 text-xs text-on-surface-variant">15/05/2024 14:01</td>
<td class="px-6 py-5">
<span class="text-xs font-medium bg-surface-container text-on-surface-variant px-2 py-1 rounded">Postpaid</span>
</td>
<td class="px-6 py-5 text-center">
<button class="p-2 hover:bg-surface-container-low rounded-full transition-colors text-outline">
<span class="material-symbols-outlined text-lg" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Table Footer/Pagination -->
<div class="px-6 py-4 bg-surface-container-low/20 flex items-center justify-between border-t border-outline-variant/10">
<p class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Página 1 de 1</p>
<div class="flex gap-2">
<button class="p-2 rounded-lg border border-outline-variant/20 disabled:opacity-30" disabled="">
<span class="material-symbols-outlined text-lg" data-icon="chevron_left">chevron_left</span>
</button>
<button class="p-2 rounded-lg border border-outline-variant/20 disabled:opacity-30" disabled="">
<span class="material-symbols-outlined text-lg" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
<!-- Asymmetric Support Section -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div class="lg:col-span-2 bg-gradient-to-r from-primary to-primary-container p-8 rounded-xl text-white flex items-center justify-between shadow-xl shadow-primary/10">
<div>
<h2 class="text-2xl font-bold mb-2">Precisa de orçamento extra?</h2>
<p class="opacity-80 max-w-md">Solicite uma expansão de crédito ou ajuste os limites mínimos de suas campanhas diretamente com o time financeiro.</p>
<button class="mt-6 bg-white text-primary px-8 py-3 rounded-xl font-bold text-sm hover:bg-on-primary transition-all">Abrir Solicitação</button>
</div>
<div class="hidden md:block">
<span class="material-symbols-outlined text-8xl opacity-20" data-icon="rocket_launch" data-weight="fill" style="font-variation-settings: 'FILL' 1;">rocket_launch</span>
</div>
</div>
<div class="bg-surface-container-lowest p-8 rounded-xl shadow-[4px_0_24px_-4px_rgba(44,52,55,0.06)] border border-outline-variant/5">
<h3 class="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-6">Próximos Vencimentos</h3>
<div class="space-y-6">
<div class="flex items-start gap-4">
<div class="w-2 h-2 rounded-full bg-error mt-1.5"></div>
<div>
<p class="text-xs font-bold text-on-surface">Invoice #8829-1</p>
<p class="text-[10px] text-on-surface-variant">Vence em 2 dias • R$ 12.500,00</p>
</div>
</div>
<div class="flex items-start gap-4">
<div class="w-2 h-2 rounded-full bg-tertiary mt-1.5"></div>
<div>
<p class="text-xs font-bold text-on-surface">Recarga Automática</p>
<p class="text-[10px] text-on-surface-variant">Agendada para 20/05 • R$ 5.000,00</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</body></html>