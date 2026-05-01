import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { CountryUboData } from '../types';
import { Globe, Shield, Lightbulb, LayoutGrid, Check, X, FileSearch, Download, ArrowLeft, ArrowRight } from 'lucide-react';

interface CountryCardProps {
  country: CountryUboData;
  onNext?: () => void;
  onPrev?: () => void;
  nextName?: string;
  prevName?: string;
}

export default function CountryCard({ country, onNext, onPrev, nextName, prevName }: CountryCardProps) {
  return (
    <div className="p-4 sm:p-8 pb-16 flex flex-col gap-6 sm:gap-8 min-h-full">
      {/* Header */}
      <div className="border-b border-sleek-border pb-6 flex justify-between items-start">
        <div>
          <p className="text-[10px] font-bold text-sleek-accent tracking-widest uppercase mb-2">Jurisdiction</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-sleek-text-main">{country.name}</h2>
          <div className="flex items-center gap-1.5 mt-2 text-sleek-text-muted text-xs">
            <Globe size={12} />
            {country.region}
          </div>
        </div>
      </div>

      {/* Intro Paragraph */}
      <div className="text-sm leading-relaxed text-sleek-text-main font-medium border-l-2 border-sleek-accent pl-4">
        {country.description}
      </div>

      {/* Overview Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-[11px] font-bold text-sleek-accent tracking-[0.05em] uppercase">
          <Shield size={14} />
          Overview
        </div>
        <div className="bg-slate-50/50 rounded-xl border border-sleek-border p-5 space-y-4 shadow-sm">
          <OverviewItem label="Registry name" value={country.overview.registryName} />
          <OverviewItem label="Responsible agency" value={country.overview.responsibleAgency} />
          <OverviewItem label="In effect since" value={country.overview.inEffectSince} />
          <OverviewItem label="Access" value={country.overview.access} />
        </div>
      </div>

      {/* Highlights Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-[11px] font-bold text-sleek-accent tracking-[0.05em] uppercase">
          <Lightbulb size={14} />
          What to know for 2026
        </div>
        <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-100/50 text-[13px] leading-relaxed text-slate-700 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 blur-3xl rounded-full" />
          <div className="relative z-10 font-medium">
            {country.whatToKnow2026}
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-[11px] font-bold text-sleek-accent tracking-[0.05em] uppercase">
          <LayoutGrid size={14} />
          Requirements
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="sm:col-span-2">
            <RequirementItem 
              label="Reporting required for entities owned by a trust" 
              value={country.requirements.trustDisclosure} 
              active={country.requirements.trustDisclosure.toLowerCase().includes('yes')}
              isHighlight={true}
            />
          </div>
          <RequirementItem 
            label="Persons with Significant Control register" 
            value={country.requirements.pscRegister ? "Yes" : "No"} 
            active={country.requirements.pscRegister}
          />
          <RequirementItem 
            label="Overseas entities register" 
            value={country.requirements.overseasEntitiesRegister ? "Yes" : "No"} 
            active={country.requirements.overseasEntitiesRegister}
          />
          <div className="sm:col-span-2">
            <RequirementItem 
              label="Threshold for beneficial ownership" 
              value={country.requirements.threshold} 
              active={true}
            />
          </div>
        </div>
      </div>

      {/* Footer Note & Navigation */}
      <div className="mt-auto pt-8 border-t border-sleek-border flex flex-col gap-10">
        
        {/* Browser Navigation */}
        <div className="flex items-center justify-between gap-4">
          <button 
            onClick={onPrev}
            className="flex flex-col items-start gap-1 text-left group"
          >
            <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-sleek-accent group-hover:underline">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="hidden xs:inline">Previous</span>
              <span className="xs:hidden">Prev</span>
            </span>
            <span className="text-xs text-sleek-text-muted font-semibold pl-6 hidden sm:block truncate max-w-[120px]">{prevName}</span>
          </button>
          
          <div className="h-10 w-px bg-slate-100 hidden sm:block" />
          
          <button 
            onClick={onNext}
            className="flex flex-col items-end gap-1 text-right group ml-auto"
          >
            <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-sleek-accent group-hover:underline">
              <span className="hidden xs:inline">Next</span>
              <span className="xs:hidden">Next</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="text-xs text-sleek-text-muted font-semibold pr-6 hidden sm:block truncate max-w-[120px]">{nextName}</span>
          </button>
        </div>

        {/* Global CTA */}
        <div className="bg-slate-900 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 py-8 sm:py-10 text-center space-y-6 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-40 h-40 bg-sleek-accent opacity-10 blur-3xl rounded-full" />
          <div className="space-y-2 relative z-10">
            <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white">Get the 2026 Global UBO Guide</h4>
            <p className="text-xs sm:text-sm text-slate-400">Get your copy of the complete UBO Guide with detailed information for 50 jurisdictions.</p>
          </div>
          <div className="flex justify-center">
            <a
              href="https://www.athennian.com/2026-ubo-guide#download-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 bg-sleek-accent hover:bg-sleek-accent/90 text-white font-bold py-3 sm:py-3.5 px-8 sm:px-10 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base"
            >
              <Download size={18} />
              Download Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function OverviewItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-sleek-border/30 pb-3 last:border-0 last:pb-0">
      <div className="text-[10px] font-bold text-sleek-text-muted uppercase tracking-wider">{label}</div>
      <div className="text-sm text-sleek-text-main font-semibold leading-tight">{value}</div>
    </div>
  );
}

function RequirementItem({ label, value, active, description, isHighlight }: { 
  label: string; 
  value: string; 
  active: boolean; 
  description?: string;
  isHighlight?: boolean;
}) {
  return (
    <div className={`p-4 rounded-xl border flex flex-col gap-1 h-full select-none ${isHighlight ? 'bg-indigo-50/50 border-indigo-100/50' : 'bg-slate-50 border-slate-100/50'}`}>
      <div className="text-[9px] text-sleek-text-muted font-bold tracking-wider uppercase mb-1 leading-tight">{label}</div>
      <div className="flex items-center justify-between gap-2 mt-auto">
        <div className="font-bold text-xs text-sleek-text-main leading-snug break-words flex-1" title={value}>{value}</div>
        {active ? (
          <span className="flex-shrink-0 flex items-center justify-center w-4 h-4 bg-emerald-100 text-emerald-700 rounded-full">
            <Check size={10} strokeWidth={3} />
          </span>
        ) : (
          <span className="flex-shrink-0 flex items-center justify-center w-4 h-4 bg-rose-100 text-rose-700 rounded-full">
            <X size={10} strokeWidth={3} />
          </span>
        )}
      </div>
      {description && !isHighlight && (
        <p className="text-[9px] text-sleek-text-muted mt-2 leading-tight italic border-t border-slate-200 pt-2">{description}</p>
      )}
    </div>
  );
}
