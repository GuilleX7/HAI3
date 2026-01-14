import React from 'react';
import { upperFirst } from 'lodash';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuItem,
  Button,
} from '@hai3/uikit';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from '@hai3/react';
import { useStudioContext } from '../StudioProvider';

/**
 * ScreensetSelector Component
 * Redux-aware component for 2-level screenset selection
 * Uses DropdownMenu with DropdownMenuSub for categories
 */

export interface ScreensetOption {
  category: string;
  screensets: Array<{ id: string; name: string }>;
}

export interface ScreensetSelectorProps {
  options: ScreensetOption[];
  currentValue: string; // Format: "category:screensetId"
  onChange: (value: string) => void; // Receives "category:screensetId"
  className?: string;
}

export const ScreensetSelector: React.FC<ScreensetSelectorProps> = ({
  options,
  currentValue,
  onChange,
  className = '',
}) => {
  const { portalContainer: _portalContainer } = useStudioContext();
  const { t, isRTL } = useTranslation();

  // Format names
  const formatName = (name: string): string => {
    return name
      .split(/[-_]/)
      .map((word) => upperFirst(word))
      .join(' ');
  };

  // Get current display value
  const getCurrentDisplay = (): string => {
    const [category, itemId] = currentValue.split(':');
    if (!category || !itemId) return 'Select';
    const categoryGroup = options.find((opt) => opt.category === category);
    const item = categoryGroup?.screensets.find((i) => i.id === itemId);
    return item ? item.name : 'Select';
  };

  const handleItemClick = (category: string, itemId: string): void => {
    onChange(`${category}:${itemId}`);
  };

  return (
    <div className={`flex items-center justify-between ${className}`}>
      <label className="text-sm text-muted-foreground whitespace-nowrap">
        {t('studio:controls.screenset')}
      </label>
      <DropdownMenu dir={isRTL ? 'rtl' : 'ltr'}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-1">
            {formatName(getCurrentDisplay())}
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="z-[99999] pointer-events-auto">
          {options.map((categoryGroup) => (
            <DropdownMenuSub key={categoryGroup.category}>
              <DropdownMenuSubTrigger disabled={categoryGroup.screensets.length === 0}>
                {formatName(categoryGroup.category)}
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="z-[99999] pointer-events-auto">
                {categoryGroup.screensets.map((item) => (
                  <DropdownMenuItem
                    key={item.id}
                    onClick={() => handleItemClick(categoryGroup.category, item.id)}
                  >
                    {formatName(item.name)}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

ScreensetSelector.displayName = 'ScreensetSelector';
