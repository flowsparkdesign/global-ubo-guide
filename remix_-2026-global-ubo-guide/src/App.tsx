/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Globe, ChevronRight, FileText, LayoutDashboard, Map as MapIcon, RotateCcw, Download, ExternalLink } from 'lucide-react';
import { countries } from './data/countries';
import { CountryUboData, Region } from './types';
import WorldMap from './components/WorldMap';
import CountryCard from './components/CountryCard';
import SearchAndFilters from './components/SearchAndFilters';
import AthennianLogo from './components/AthennianLogo';

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState<CountryUboData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<Region | 'All'>('All');
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [filters, setFilters] = useState({
    pscOnly: false,
    overseasOnly: false,
  });

  // Reset selected country if filters exclude it
  useEffect(() => {
    if (selectedCountry) {
      const isStillVisible = filteredCountries.some(c => c.id === selectedCountry.id);
      if (!isStillVisible) {
        // We don't necessarily want to deselect it just because it's filtered out of the list,
        // but it might be confusing. For now, let's keep it selected so user can see what they clicked.
      }
    }
  }, [selectedRegion, filters, searchQuery]);

  const [isMapExpanded, setIsMapExpanded] = useState(true);
  const scrollRef = useMemo(() => ({ current: null as HTMLDivElement | null }), []);

  // Reset map expansion on mobile when country is selected
  useEffect(() => {
    if (window.innerWidth < 1024 && selectedCountry) {
      setIsMapExpanded(false);
    }
    // Scroll content to top when country changes
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [selectedCountry]);

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = selectedRegion === 'All' || country.region === selectedRegion;
      const matchesPsc = !filters.pscOnly || country.requirements.pscRegister;
      const matchesOverseas = !filters.overseasOnly || country.requirements.overseasEntitiesRegister;
      return matchesSearch && matchesRegion && matchesPsc && matchesOverseas;
    });
  }, [searchQuery, selectedRegion, filters]);

  const handleSelectCountry = (country: CountryUboData | null) => {
    setSelectedCountry(country);
    if (country) {
      // Small delay to ensure smooth transition
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getNextCountry = () => {
    if (!selectedCountry) return null;
    const currentIndex = countries.findIndex(c => c.id === selectedCountry.id);
    const nextIndex = (currentIndex + 1) % countries.length;
    return countries[nextIndex];
  };

  const getPrevCountry = () => {
    if (!selectedCountry) return null;
    const currentIndex = countries.findIndex(c => c.id === selectedCountry.id);
    const prevIndex = (currentIndex - 1 + countries.length) % countries.length;
    return countries[prevIndex];
  };

  const handleNext = () => {
    const next = getNextCountry();
    if (next) handleSelectCountry(next);
  };

  const handlePrev = () => {
    const prev = getPrevCountry();
    if (prev) handleSelectCountry(prev);
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-sleek-bg text-sleek-text-main font-sans">
      {/* Header */}
      <header className="h-[80px] min-h-[80px] bg-white text-sleek-primary flex items-center px-4 sm:px-10 justify-between border-b border-sleek-border z-50">
        <div className="flex items-center gap-2 sm:gap-4">
          <AthennianLogo />
          <div className="h-8 w-px bg-sleek-border mx-0.5 sm:mx-1 hidden sm:block" />
          <div className="leading-none hidden sm:block">
            <h2 className="text-lg font-bold text-sleek-primary tracking-tight">Global UBO Guide</h2>
            <p className="text-[10px] text-sleek-accent font-bold uppercase tracking-[2px]">2026 Edition</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://www.athennian.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-sleek-text-muted hover:text-sleek-accent transition-colors"
          >
            <span className="hidden sm:inline">Visit athennian.com for more information</span>
            <span className="sm:hidden">athennian.com</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="flex-1 overflow-hidden flex flex-col lg:flex-row">
        <AnimatePresence mode="wait">
          {!selectedCountry ? (
            /* Welcome / Full Map View */
            <motion.div 
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 overflow-auto flex flex-col custom-scrollbar"
            >
              {/* Map Section */}
              <section className="bg-sleek-map-bg p-6 lg:p-8 flex flex-col shrink-0 min-h-[550px]">
                <SearchAndFilters
                  selectedRegion={selectedRegion}
                  setSelectedRegion={setSelectedRegion}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  filters={filters}
                  setFilters={setFilters}
                  countries={countries}
                  onSelectFirstMatch={() => {
                    if (filteredCountries.length > 0) {
                      handleSelectCountry(filteredCountries[0]);
                      setSearchQuery('');
                    }
                  }}
                />

                <div className="flex-1 mt-6 relative bg-white rounded-3xl border border-sleek-border flex items-center justify-center overflow-hidden shadow-sm">
                  <WorldMap
                    countries={filteredCountries}
                    onSelectCountry={handleSelectCountry}
                    selectedCountryId={null}
                  />
                  <div className="absolute top-5 right-5 inline-block bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-sleek-border shadow-md">
                    <span className="text-[12px] text-sleek-text-muted">
                      <strong className="text-sleek-text-main font-bold">Scope:</strong> {filteredCountries.length} Jurisdictions
                    </span>
                  </div>
                </div>
              </section>
            </motion.div>
          ) : (
            /* Split View (Atlas Mode) */
            <motion.div 
              key="split"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col lg:flex-row overflow-hidden"
            >
              {/* Left Column: Mini Map & Navigation */}
              <aside className={`w-full lg:w-[40%] bg-sleek-map-bg border-r border-sleek-border flex flex-col transition-all duration-300 ${!isMapExpanded ? 'h-0 overflow-hidden p-0 opacity-0 border-0' : 'h-[60vh] lg:h-auto opacity-100 p-6 gap-6'}`}>
                <SearchAndFilters
                  selectedRegion={selectedRegion}
                  setSelectedRegion={setSelectedRegion}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  filters={filters}
                  setFilters={setFilters}
                  countries={countries}
                  onSelectFirstMatch={() => {
                    if (filteredCountries.length > 0) {
                      handleSelectCountry(filteredCountries[0]);
                      setSearchQuery('');
                    }
                  }}
                />
                
                <div className="bg-white rounded-3xl border border-sleek-border shadow-sm overflow-hidden flex flex-col relative hover:border-sleek-accent/30 transition-colors">
                  <div className="relative group">
                    {/* Floating Interaction Prompt */}
                    <div className="absolute top-4 left-4 z-10 pointer-events-none transition-all group-hover:scale-105">
                      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-sleek-border shadow-sm">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-sleek-text-muted">
                          Click country to view details
                        </span>
                      </div>
                    </div>
                    
                    <WorldMap
                      countries={countries} 
                      onSelectCountry={handleSelectCountry}
                      selectedCountryId={selectedCountry?.id || null}
                    />
                  </div>
                  
                  <div className="px-4 py-2 bg-white/50 border-t border-sleek-border flex justify-between items-center">
                    <span className="text-[9px] font-bold text-sleek-text-muted uppercase tracking-wider"></span>
                    <button 
                      onClick={() => handleSelectCountry(null)}
                      className="text-[10px] font-bold text-sleek-accent hover:text-sleek-accent/80 flex items-center gap-1.5 transition-all active:scale-95"
                    >
                      <RotateCcw size={12} />
                      Reset View
                    </button>
                  </div>
                </div>
              </aside>

              {/* Right Column: Content */}
              <section 
                ref={(el) => { scrollRef.current = el; }}
                className="flex-1 overflow-auto bg-white custom-scrollbar relative"
              >
                {/* Mobile Map Toggle (Sticky Header) */}
                {!isMapExpanded && (
                  <div className="lg:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sleek-border flex justify-center py-4 shadow-sm transition-all duration-300">
                    <button 
                      onClick={() => setIsMapExpanded(true)}
                      className="flex items-center gap-2.5 text-sleek-accent font-bold text-sm hover:opacity-80 active:scale-95 transition-all group"
                    >
                      <div className="w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                        <MapIcon size={16} />
                      </div>
                      Show Map
                    </button>
                  </div>
                )}
                <div className="max-w-3xl mx-auto py-4">
                  <CountryCard 
                    country={selectedCountry} 
                    onNext={handleNext} 
                    onPrev={handlePrev} 
                    nextName={getNextCountry()?.name}
                    prevName={getPrevCountry()?.name}
                  />
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Bottom Disclaimer (Sticky/Small) */}
      <footer className="h-10 shrink-0 bg-white border-t border-slate-100 flex items-center justify-center px-4 sm:px-10">
        <p className="text-[8px] sm:text-[9px] text-slate-400 leading-none text-center">
          © 2026 Paper Interactive, Inc. All rights reserved. This guide is for informational purposes only and does not constitute legal advice.
        </p>
      </footer>
    </div>
  );
}

