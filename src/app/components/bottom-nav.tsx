'use client';

import { cn } from '@/lib/utils';
import { Home, Settings, Wallet } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <nav className='h-16 bg-primary rounded-t-xl px-16'>
      <div className='flex h-full items-center text-primary-foreground justify-between'>
        <div>
          <Home className={cn('h-8 w-8', pathname === '/' && 'text-white')} />
          {pathname === '/' && (
            <div className='flex items-center justify-center relative'>
              <div className='w-1 h-1 bg-white rounded-full absolute top-1' />
            </div>
          )}
        </div>
        <Wallet className='h-8 w-8' />
        <Settings className='h-8 w-8' />
      </div>
    </nav>
  );
}
