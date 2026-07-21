import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-xl mb-3 overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-4 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-slate-900 pr-4">{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="text-slate-600 pt-0 pb-4 px-4">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
