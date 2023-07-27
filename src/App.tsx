import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function App() {
  return (
    <main>
      <h1 className='text-3xl font-bold'>Careers programs</h1>
      <form className='flex flex-col max-w-xs mx-4 my-2 gap-y-3'>
        <Label htmlFor='career'>Career</Label>
        <Select>
          <SelectTrigger id='career'>
            <SelectValue placeholder='Select the program career' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='IDS'>Software Engineering</SelectItem>
            <SelectItem value='IND'>Industrial Engineering</SelectItem>
            <SelectItem value='CIV'>Civil Engineering</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger id='program-year'>
            <SelectValue placeholder='Select the program year' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='2016'>2016</SelectItem>
            <SelectItem value='2020'>2020</SelectItem>
          </SelectContent>
        </Select>

        <Label htmlFor='program'>Class Program File</Label>
        <Input type='file' name='program' required />

        <Button variant='outline'>Save</Button>
      </form>
    </main>
  );
}
