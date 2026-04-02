import React, { useState } from 'react'; // Add useState
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
 type ColumnDef, // Import this type
 getSortedRowModel, // 1. Import this
 type  SortingState,      // 2. Import this type
} from '@tanstack/react-table';
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react'; // Sort Icons

// Define the Props interface using a Generic <TData>
interface DataTableProps<TData> {
  columns: ColumnDef<TData, any>[];
  data: TData[];
}

// Use a function declaration to support Generics easily in TSX
export function DataTable<TData>({ columns, data }: DataTableProps<TData>) {

  const [sorting, setSorting] = useState<SortingState>([]);


  const table = useReactTable({
    data,
    columns,
    state: {
      sorting, // 4. Connect the state
    },
    onSortingChange: setSorting, // 5. Connect the setter
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(), // 6. Add the sorting engine
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 25,
      },
    },
  });

  return (
    <div className="flex flex-col h-full rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="flex-1 overflow-auto relative">
        <table className="w-full text-left text-sm border-separate border-spacing-0">
          <thead className="sticky top-0 z-10 bg-slate-50 shadow-[inset_0_-1px_0_rgba(0,0,0,0.1)]">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th 
                    key={header.id} 
                    className="px-6 py-4 font-semibold text-slate-600 uppercase tracking-wider bg-slate-50 select-none"
                  >
                    {/* 7. Wrap header content in a clickable div if sorting is enabled */}
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? 'flex items-center gap-2 cursor-pointer hover:text-slate-900'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        
                        {/* 8. Render Sort Icons based on state */}
                        {header.column.getCanSort() && (
                          <div className="text-slate-400">
                            {{
                              asc: <ArrowUp size={14} className="text-sky-600" />,
                              desc: <ArrowDown size={14} className="text-sky-600" />,
                            }[header.column.getIsSorted() as string] ?? <ArrowUpDown size={14} />}
                          </div>
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-slate-100">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4 text-slate-600 whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}