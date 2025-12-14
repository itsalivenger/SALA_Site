import { Users, Truck, ShoppingBag, AlertCircle } from "lucide-react";
import StatCard from "@/components/Dashboard/StatCard";
import OrdersChart from "@/components/Dashboard/OrdersChart";
import QuickLinks from "@/components/Dashboard/QuickLinks";

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Tableau de Bord</h1>
                    <p className="text-slate-500">Bienvenue sur votre espace d'administration Sala.</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm text-sm text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Système Opérationnel
                </div>
            </div>

            {/* KPI Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Clients"
                    value="1,240"
                    change="12%"
                    isPositive={true}
                    icon={<Users className="w-6 h-6" />}
                    color="blue"
                />
                <StatCard
                    title="Livreurs Actifs"
                    value="45"
                    change="8%"
                    isPositive={true}
                    icon={<Truck className="w-6 h-6" />}
                    color="emerald"
                />
                <StatCard
                    title="Commandes/Jour"
                    value="85"
                    change="24%"
                    isPositive={true}
                    icon={<ShoppingBag className="w-6 h-6" />}
                    color="primary"
                />
                <StatCard
                    title="Plaintes (Ouvertes)"
                    value="3"
                    change="-2"
                    isPositive={true} // Positive because complaints went down
                    icon={<AlertCircle className="w-6 h-6" />}
                    color="rose"
                />
            </div>

            {/* Main Content Area */}
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Charts */}
                <div className="lg:col-span-2 space-y-8">
                    <OrdersChart />
                </div>

                {/* Right Column - Quick Actions & Activity */}
                <div className="space-y-8">
                    <QuickLinks />

                    {/* Recent Activity Mini-List (Mock) */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-lg font-bold text-slate-800 mb-4">Activité Récente</h3>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-start gap-3 pb-3 border-b border-slate-50 last:border-0 last:pb-0">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-slate-700">Nouvelle commande #234{i} reçue</p>
                                        <p className="text-xs text-slate-400">Il y a {i * 15} min</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
