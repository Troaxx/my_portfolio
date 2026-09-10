import React from 'react';
import { Card } from "@/components/ui/card";
import { Code2, Server, Smartphone } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Code2,
      title: "Service Title",
      description: "Placeholder description — replace with a real service offering.",
    },
    {
      icon: Server,
      title: "Service Title 2",
      description: "Placeholder description — replace with a real service offering.",
    },
    {
      icon: Smartphone,
      title: "Service Title 3",
      description: "Placeholder description — replace with a real service offering.",
    },
  ];

  return (
    <section id="services" className="space-y-8">
      <div className="flex items-center justify-between border-b border-zinc-800/50 pb-4 h-[38px]">
        <div>
          <h2 className="text-sm font-semibold tracking-widest text-zinc-100 uppercase">SERVICES</h2>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">What I Can Help With</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, idx) => (
          <Card
            key={idx}
            className="bg-zinc-900/30 border-zinc-800/50 hover:bg-zinc-900/60 hover:border-zinc-700/50 transition-all duration-300 p-5 rounded-lg"
          >
            <div className="space-y-3">
              <service.icon className="w-5 h-5 text-zinc-400" />
              <h3 className="text-base font-semibold text-zinc-100">{service.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
