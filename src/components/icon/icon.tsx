import React, { memo } from 'react';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg';
import { ReactComponent as Gmail } from '../../assets/icons/gmail.svg';
import { ReactComponent as Telegram } from '../../assets/icons/telegram.svg';

export const ICONS = {
  github: Github,
  gmail: Gmail,
  linkedin: Linkedin,
  telegram: Telegram,
} as const;

export type TIcon = keyof typeof ICONS;

export const Icon = memo(({ type }: { type: TIcon }) => {
  const IconComponent = ICONS[type];

  return (
    <IconComponent />
  );
});

Icon.displayName = 'Icon';
