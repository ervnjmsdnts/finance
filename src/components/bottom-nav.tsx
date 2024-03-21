'use client';

import { cn } from '@/lib/utils';
import { Home, Settings, Wallet } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <nav className='h-16 bg-primary rounded-t-xl px-16'>
      <div className='flex h-full items-center text-primary-foreground justify-between'>
        <Link href='/'>
          <Home className={cn('h-8 w-8', pathname === '/' && 'text-white')} />
          {pathname === '/' && (
            <div className='flex items-center justify-center relative'>
              <div className='w-1 h-1 bg-white rounded-full absolute top-1' />
            </div>
          )}
        </Link>
        <Link href='/transaction-history'>
          <Wallet
            className={cn(
              'h-8 w-8',
              pathname === '/transaction-history' && 'text-white',
            )}
          />
          {pathname === '/transaction-history' && (
            <div className='flex items-center justify-center relative'>
              <div className='w-1 h-1 bg-white rounded-full absolute top-1' />
            </div>
          )}
        </Link>
        <Link href='/settings'>
          <Settings
            className={cn('h-8 w-8', pathname === '/settings' && 'text-white')}
          />
          {pathname === '/settings' && (
            <div className='flex items-center justify-center relative'>
              <div className='w-1 h-1 bg-white rounded-full absolute top-1' />
            </div>
          )}
        </Link>
      </div>
    </nav>
  );
}
