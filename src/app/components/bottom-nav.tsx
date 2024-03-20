import { History, LayoutDashboard, Settings } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className='h-16 bg-primary rounded-t-xl px-16'>
      <div className='flex h-full items-center text-primary-foreground justify-between'>
        <LayoutDashboard className='h-8 w-8' />
        <History className='h-8 w-8' />
        <Settings className='h-8 w-8' />
      </div>
    </nav>
  );
}
