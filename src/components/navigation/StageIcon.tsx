import React from 'react';
import {
  HeartHandshake,
  ScrollText,
  Home,
  Wallet,
  ShieldAlert,
  Scale,
  Users,
  Baby,
  BookOpen
} from 'lucide-react';

interface StageIconProps {
  stageId: string;
  className?: string;
}

export const StageIcon: React.FC<StageIconProps> = ({ stageId, className = 'w-4 h-4' }) => {
  switch (stageId) {
    case 'pra-nikah':
      return <Users className={className} />;
    case 'akad':
      return <ScrollText className={className} />;
    case 'domestik':
      return <Home className={className} />;
    case 'finansial':
      return <Wallet className={className} />;
    case 'keintiman':
      return <HeartHandshake className={className} />;
    case 'konflik':
      return <ShieldAlert className={className} />;
    case 'perceraian':
      return <Scale className={className} />;
    case 'pengasuhan':
      return <Baby className={className} />;
    default:
      return <BookOpen className={className} />;
  }
};
