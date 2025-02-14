import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface TechnologyBadgeProps {
  name: string;
  Icon: LucideIcon;
}

const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({ name, Icon }) => {
  return (
    <motion.div
      className="flex items-center gap-3 bg-zinc-800/50 backdrop-blur-sm px-6 py-4 rounded-xl card-hover"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <Icon className="w-6 h-6 text-white/80" />
      <span className="font-medium">{name}</span>
    </motion.div>
  );
};

export default TechnologyBadge;