/**
 * Header Component
 *
 * Application header with user info display.
 */

import React from 'react';
import { useAppSelector, type HeaderState } from '@hai3/react';
import { Avatar, AvatarImage, AvatarFallback } from '@hai3/uikit';

export interface HeaderProps {
  children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  const headerState = useAppSelector((state) => state['layout/header'] as HeaderState | undefined);

  const user = headerState?.user;
  const loading = headerState?.loading ?? false;

  const getInitials = (name?: string) => {
    if (!name) return '?';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <header className="h-16 flex items-center px-4 border-b border-border bg-background">
      {children}
      <div className="ml-auto flex items-center gap-3">
        {loading ? (
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
            <div className="h-4 w-24 bg-muted animate-pulse rounded" />
          </div>
        ) : user ? (
          <>
            <Avatar className="h-8 w-8">
              {user.avatarUrl && <AvatarImage src={user.avatarUrl} alt={user.displayName} />}
              <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{user.displayName}</span>
              {user.email && <span className="text-xs text-muted-foreground">{user.email}</span>}
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
};

Header.displayName = 'Header';
