import { KeyboardEvent } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { CountryUboData, Region } from '../types';

interface SearchAndFiltersProps {
  selectedRegion: Region | 'All';
  setSelectedRegion: (region: Region | 'All') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectFirstMatch?: () => void;
  filters: {
    pscOnly: boolean;
    overseasOnly: boolean;
  };
  setFilters: (filters: { pscOnly: boolean; overseasOnly: boolean }) => void;
  countries: CountryUboData[];
}

export default function SearchAndFilters({
  selectedRegion,
  setSelectedRegion,
  searchQuery,
  setSearchQuery,
  onSelectFirstMatch,
}: SearchAndFiltersProps) {
  const regions: (Region | 'All')[] = ['All', 'Americas', 'Europe', 'Middle East & Africa', 'Asia-Pacific'];

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && onSelectFirstMatch) {
      onSelectFirstMatch();
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-start gap-4 sm:w-fit">
        {/* Region Chips */}
        <div className="flex bg-white rounded-xl p-1 border border-sleek-border shadow-sm w-full overflow-x-auto no-scrollbar whitespace-nowrap">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 sm:px-5 py-2 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all shrink-0 ${
                selectedRegion === region
                  ? 'bg-sleek-primary text-white shadow-md shadow-slate-200'
                  : 'text-sleek-text-muted hover:text-sleek-text-main'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-sleek-text-muted" size={16} />
          <input
            type="text"
            placeholder="Search by country name..."
            className="w-full bg-white pl-11 pr-4 py-3 rounded-xl border border-sleek-border focus:ring-2 focus:ring-sleek-accent/20 focus:border-sleek-accent outline-none transition-all placeholder:text-slate-400 text-sm shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sleek-text-muted hover:text-sleek-text-main"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
