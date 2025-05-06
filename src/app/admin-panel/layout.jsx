
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { AppsideBar } from '../components/Sidebar';
import CustomBreadcrumb from '../components/CustomBreadcrumb';
import { Bell } from 'lucide-react';
import Image from 'next/image';
import userAvatar from '../../../public/images/userAvatar.png'

export default function Layout({ children }) {
  return (
    <SidebarProvider
      style={{
        '--sidebar-width': '218px',
      }}
    >
      <AppsideBar />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2 px-4 bg-[#FAFAFA]'>
          <SidebarTrigger className="ml-1" />
          <CustomBreadcrumb />
          <div className='flex items-center gap-4 ml-auto'>
          <Bell className="ml-auto h-5 w-5 text-gray-500" />
          <Image src={userAvatar} alt='user-avatar'  className='h-8 w-8 rounded-full'/>
          </div>
        </header>
        <div className='flex flex-1 flex-col gap-4 p-4 pt-0 bg-[#FAFAFA]'>
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
