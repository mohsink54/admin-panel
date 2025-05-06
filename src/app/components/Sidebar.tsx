'use client';
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { CreditCardIcon, LogOut, LucideHome, SettingsIcon, Users } from 'lucide-react';
import Logo from "../../../public/images/logo.svg"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import { Separator } from '@/components/ui/separator';

// This is sample data.
const data = {
  navMain: [
    {
      title: 'Home',
      url: '/admin-panel',
      icon: () => <LucideHome size={14} />,
    },
    {
      title: 'Users',
      url: '/admin-panel/users',
      icon: () => <Users size={14} />,
    },
    {
      title: 'Payment',
      url: '/admin-panel/payment',
      icon: () => <CreditCardIcon size={14} />,
    },
    {
      title: 'Settings',
      url: '/admin-panel/settings',
      icon: () => <SettingsIcon size={14} />,
    },
  ],
};

export function AppsideBar({ ...props }) {
  const pathname = usePathname();

  return (
    <Sidebar variant='sidebar' {...props} className='border-none w-[218px] shrink-0'>
      {/* Sidebar Header */}
      <SidebarHeader className='bg-white'>
        <SidebarMenu>
          <SidebarMenuItem className='flex items-center justify-center'>
            <Image src={Logo} alt='Logo png'  />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent className='bg-white pt-2'>
        <SidebarGroup>
          <SidebarMenu className='gap-2'>
            {data.navMain.map((item, index) => {
              const isActive = pathname === item.url; 
              return (
                <React.Fragment key={item.title}>
                <SidebarMenuItem
                  key={item.title}
                  className={cn(
                    isActive ? 'bg-black text-white rounded-md' : '',
                    'w-[80%] self-center'
                  )}
                >
                  <SidebarMenuButton
                    className={cn(
                      'text-sm font-medium flex gap-2 items-center',
                      isActive ? 'bg-primary text-white rounded-md' : 'text-[#848484]'
                    )}
                  >
                    {item.icon && item.icon()} 
                    <Link href={item.url} className='font-inter text-sm font-normal'>
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                {index === 2 && <Separator className="my-2 w-[80%] self-center" />}
                </React.Fragment>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className='bg-white flex items-start px-4 gap-0 pb-[40px]'>
        <LogOut size={14} />
      </SidebarFooter>
    </Sidebar>
  );
}