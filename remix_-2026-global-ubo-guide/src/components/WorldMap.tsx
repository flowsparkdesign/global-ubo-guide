import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { CountryUboData } from '../types';

interface WorldMapProps {
  countries: CountryUboData[];
  onSelectCountry: (country: CountryUboData | null) => void;
  selectedCountryId: string | null;
}

export default function WorldMap({ countries, onSelectCountry, selectedCountryId }: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 450;

    // Use a projection that fits the guide's global scope and minimizes unnecessary space
    const projection = d3.geoNaturalEarth1()
      .scale(180) // Increased scale to zoom in more
      .translate([width / 2, height / 2 + 20]); // Shift slightly down to center landmass better

    const path = d3.geoPath().projection(projection);

    // Fetch world data
    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then((data: any) => {
      const world = topojson.feature(data, data.objects.countries) as any;
      
      svg.selectAll('*').remove();

      // Draw Ocean
      svg.append('rect')
        .attr('width', width)
        .attr('height', height)
        .attr('fill', '#f8fafc'); // Very light slate/white

      const g = svg.append('g');

      g.selectAll('path')
        .data(world.features)
        .enter()
        .append('path')
        .attr('d', path as any)
        .attr('class', (d: any) => {
          const countryName = d.properties.name;
          const normalizedName = countryName === 'United States of America' ? 'United States' : countryName;
          const countryData = countries.find(c => c.name === normalizedName);
          return countryData ? 'cursor-pointer hover:fill-slate-400 transition-colors' : '';
        })
        .attr('fill', (d: any) => {
          const countryName = d.properties.name;
          const normalizedName = countryName === 'United States of America' ? 'United States' : countryName;
          const countryData = countries.find(c => c.name === normalizedName);
          
          if (countryData?.id === selectedCountryId) return '#3b69f2'; // Brand Blue
          return countryData ? '#cbd5e1' : '#f1f5f9'; // Inactive/Active Grey balance
        })
        .attr('stroke', '#ffffff')
        .attr('stroke-width', 0.5)
        .on('mouseenter', (_event, d: any) => {
          const countryName = d.properties.name;
          setHoveredCountry(countryName);
        })
        .on('mouseleave', () => setHoveredCountry(null))
        .on('click', (_event, d: any) => {
          const countryName = d.properties.name;
          const normalizedName = countryName === 'United States of America' ? 'United States' : countryName;
          const countryData = countries.find(c => c.name === normalizedName);
          if (countryData) {
            onSelectCountry(countryData);
          }
        });

      // Zoom support
      const zoom = d3.zoom()
        .scaleExtent([1, 8])
        .on('zoom', (event) => {
          g.attr('transform', event.transform);
        });

      svg.call(zoom as any);
    });
  }, [countries, selectedCountryId]);

  return (
    <div className="relative w-full overflow-hidden bg-slate-50 border border-slate-200 rounded-xl">
      <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded shadow-sm text-xs border border-slate-200">
        {hoveredCountry ? (
          <span className="font-medium">{hoveredCountry}</span>
        ) : (
          <span className="text-slate-400">Click a shaded country to view details</span>
        )}
      </div>
      <svg
        ref={svgRef}
        viewBox="0 0 800 450"
        className="w-full h-auto block max-h-[600px]"
      />
    </div>
  );
}
