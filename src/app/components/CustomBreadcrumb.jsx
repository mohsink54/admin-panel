'use client';

import { usePathname } from 'next/navigation';
import { Breadcrumb, BreadcrumbItem, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { LucideHome, SettingsIcon, Users } from 'lucide-react';

const navItems = [
  { title: 'Home', url: '/admin-panel', icon: <LucideHome size={16} /> },
  { title: 'User', url: '/admin-panel/users', icon: <Users size={16} /> },
  { title: 'Settings', url: '/admin-panel/settings', icon: <SettingsIcon size={16} /> },
];

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const CustomBreadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);
  const lastSegment = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : 'Home';

  // Find navigation item
  const navItem = navItems
  .filter((item) => pathname.startsWith(item.url))
  .reduce((prev, curr) => (curr.url.length > prev.url.length ? curr : prev), navItems[0]);


  return (
    <Breadcrumb>
      <BreadcrumbItem>
        {navItem?.icon && <span className="mr-2">{navItem.icon}</span>}
        <BreadcrumbPage>{capitalize(decodeURIComponent(lastSegment))}</BreadcrumbPage>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
