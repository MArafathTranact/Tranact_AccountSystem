import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight 
} from 'lucide-react';

const TablePagination: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50 rounded-b-xl gap-4 w-full">
      
      {/* 1. Records Info Block */}
      <div className="flex items-center gap-2 text-sm text-slate-600">
        <span className="hidden md:inline text-slate-400">Total</span>
        
        <span className="font-semibold text-slate-900">100</span>
        <span className="hidden md:inline text-slate-400 whitespace-nowrap">records</span>
      </div>

      {/* 2. Controls Center Block */}
      <div className="flex items-center gap-1">
     

        {/* Previous Page */}
        <button className="p-2 rounded-md border border-slate-200 bg-white text-slate-400 cursor-not-allowed transition-colors">
          <ChevronLeft size={18} />
        </button>


        {/* Next Page */}
        <button className="p-2 rounded-md border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors">
          <ChevronRight size={18} />
        </button>

      </div>

      {/* 3. Settings Block */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-500 font-medium whitespace-nowrap">Lines per page:</span>
        <select className="text-sm border border-slate-300 rounded-md px-2 py-1.5 bg-white outline-none focus:ring-2 focus:ring-sky-500 hover:border-slate-400 transition-all cursor-pointer">
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>
      </div>
    </div>
  );
};

export default TablePagination;


// import React from 'react';
// import {type Table } from '@tanstack/react-table';
// import { 
//   ChevronLeft, 
//   ChevronRight, 
//   ChevronsLeft, 
//   ChevronsRight 
// } from 'lucide-react';

// interface TablePaginationProps {
//   table: Table<any>;
// }

// const TablePagination: React.FC<TablePaginationProps> = ({ table }) => {
//   return (
//     <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50 rounded-b-xl gap-4">
//       {/* Page Info */}
//       <div className="flex items-center gap-2 text-sm text-slate-600">
//         {/* <span>Page</span>
//         <span className="font-semibold text-slate-900">
//           {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
//         </span>
//         <span className="text-slate-400">|</span> */}
//         <span>{table.getFilteredRowModel().rows.length} Total Records</span>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex items-center gap-1">
//         <PaginationButton
//           onClick={() => table.setPageIndex(0)}
//           disabled={!table.getCanPreviousPage()}
//           icon={<ChevronsLeft size={18} />}
//         />
//         <PaginationButton
//           onClick={() => table.previousPage()}
//           disabled={!table.getCanPreviousPage()}
//           icon={<ChevronLeft size={18} />}
//         />
        
//         {/* Page Jump Input (Optional but helpful for large datasets) */}
//         <input
//           type="number"
//           defaultValue={table.getState().pagination.pageIndex + 1}
//           onChange={e => {
//             const page = e.target.value ? Number(e.target.value) - 1 : 0;
//             table.setPageIndex(page);
//           }}
//           className="w-12 border border-slate-300 rounded p-1 text-center text-sm mx-2 focus:ring-2 focus:ring-sky-500 outline-none"
//         />

//         <PaginationButton
//           onClick={() => table.nextPage()}
//           disabled={!table.getCanNextPage()}
//           icon={<ChevronRight size={18} />}
//         />
//         <PaginationButton
//           onClick={() => table.setPageIndex(table.getPageCount() - 1)}
//           disabled={!table.getCanNextPage()}
//           icon={<ChevronsRight size={18} />}
//         />
//       </div>

//       {/* Page Size Selector */}
//       <div className="flex items-center gap-2">
//         <span className="text-sm text-slate-600 font-medium">Show:</span>
//         <select
//           value={table.getState().pagination.pageSize}
//           onChange={e => table.setPageSize(Number(e.target.value))}
//           className="text-sm border border-slate-300 rounded-md px-2 py-1.5 bg-white outline-none focus:ring-2 focus:ring-sky-500 transition-all cursor-pointer"
//         >
//           {[5,10, 25, 50, 100].map(pageSize => (
//             <option key={pageSize} value={pageSize}>
//               {pageSize}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// // Internal Helper Button Component
// const PaginationButton = ({ onClick, disabled, icon }: { onClick: () => void, disabled: boolean, icon: React.ReactNode }) => (
//   <button
//     onClick={onClick}
//     disabled={disabled}
//     className="p-2 rounded-md hover:bg-slate-200 text-slate-700 disabled:opacity-25 disabled:hover:bg-transparent transition-colors border border-transparent hover:border-slate-300"
//   >
//     {icon}
//   </button>
// );

// export default TablePagination;