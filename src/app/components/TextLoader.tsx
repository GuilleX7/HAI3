/**
 * TextLoader Component - Prevents flash of untranslated content
 *
 * Shows a skeleton loader while translations are being loaded.
 */

import React from 'react';
import { useTranslation } from '@hai3/react';
import { cn } from '@hai3/uikit';

export interface TextLoaderProps {
  /** Child content to render when translations are loaded */
  children: React.ReactNode;
  /** Fallback while loading (alternative to skeleton) */
  fallback?: React.ReactNode;
  /**
   * Optional className for the skeleton loader
   * Use this to match the expected size of the text
   * @example "h-8 w-48" for a heading
   * @example "h-4 w-32" for a button label
   */
  skeletonClassName?: string;
  /** Optional className for the wrapper div */
  className?: string;
  /**
   * If true, skeleton inherits the text color instead of using bg-muted
   * Use this for buttons, menu items, and colored text
   * @default false
   */
  inheritColor?: boolean;
}

export const TextLoader: React.FC<TextLoaderProps> = ({
  children,
  fallback,
  skeletonClassName,
  className,
  inheritColor = false,
}) => {
  const { language } = useTranslation();

  // If no language is set yet, show loading state
  if (!language) {
    // If fallback provided, use it
    if (fallback !== undefined) {
      return <>{fallback}</>;
    }

    // Otherwise, use skeleton
    if (skeletonClassName) {
      return (
        <div
          className={cn(
            'animate-pulse rounded',
            inheritColor ? 'bg-current opacity-20' : 'bg-muted',
            skeletonClassName
          )}
        />
      );
    }

    // Default skeleton
    return <div className="animate-pulse bg-muted h-4 w-24 rounded" />;
  }

  // If className is provided, wrap in div, otherwise return children directly
  if (className) {
    return <div className={className}>{children}</div>;
  }

  return <>{children}</>;
};
