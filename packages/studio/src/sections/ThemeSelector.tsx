import React from 'react';
import { upperFirst } from 'lodash';
import { useTheme, useTranslation } from '@hai3/react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Button,
} from '@hai3/uikit';
import { ChevronDown } from 'lucide-react';
import { useStudioContext } from '../StudioProvider';

/**
 * ThemeSelector Component
 * Uses useTheme hook for theme selection using DropdownMenu
 */

export interface ThemeSelectorProps {
  className?: string;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  className = '',
}) => {
  const { currentTheme, themes, setTheme } = useTheme();
  const { portalContainer: _portalContainer } = useStudioContext();
  const { t } = useTranslation();

  const formatThemeName = (themeName: string): string => {
    return themeName
      .split('-')
      .map(word => upperFirst(word))
      .join(' ');
  };

  return (
    <div className={`flex items-center justify-between ${className}`}>
      <label className="text-sm text-muted-foreground whitespace-nowrap">
        {t('studio:controls.theme')}
      </label>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-1">
            {formatThemeName(currentTheme || '')}
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="z-[99999] pointer-events-auto">
          {themes.map((theme) => (
            <DropdownMenuItem
              key={theme.id}
              onClick={() => setTheme(theme.id)}
            >
              {formatThemeName(theme.name || theme.id)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

ThemeSelector.displayName = 'ThemeSelector';
