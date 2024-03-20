import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';

export default function Home() {
  return (
    <div className='flex flex-col h-full'>
      <div className='flex justify-end'>
        <Button size='icon' variant='secondary'>
          <Plus />
        </Button>
      </div>
      <div className='grid grid-cols-1 flex-grow gap-5'>
        <div className='flex flex-col p-4 items-center justify-center'>
          <p className='text-2xl font-semibold text-primary'>Total Balance</p>
          <p className='text-3xl font-medium'>1,000,000.00 PHP</p>
        </div>
        <div className='bg-card border flex flex-col justify-between p-4 text-white rounded-md'>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-semibold'>50%</h2>
            <Button variant='outline' size='icon'>
              <Minus />
            </Button>
          </div>
          <p className='text-3xl pb-4 text-primary font-medium self-end'>
            500,000.00 PHP
          </p>
        </div>
        <div className='bg-card flex border flex-col justify-between p-4 text-white rounded-md'>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-semibold'>30%</h2>
            <Button variant='outline' size='icon'>
              <Minus />
            </Button>
          </div>
          <p className='text-3xl pb-4 text-primary font-medium self-end'>
            300,000.00 PHP
          </p>
        </div>
        <div className='bg-card flex border flex-col justify-between p-4 text-white rounded-md'>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-semibold'>20%</h2>
            <Button variant='outline' size='icon'>
              <Minus />
            </Button>
          </div>
          <p className='text-3xl pb-4 text-primary font-medium self-end'>
            200,000.00 PHP
          </p>
        </div>
      </div>
    </div>
  );
}
