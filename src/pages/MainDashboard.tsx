"use client";

import DashboardLayout from '../components/layout';
import { type ColumnDef } from '@tanstack/react-table';
import { DataTable } from '../components/DataTable';
import { type Transaction, MOCK_DATA } from '../data/mockData';
import TablePagination from '../components/TablePagination'; 
import { 
Download
} from 'lucide-react';

function DashBoardContent() {

  
  // 1. Define columns here (outside the component to prevent re-renders)
const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'customer',
    header: 'Customer',
    cell: (info) => <span className="font-bold text-slate-900">{info.getValue<string>()}</span>,
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: (info) => `$${info.getValue<number>().toLocaleString()}`,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: (info) => (
      <span className="px-2 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-medium">
        {info.getValue<string>()}
      </span>
    ),
  },
];


  return (
    <DashboardLayout>
      {/* 1. Main Container: h-full (if DashboardLayout allows) 
          or min-h-[calc(100vh-100px)] to fill the screen 
      */}
      <div className="flex flex-col h-full space-y-4">
        
        {/* 2. Header Section: Shrink-0 ensures it doesn't compress */}
        <div className="shrink-0 flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-800">Recent Transactions</h1>
          <button  className="p-2 rounded-md border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors">
            <Download/>
          </button>
        </div>

        {/* 3. Table Section: flex-1 makes this area grow to fill 
            all space between the header and the footer 
        */}
        <div className="flex-1 overflow-hidden">
      <DataTable columns={transactionColumns} data={MOCK_DATA} />
        </div>

        {/* 4. Footer Section: flex-none ensures it stays exactly its own size at the bottom */}
        <div className="flex-none">
          <TablePagination />
        </div>
        
      </div>
    </DashboardLayout>
  );
}

export const MainDashboard = () => (
  <DashBoardContent />
);