import React from 'react';
import { Badge } from "@/components/ui/badge";

export const PresentBadge: React.FC<{ className?: string }> = ({ className }) => (
  <Badge
    variant="outline"
    className={`text-[9px] uppercase tracking-wider border-sky-500/30 text-sky-300 bg-sky-500/10 ${className ?? ''}`}
  >
    Present
  </Badge>
);
