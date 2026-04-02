export type Transaction = {
  id: string;
  date: string;
  customer: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
};

export const MOCK_DATA: Transaction[] = [
  { id: '1', date: '2026-03-01', customer: 'TechCorp Solutions', amount: 1250.00, status: 'Paid' },
  { id: '2', date: '2026-03-05', customer: 'Global Logistics', amount: 850.50, status: 'Pending' },
  { id: '3', date: '2026-03-10', customer: 'Arafath Designs', amount: 2100.00, status: 'Paid' },
  { id: '4', date: '2026-03-12', customer: 'Swift Delivery', amount: 450.00, status: 'Overdue' },
  { id: '5', date: '2026-03-15', customer: 'Cloud Systems', amount: 3200.00, status: 'Paid' },
  { id: '5', date: '2026-03-15', customer: 'On Premise Systems', amount: 3200.00, status: 'Paid' },
  { id: '5', date: '2026-03-15', customer: 'WorkStation Systems', amount: 3200.00, status: 'Paid' },
  { id: '5', date: '2026-03-15', customer: 'WorkStation1 Systems', amount: 3200.00, status: 'Paid' },
  { id: '5', date: '2026-03-15', customer: 'WorkStation2 Systems', amount: 3200.00, status: 'Paid' },
  { id: '5', date: '2026-03-15', customer: 'WorkStation3 Systems', amount: 3200.00, status: 'Paid' },
  { id: '5', date: '2026-03-15', customer: 'WorkStation4 Systems', amount: 3200.00, status: 'Paid' },
  { id: '5', date: '2026-03-15', customer: 'WorkStation4 Systems', amount: 3200.00, status: 'Paid' },
  { id: '5', date: '2026-03-15', customer: 'WorkStation5 Systems', amount: 3200.00, status: 'Paid' },
  { id: '5', date: '2026-03-15', customer: 'WorkStation6 Systems', amount: 3200.00, status: 'Paid' },
  { id: '5', date: '2026-03-15', customer: 'WorkStation7 Systems', amount: 3200.00, status: 'Paid' },
  { id: '5', date: '2026-03-15', customer: 'WorkStation8 Systems', amount: 3200.00, status: 'Paid' },
  { id: '5', date: '2026-03-15', customer: 'WorkStation9 Systems', amount: 3200.00, status: 'Paid' },
  { id: '5', date: '2026-03-15', customer: 'WorkStation10 Systems', amount: 3200.00, status: 'Paid' },
];