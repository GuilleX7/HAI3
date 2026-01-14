/**
 * Menu Component
 *
 * Side navigation menu using shadcn-uikit Sidebar components.
 */

import React from 'react';
import { useAppSelector, useNavigation, useTranslation, type MenuState, type MenuItem } from '@hai3/react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from '@hai3/uikit';
import { Icon } from '@iconify/react';
import { HAI3LogoIcon } from '@/app/icons/HAI3LogoIcon';
import { HAI3LogoTextIcon } from '@/app/icons/HAI3LogoTextIcon';

export interface MenuProps {
  children?: React.ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ children }) => {
  const menuState = useAppSelector((state) => state['layout/menu'] as MenuState | undefined);
  const { currentScreen, navigateToScreen, currentScreenset } = useNavigation();
  const { t } = useTranslation();
  const { state } = useSidebar();

  const items: MenuItem[] = menuState?.items ?? [];
  const isCollapsed = state === 'collapsed';

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex flex-row items-center gap-2 p-4">
        <HAI3LogoIcon />
        {!isCollapsed && <HAI3LogoTextIcon />}
        <SidebarTrigger className="ml-auto" />
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {items.map((item: MenuItem) => {
            const isActive = item.id === currentScreen;

            return (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  isActive={isActive}
                  onClick={() => navigateToScreen(currentScreenset ?? '', item.id)}
                  tooltip={isCollapsed ? t(item.label) : undefined}
                >
                  {item.icon && (
                    <Icon icon={item.icon} className="w-4 h-4" />
                  )}
                  <span>{t(item.label)}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      {children}
    </Sidebar>
  );
};

Menu.displayName = 'Menu';
