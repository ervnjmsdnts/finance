import GradualNumber from '@/components/gradual-number';
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
          <GradualNumber endNumber={1000000} />
        </div>
        <div className='bg-card border flex flex-col justify-between p-4 text-white rounded-md'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-2xl font-semibold'>50%</h2>
              <p className='text-sm text-muted-foreground'>Bills</p>
            </div>
            <Button variant='outline' size='icon'>
              <Minus />
            </Button>
          </div>
          <GradualNumber endNumber={500000} className='text-primary self-end' />
        </div>
        <div className='bg-card flex border flex-col justify-between p-4 text-white rounded-md'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-2xl font-semibold'>30%</h2>
              <p className='text-sm text-muted-foreground'>Personal</p>
            </div>
            <Button variant='outline' size='icon'>
              <Minus />
            </Button>
          </div>
          <GradualNumber endNumber={300000} className='text-primary self-end' />
        </div>
        <div className='bg-card flex border flex-col justify-between p-4 text-white rounded-md'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-2xl font-semibold'>20%</h2>
              <p className='text-sm text-muted-foreground'>Savings</p>
            </div>
            <Button variant='outline' size='icon'>
              <Minus />
            </Button>
          </div>
          <GradualNumber endNumber={200000} className='text-primary self-end' />
        </div>
      </div>
    </div>
  );
}
