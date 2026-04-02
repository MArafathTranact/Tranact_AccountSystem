import { CardSimIcon } from "lucide-react";

export default function DashboardContent() {
return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        
      <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
       <CardSimIcon> </CardSimIcon>
        <p className="text-slate-500 text-sm">Yearly Revenue</p>
        <p className="text-2xl font-bold">$1,450</p>
      </div>
      {/* Add more cards here */}
      <div className="p-6 bg-green rounded-xl shadow-sm border border-slate-200">
        <p className="text-slate-500 text-sm">Yearly Revenue</p>
        <p className="text-2xl font-bold">$1,450</p>
      </div>

      <div className="p-6 bg-blue-500 rounded-xl shadow-sm border border-slate-200">
        <p className="text-slate-500 text-sm">Quarterly Revenue</p>
        <p className="text-2xl font-bold">$450</p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
        <p className="text-slate-500 text-sm">Monthly Revenue</p>
        <p className="text-2xl font-bold">$95</p>
      </div>
      <div className="p-6 bg-amber-600 rounded-xl shadow-sm border border-slate-200">
        <p className="text-slate-500 text-sm">Weekly Revenue</p>
        <p className="text-2xl font-bold">$15</p>
      </div>
      
    </div>
)
}