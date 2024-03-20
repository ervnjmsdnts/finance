import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function AddFAB() {
  return (
    <Button size='icon' className='rounded-full absolute bottom-4 right-4'>
      <Plus />
    </Button>
  );
}
