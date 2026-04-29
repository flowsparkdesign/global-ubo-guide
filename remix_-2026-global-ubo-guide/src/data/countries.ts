import { CountryUboData } from '../types';

export const countries: CountryUboData[] = [
  // AMERICAS
  {
    id: 'us',
    name: 'United States',
    region: 'Americas',
    description: 'The United States operates a non‑public beneficial ownership reporting system administered by FinCEN under the Corporate Transparency Act (CTA). Following interim actions in 2025, the CTA’s beneficial ownership information (BOI) filing obligation currently applies to foreign reporting companies while the scope for domestic entities is under review. Separately, the Residential Real Estate Rule begins nationwide reporting on certain non‑financed residential real estate transfers to entities and trusts from March 1, 2026.',
    overview: {
      registryName: 'Beneficial Ownership Information (BOI) Registry',
      responsibleAgency: 'Financial Crimes Enforcement Network (FinCEN)',
      inEffectSince: '2024',
      access: 'Authorities and authorized recipients only (no public search)'
    },
    whatToKnow2026: 'Organizations should prepare for two parallel developments in 2026: tightened BOI data‑access controls for authorized users only, and the introduction of federal reporting for residential real estate transfers. Ensuring consistent, well‑documented ownership information will support compliance with either requirement.',
    requirements: {
      trustDisclosure: 'Yes. When a trust owns or controls a reporting company, the reporting company must disclose the natural persons who exercise ownership or control through the trust',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '25% ownership or substantial control'
    }
  },
  {
    id: 'ca',
    name: 'Canada',
    region: 'Americas',
    description: 'Canada requires corporations formed under the Canada Business Corporations Act (CBCA) to identify individuals with significant control (ISCs), maintain an internal ISC register and file key ISC information with Corporations Canada. Since January 2024, a limited portion of this information is publicly searchable, while full details remain available to authorized regulators. Trusts follow separate federal tax reporting rules through the Canada Revenue Agency (CRA), and there is no national PSC register.',
    overview: {
      registryName: 'Individuals with Significant Control (ISC) Register',
      responsibleAgency: 'Corporations Canada',
      inEffectSince: 'Internal ISC registers since 2019; public ISC filing and search since 2024',
      access: 'Partial public access for CBCA corporations; full access for regulators and authorized requestors'
    },
    whatToKnow2026: 'The 2026 focus is on accuracy, completeness and clear documentation, particularly for entities with layered ownership or trust structures. Corporations should ensure their internal ISC register and filed information match, and that all event‑driven changes are promptly updated.',
    requirements: {
      trustDisclosure: 'Yes. When a trust owns or controls 25% or more of a CBCA corporation, the individuals who control the trust must be identified and recorded as ISCs.',
      pscRegister: true,
      overseasEntitiesRegister: false,
      threshold: '25% (ownership or control)'
    }
  },
  {
    id: 'mx',
    name: 'Mexico',
    region: 'Americas',
    description: 'Mexico requires legal entities and certain legal arrangements to identify, verify, maintain and provide information on their beneficiario controlador (beneficial owner) to the national tax authority, SAT, and to comply with AML obligations. There is no public UBO register. Instead, the relevant information is held by the entity and furnished to authorities upon request.',
    overview: {
      registryName: 'Beneficiario Controlador regime',
      responsibleAgency: 'Servicio de Administración Tributaria (SAT) and Unidad de Inteligencia Financiera (UIF)',
      inEffectSince: '2022',
      access: 'Authorities only (no public access)'
    },
    whatToKnow2026: '2026 is the first full year under the strengthened 2025 framework, with greater emphasis on traceability through multi-layered structures and timely response to information requests. Entities should be able to show how they identified their beneficial owners and produce supporting documentation when asked.',
    requirements: {
      trustDisclosure: 'Yes. Where ownership or control is through a trust (fideicomiso), entities must identify the natural persons who ultimately exercise control or receive economic benefit.',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: 'No set threshold; based on effective ownership or control'
    }
  },
  {
    id: 'br',
    name: 'Brazil',
    region: 'Americas',
    description: 'Brazil’s beneficial ownership framework is closely tied to its national company identifier, the CNPJ, which functions as the backbone of tax and corporate transparency. The regime was strengthened in 2023 under Instrução Normativa RFB 2.119/2022, modernizing how foreign-owned and multi‑layered structures disclose beneficial ownership. While there is no standalone UBO register, the CNPJ system operates as a de facto centralized disclosure point and is one of the more established transparency mechanisms in the region.',
    overview: {
      registryName: 'Cadastro Nacional de Pessoas Jurídicas (CNPJ)',
      responsibleAgency: 'Receita Federal do Brasil (RFB)',
      inEffectSince: '2023',
      access: 'Authorities only (no public access)'
    },
    whatToKnow2026: 'Compliance expectations remain steady for the coming years, with emphasis on maintaining complete and verifiable ownership chains, particularly for foreign-owned or multi-jurisdictional structures. Corporations and entities should ensure documentation supports each level of beneficial ownership and is consistent with RFB requirements.',
    requirements: {
      trustDisclosure: 'Yes. Entities must disclose the natural persons who ultimately exercise ownership or control, even when held through trusts.',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'ar',
    name: 'Argentina',
    region: 'Americas',
    description: 'Argentina’s beneficial ownership framework has undergone structural change in recent years, with the dissolution of AFIP and creation of ARCA in 2024. While the underlying reporting regime remains based on RG 4697/2020, the administrative transition marks one of the region’s more significant institutional shifts. Argentina was among the earlier Latin American adopters of a formal BO reporting requirement, positioning its regime as comparatively mature in terms of documentation expectations.',
    overview: {
      registryName: 'Régimen de Información de Beneficiarios Finales',
      responsibleAgency: 'Customs Collection and Control Agency (ARCA, previously Administración Federal de Ingresos Públicos or AFIP)',
      inEffectSince: '2020',
      access: 'Authorities only (no public access)'
    },
    whatToKnow2026: 'For 2026, Argentina’s focus remains on timely BO filings and clear ownership tracing under the existing regime, now managed by ARCA. Entities should ensure that reported beneficial owners reflect both direct and indirect ownership chains, with supporting documentation for foreign intermediaries or trust structures where relevant. The regime also expects consistency across corporate records, tax filings and BO submissions.',
    requirements: {
      trustDisclosure: 'Yes.',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '10% of capital or voting rights'
    }
  },
  {
    id: 'co',
    name: 'Colombia',
    region: 'Americas',
    description: 'Colombia operates one of the region’s most comprehensive beneficial ownership systems through the RUB and SIESPJ registers. Introduced in 2021, these mechanisms were part of a broader national effort to modernize fiscal transparency and align with international AML standards. Covering both legal entities and certain non‑legal arrangements, the dual‑register structure gives Colombia one of the most detailed BO frameworks in South America.',
    overview: {
      registryName: 'Registro Único de Beneficiarios Finales (RUB) and SIESPJ',
      responsibleAgency: 'Dirección de Impuestos and Aduanas Nacionales (DIAN)',
      inEffectSince: '2021',
      access: 'Authorities only (no public access)'
    },
    whatToKnow2026: 'DIAN continues to refine filing requirements and verification procedures. Entities should monitor DIAN’s annual compliance calendar and ensure agreement between RUB filings and corporate/shareholder documentation.',
    requirements: {
      trustDisclosure: 'Yes. Trust-like structures fall under SIESPJ reporting.',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '5%'
    }
  },
  {
    id: 'cl',
    name: 'Chile',
    region: 'Americas',
    description: 'Chile’s approach to beneficial ownership is rooted in its AML regime rather than in a corporate registry framework. The UAF’s 2025 circular refined and clarified expectations, including Chile’s relatively low identification threshold (10%) for relevant obliged entities. This makes Chile notable in the region for applying one of the strictest BO identification standards, even though no centralized UBO register exists.',
    overview: {
      registryName: 'Beneficial Ownership framework under AML rules (no public register)',
      responsibleAgency: 'Servicio de Impuestos Internos (SII)',
      inEffectSince: 'Framework updated in 2025',
      access: 'Authorities and obliged entities only'
    },
    whatToKnow2026: 'Chile applies a relatively low threshold of just 10% for identifying beneficial owners in specific AML contexts. Entities should ensure internal documentation meets UAF expectations and that they can substantiate control relationships.',
    requirements: {
      trustDisclosure: 'Yes, where trust structures are relevant to control or economic ownership.',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '10%'
    }
  },
  {
    id: 'pe',
    name: 'Peru',
    region: 'Americas',
    description: 'Peru was an early mover in the region, introducing its formal beneficial ownership declaration in 2019 under Decreto Legislativo 1372. Filing through SUNAT’s virtual system has since become a standard compliance step for legal persons and certain arrangements. Peru’s regime is recognized for its emphasis on alignment between BO declarations, corporate governance records and tax filings, resulting in a relatively disciplined framework.',
    overview: {
      registryName: 'Declaración de Beneficiario Final',
      responsibleAgency: 'Superintendencia Nacional de Aduanas y de Administración Tributaria (SUNAT)',
      inEffectSince: '2019',
      access: 'Authorities only (no public access)'
    },
    whatToKnow2026: '2026 is a scheduled filing year for Peru-domiciled legal entities not covered by earlier phases. SUNAT has set a tiered filing calendar based on FY2024 net income, with deadlines falling across July, September and November 2026. Entities must also update their beneficial ownership declaration within 30 business days of any change in their ownership structure and maintain documentation supporting their determinations.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '10%'
    }
  },

  // EUROPE
  {
    id: 'gb',
    name: 'United Kingdom',
    region: 'Europe',
    description: 'The United Kingdom operates one of the most established beneficial ownership frameworks in the world through its public People with Significant Control (PSC) register. Introduced in 2016, the PSC regime is now being overhauled by the Economic Crime and Corporate Transparency Act 2023 (ECCTA), which strengthens Companies House’s role and introduces mandatory identity verification for directors, PSCs and certain filers. The UK also maintains a separate Register of Overseas Entities (ROE) for foreign entities that own UK land.',
    overview: {
      registryName: 'People with Significant Control (PSC) Register',
      responsibleAgency: 'Companies House',
      inEffectSince: '2016',
      access: 'Public, with protections for certain personal data'
    },
    whatToKnow2026: 'Identity verification under ECCTA became mandatory for company directors and PSCs in November 2025, with a transition period that runs through late 2026. Existing directors and PSCs must complete verification by deadlines linked to their confirmation statements, and from spring 2026 anyone filing documents at Companies House will need a verified identity. As 2026 is a key transition year, organizations should confirm that all directors, PSCs and filing agents can meet the new verification and data quality requirements.',
    requirements: {
      trustDisclosure: 'Yes. When a trust owns or controls a company, the company must disclose the individuals who exercise control through the trust.',
      pscRegister: true,
      overseasEntitiesRegister: true,
      threshold: '25%'
    }
  },
  {
    id: 'de',
    name: 'Germany',
    region: 'Europe',
    description: 'Germany’s beneficial ownership framework centers on the Transparenzregister, a key component of its AML system. The register moved to a full standalone model in 2021, replacing the former notice-based approach and making Germany one of the more structured jurisdictions in the European Union for UBO reporting. Ongoing reforms at the EU level continue to shape expectations around accuracy, verification and cross-border data alignment.',
    overview: {
      registryName: 'Transparenzregister',
      responsibleAgency: 'Bundesanzeiger Verlag',
      inEffectSince: '2017',
      access: 'Authorities and obliged entities; limited access for others'
    },
    whatToKnow2026: 'Germany is preparing for implementation of the upcoming EU AML Regulation, which is expected to strengthen consistency and data‑quality obligations. Organizations should ensure beneficial ownership filings are accurate, up to date and aligned with corporate records.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: true,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'fr',
    name: 'France',
    region: 'Europe',
    description: 'France maintains its beneficial ownership register through the INPI, reflecting a well‑established framework that has been refined since its introduction in 2017. Following EU‑level jurisprudence, access to the register is restricted to authorities and parties able to demonstrate legitimate interest, which continues to define how the system operates in practice.',
    overview: {
      registryName: 'Registre des bénéficiaires effectifs (RBE)',
      responsibleAgency: 'Institut National de la Propriété Industrielle (INPI)',
      inEffectSince: '2017',
      access: 'Authorities and parties with legitimate interest'
    },
    whatToKnow2026: 'France is expected to continue aligning the RBE with emerging EU AML requirements. Entities should ensure filings are complete and consistent with corporate documentation, particularly during ongoing EU‑driven adjustments to access rules.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: true,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'it',
    name: 'Italy',
    region: 'Europe',
    description: 'Italy’s beneficial ownership register became operational in October 2023 following the implementation of Ministerial Decree 55/2022. It is administered via the territorial Chambers of Commerce under the Ministry of Enterprises and Made in Italy, and captures UBO data for companies, private legal entities and certain trusts with tax-relevant effects. The framework reflects EU AML Directive obligations and emphasises ownership or control thresholds and chain-of-control disclosures.',
    overview: {
      registryName: 'Registro dei titolari effettivi',
      responsibleAgency: 'Ministry of Enterprises and Made in Italy (MIMIT) and Chambers of Commerce',
      inEffectSince: '2023',
      access: 'Authorities and obliged entities; limited public access subject to legitimate interest'
    },
    whatToKnow2026: 'Organizations should ensure they have filed initial beneficial-ownership data and are set up to report changes within 30 days and provide annual confirmation. Entities with layered ownership structures, trusts or foreign intermediaries should monitor any legal developments; certain reporting requirements for fiduciary mandates remain subject to administrative-law challenge.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: true,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'ru',
    name: 'Russia',
    region: 'Europe',
    description: 'Russia does not maintain a public beneficial ownership register. Instead, companies must identify and maintain information on their beneficial owners in accordance with AML legislation, particularly Federal Law 115‑FZ. Information must be provided to banks or authorities upon request, making Russia an obligation‑based rather than registry‑based jurisdiction.',
    overview: {
      registryName: 'No central public registry (company‑maintained records)',
      responsibleAgency: 'Rosfinmonitoring and Federal Tax Service',
      inEffectSince: '2016 under Federal Law 115‑FZ',
      access: 'Authorities only (no public access)'
    },
    whatToKnow2026: 'Russia’s beneficial ownership requirements remain stable. Organizations should ensure internal records are up to date and consistent with bank due‑diligence expectations, as information requests typically arise through financial institutions.',
    requirements: {
      trustDisclosure: 'Yes, where trust‑like structures are involved',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '25% or the ability to control the legal entity'
    }
  },
  {
    id: 'es',
    name: 'Spain',
    region: 'Europe',
    description: 'Spain’s Registro Central de Titularidades Reales (RCTIR) consolidates beneficial ownership information from multiple registries, forming one of the more comprehensive transparency systems in the region. Launched in 2023, the register is a key element of Spain’s AML modernization efforts.',
    overview: {
      registryName: 'Registro Central de Titularidades Reales (RCTIR)',
      responsibleAgency: 'Ministry of Justice',
      inEffectSince: '2023',
      access: 'Authorities and obliged entities'
    },
    whatToKnow2026: 'Spain may refine RCTIR processes as EU AML reforms progress, with potential updates to data quality and verification practices. Organizations should ensure that RCTIR filings remain aligned with corporate registry records.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: true,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'nl',
    name: 'Netherlands',
    region: 'Europe',
    description: 'The Netherlands maintains a well-established beneficial ownership reporting framework aligned with EU AML directives. Its UBO register, introduced under the Trade Register Act, covers most corporate and partnership forms and requires disclosure of natural persons who ultimately own or control Dutch entities. While public access was restricted following EU-level jurisprudence, the Netherlands continues to refine its system for regulatory use.',
    overview: {
      registryName: 'Handelsregister UBO',
      responsibleAgency: 'Kamer van Koophandel (KVK), which is the Dutch Chamber of Commerce',
      inEffectSince: '2020',
      access: 'Authorities and obliged entities; public access restricted'
    },
    whatToKnow2026: 'UBO disclosure obligations remain stable in the Netherlands. Entities should ensure timely updates when ownership changes occur, particularly given the country’s active supervisory stance and ongoing EU AML legislative developments.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: true,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'ch',
    name: 'Switzerland',
    region: 'Europe',
    description: 'Switzerland currently does not operate a central public beneficial ownership register. Instead, Swiss legal entities must identify their beneficial owners, maintain internal (non-public) registers and provide this information to the authorities or financial intermediaries upon request. This longstanding company-held model will shift in 2026 following new federal legislation that introduces Switzerland’s first centralized beneficial ownership register.',
    overview: {
      registryName: 'Currently no central UBO register (company-held records); Swiss Register of Beneficiaries (forthcoming)',
      responsibleAgency: 'Currently company records subject to request by authorities; Office Fédéral de la Justice (FOJ, forthcoming)',
      inEffectSince: '2023; formal register expected mid-2026',
      access: 'Authorities and designated financial intermediaries (no public access)'
    },
    whatToKnow2026: 'Switzerland will introduce a centralized federal UBO register in mid-2026, marking a significant shift from the existing company-held model. Under the new framework, entities will be required to file beneficial ownership information with the Federal Office of Justice, and a control authority under the Federal Department of Finance will oversee compliance. Organizations should begin preparing internal ownership documentation to support the transition.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'be',
    name: 'Belgium',
    region: 'Europe',
    description: 'Belgium operates one of the more mature beneficial ownership frameworks in Europe, with its UBO register covering companies, nonprofits and trusts or similar arrangements. Introduced in 2018, the system reflects Belgium’s early alignment with EU AML rules and is supported by structured digital reporting. Access has tightened following EU-level jurisprudence, but the register continues to underpin regulatory supervision and data-quality expectations.',
    overview: {
      registryName: 'Registre UBO / UBO-register',
      responsibleAgency: 'FOD Financiën / SPF Finances',
      inEffectSince: '2018',
      access: 'Authorities and obliged entities; public access restricted'
    },
    whatToKnow2026: 'Belgium continues to strengthen verification rules and data-quality requirements. Annual confirmation obligations remain in effect, and entities should ensure filings match corporate documentation.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: true,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'se',
    name: 'Sweden',
    region: 'Europe',
    description: 'Sweden introduced its beneficial ownership register in 2018 as part of its implementation of EU AML directives, requiring most Swedish legal entities to identify and report natural persons who ultimately own or control them. The framework is well integrated into Sweden’s corporate registration infrastructure and supports both transparency and AML oversight. Ongoing reforms at the EU level continue to shape Sweden’s reporting and verification practices.',
    overview: {
      registryName: 'Register över verkliga huvudmän',
      responsibleAgency: 'Bolagsverket',
      inEffectSince: '2018',
      access: 'Authorities and obliged entities; public access restricted'
    },
    whatToKnow2026: 'Sweden continues adjusting its system in line with EU AML reforms. Organizations should verify that BO records align with shareholder registers and governance documentation.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: true,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'pl',
    name: 'Poland',
    region: 'Europe',
    description: 'Poland’s Central Register of Beneficial Owners (CRBR) is a digital and comparatively transparent system that was launched in 2019 to support AML compliance for a wide range of corporate and partnership structures. Poland is known for strict filing deadlines and significant penalties for non-compliance, which have driven high levels of reporting discipline. The register remains a key component of Poland’s broader efforts to strengthen financial transparency.',
    overview: {
      registryName: 'Centralny Rejestr Beneficjentów Rzeczywistych (CRBR)',
      responsibleAgency: 'Ministerstwo Finansów',
      inEffectSince: '2019',
      access: 'Public with limited protections'
    },
    whatToKnow2026: 'Poland enforces strict deadlines and penalties for non-compliance. Entities should monitor data-quality expectations and ensure filings reflect actual ownership.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: true,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'ie',
    name: 'Ireland',
    region: 'Europe',
    description: 'Ireland maintains a dedicated Register of Beneficial Ownership (RBO) for companies and industrial and provident societies, introduced as part of its implementation of EU AML directives. The regime places emphasis on data consistency and discrepancy reporting, reflecting Ireland’s focus on accurate, high-integrity filings. Access is restricted following EU court rulings, but reporting obligations remain central to Ireland’s AML framework.',
    overview: {
      registryName: 'Register of Beneficial Ownership (RBO)',
      responsibleAgency: 'Companies Registration Office (CRO)',
      inEffectSince: '2019',
      access: 'Authorities and obliged entities; restricted access for others'
    },
    whatToKnow2026: 'Ireland is expected to tighten discrepancy-reporting expectations under EU AML reforms. Entities should ensure data consistency across corporate records and RBO filings.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: true,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'at',
    name: 'Austria',
    region: 'Europe',
    description: 'Austria’s beneficial ownership register (WiEReG) is one of the more detailed transparency systems in the EU, requiring extensive information and documentation to substantiate beneficial owner declarations. Since its introduction in 2018, the register has been a cornerstone of Austria’s AML enforcement approach. Access has been narrowed, but Austria continues to strengthen verification and data-quality expectations under evolving EU legislation.',
    overview: {
      registryName: 'Wirtschaftliche Eigentümer Register (WiEReG)',
      responsibleAgency: 'Bundesministerium für Finanzen',
      inEffectSince: '2018',
      access: 'Authorities and obliged entities; restricted access for others'
    },
    whatToKnow2026: 'Austria is expected to further strengthen verification and consistency standards as part of the EU AML legislative package. Organizations should ensure documentation is complete and up to date.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: true,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'dk',
    name: 'Denmark',
    region: 'Europe',
    description: 'Denmark was an early adopter of beneficial ownership reporting, integrating BO data into its Central Business Register as part of its 2017 AML reforms. The system is supported by Denmark’s broader emphasis on corporate transparency and features active supervisory oversight. As EU AML reforms progress, Denmark is expected to refine its verification and access practices while maintaining strict expectations for accuracy.',
    overview: {
      registryName: 'Det Centrale Virksomhedsregister – Reelle Ejere (CVR)',
      responsibleAgency: 'Erhvervsstyrelsen',
      inEffectSince: '2017',
      access: 'Authorities and obliged entities; public access limited'
    },
    whatToKnow2026: 'Denmark is expected to refine BO verification practices under the EU AML reforms. Entities should ensure that reported BO information is accurate and supported by ownership documentation.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: true,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'fi',
    name: 'Finland',
    region: 'Europe',
    description: 'Finland’s beneficial ownership regime operates through the Trade Register and requires companies and certain associations to identify and report individuals who ultimately own or control them. Introduced in 2019, the system supports AML supervision by ensuring regulators have access to accurate, centralized ownership information. Finland continues to adapt its processes in line with EU AML reforms, particularly around verification and data consistency.',
    overview: {
      registryName: 'Kaupparekisteri – Omistajatiedot',
      responsibleAgency: 'Patentti- ja rekisterihallitus (PRH)',
      inEffectSince: '2019',
      access: 'Authorities and obliged entities; public access restricted'
    },
    whatToKnow2026: 'Finland continues adjusting processes in line with EU AML reforms, with focus on improving verification and consistency. Entities should ensure their filings reflect true ownership.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: true,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'no',
    name: 'Norway',
    region: 'Europe',
    description: 'Norway’s Beneficial Ownership Register was launched in phases beginning in 2021 as part of its implementation of the Money Laundering Act. Although not an EU member, Norway aligns closely with EU AML standards and continues expanding its reporting requirements to additional entity types. The register remains a foundational tool for Norwegian regulators seeking to strengthen financial transparency.',
    overview: {
      registryName: 'Register over reelle rettighetshavere',
      responsibleAgency: 'Brønnøysundregistrene',
      inEffectSince: '2021',
      access: 'Authorities and obliged entities; public access restricted'
    },
    whatToKnow2026: 'Norway continues expanding its BO framework to cover additional entities. Organizations should monitor updates as the regime evolves alongside EU standards.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: true,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'pt',
    name: 'Portugal',
    region: 'Europe',
    description: 'Portugal’s Central Register of Beneficial Owners (RCBE) was introduced in 2018 and is one of the broadest transparency frameworks in the region, covering companies, associations, foundations and trusts or similar arrangements. The register supports AML supervision and enhances corporate accountability. Continued alignment with EU AML reforms is expected to shape verification practices and technical standards in 2026.',
    overview: {
      registryName: 'Registo Central do Beneficiário Efetivo (RCBE)',
      responsibleAgency: 'Instituto dos Registos e do Notariado (IRN)',
      inEffectSince: '2018',
      access: 'Authorities and obliged entities; public access restricted'
    },
    whatToKnow2026: 'Portugal may update RCBE processes as EU AML reforms advance, including adjustments to verification standards. Entities should ensure that BO filings are consistent and accurate.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: true,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'cz',
    name: 'Czech Republic',
    region: 'Europe',
    description: 'The Czech Republic’s Beneficial Owners Register was established in 2018 to align with EU AML directives, requiring companies, trusts and similar structures to disclose their ultimate owners. Several legislative updates have refined the definitions and identification rules following court decisions. As EU reforms progress, the Czech Republic continues strengthening its approach to beneficial ownership transparency and data accuracy.',
    overview: {
      registryName: 'Evidence skutečných majitelů',
      responsibleAgency: 'Ministerstvo spravedlnosti',
      inEffectSince: '2018',
      access: 'Authorities and obliged entities; public access restricted'
    },
    whatToKnow2026: 'Updates to Czech legislation continue to refine identification rules following court decisions and EU guidance. Entities should verify that ownership information meets the updated statutory definitions.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: true,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'ro',
    name: 'Romania',
    region: 'Europe',
    description: 'Romania introduced its beneficial ownership register in 2020 as part of its AML modernization efforts, requiring companies, associations and foundations to disclose their beneficial owners to the Trade Register. Early administrative challenges have been resolved through procedural streamlining, resulting in a more stable and predictable filing process. Romania continues enhancing its transparency framework as part of broader alignment with EU AML reforms.',
    overview: {
      registryName: 'Registrul beneficiarilor reali',
      responsibleAgency: 'Oficiul Național al Registrului Comerțului (ONRC)',
      inEffectSince: '2020',
      access: 'Authorities and obliged entities; public access restricted'
    },
    whatToKnow2026: 'Romania continues modernizing corporate transparency rules and refining filing expectations under AML legislation. Entities should ensure timely updates and consistency across corporate filings.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: true,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },

  // MIDDLE EAST & AFRICA
  {
    id: 'ae',
    name: 'United Arab Emirates',
    region: 'Middle East & Africa',
    description: 'The UAE’s beneficial ownership framework has strengthened significantly in recent years as part of the country’s broader AML modernization initiatives. Cabinet Decision No. 109/2023 requires companies registered in the UAE mainland and most free zones to maintain and file UBO information. The regime reflects the UAE’s effort to enhance corporate transparency while balancing its multi-jurisdictional business environment.',
    overview: {
      registryName: 'Real Beneficiary Register',
      responsibleAgency: 'Ministry of Economy',
      inEffectSince: '2020',
      access: 'Authorities only (no public access)'
    },
    whatToKnow2026: 'The UAE has strengthened its beneficial ownership framework as part of its broader financial transparency and AML modernization efforts. The country introduced UBO reporting across mainland and most free zone entities, creating a unified national standard in a jurisdiction known for its diverse corporate structures. Recent regulatory updates continue to refine the system, reflecting the UAE’s commitment to aligning with global expectations while accommodating its dynamic commercial environment.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'sa',
    name: 'Saudi Arabia',
    region: 'Middle East & Africa',
    description: 'Saudi Arabia’s beneficial ownership regime has developed quickly alongside the country’s ambitious economic and regulatory reforms under Vision 2030. The framework requires companies to identify and report individuals who ultimately own or control them, supported by growing AML oversight and supervisory guidance. Saudi Arabia continues enhancing transparency measures as part of its effort to strengthen investor confidence and align with international reporting norms.',
    overview: {
      registryName: 'Real Beneficiary Register',
      responsibleAgency: 'Ministry of Commerce',
      inEffectSince: '2020',
      access: 'Authorities only (no public access)'
    },
    whatToKnow2026: 'Saudi Arabia is expected to continue refining its UBO requirements, with an emphasis on data accuracy and timely updates. Entities should monitor guidance from the Ministry of Commerce, particularly regarding alignment with FATF recommendations and sector-specific enforcement trends.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'il',
    name: 'Israel',
    region: 'Middle East & Africa',
    description: 'Israel maintains a structured beneficial ownership reporting system embedded in its Companies Law and AML regulations. The regime has expanded in recent years as authorities placed greater emphasis on transparency and data accuracy across the corporate sector. Israel’s growing oversight reflects its broader efforts to modernize financial controls and keep pace with evolving global transparency standards.',
    overview: {
      registryName: 'Beneficial Ownership Register',
      responsibleAgency: 'Israel Corporations Authority / Registrar of Companies',
      inEffectSince: '2019',
      access: 'Authorities and obliged entities; limited access for others'
    },
    whatToKnow2026: 'Israel continues developing its BO framework as part of broader AML compliance enhancements. Entities should ensure beneficial ownership information is updated and matches corporate filings, especially as supervisory bodies increase attention to accuracy and documentation.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'tr',
    name: 'Turkey',
    region: 'Middle East & Africa',
    description: 'Turkey introduced a nationwide beneficial ownership notification system in 2021 as part of sweeping updates to its AML legislation. The system requires companies to disclose individuals who ultimately own or control them, marking a notable shift in Turkey’s regulatory environment. Ongoing refinements to the regime reflect the country’s focus on strengthening oversight and aligning with international expectations.',
    overview: {
      registryName: 'Gerçek Faydalanıcı Bildirimi',
      responsibleAgency: 'Gelir İdaresi Başkanlığı',
      inEffectSince: '2021',
      access: 'Authorities only (no public access)'
    },
    whatToKnow2026: 'Turkey continues enhancing its AML supervision, with potential refinements to ownership classifications and filing expectations. Entities should ensure they maintain records that substantiate the identification of beneficial owners, including indirect control relationships.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'eg',
    name: 'Egypt',
    region: 'Middle East & Africa',
    description: 'Egypt’s beneficial ownership requirements form part of a broader push to enhance financial transparency and strengthen its AML regime. While the country does not yet operate a central UBO register, regulated entities must identify beneficial owners and be prepared to produce this information for supervisory authorities. Egypt’s framework continues to evolve as part of its long-term modernization of corporate reporting and oversight.',
    overview: {
      registryName: 'No central UBO register (AML-based disclosure requirements)',
      responsibleAgency: 'Financial Regulatory Authority (FRA)',
      inEffectSince: '2020',
      access: 'Authorities only (no public access)'
    },
    whatToKnow2026: 'Egypt continues building out its transparency and AML oversight systems. Entities should ensure beneficial ownership records are well documented and available for review by regulators, particularly in regulated financial and capital-market sectors.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '25% or control'
    }
  },
  {
    id: 'za',
    name: 'South Africa',
    region: 'Middle East & Africa',
    description: 'South Africa significantly expanded its beneficial ownership framework in 2023 following amendments to the Companies Act and related AML reforms. The introduction of centralized BO registers marked an important step in strengthening oversight and addressing gaps highlighted by FATF evaluations. As implementation continues, South Africa’s system has become one of the more comprehensive and closely supervised regimes on the African continent.',
    overview: {
      registryName: 'Beneficial Ownership Register (CIPC)',
      responsibleAgency: 'Companies and Intellectual Property Commission (CIPC)',
      inEffectSince: '2023',
      access: 'Authorities and obliged entities (no public access)'
    },
    whatToKnow2026: 'South Africa continues implementing reforms driven by its enhanced AML action plan. Entities should ensure filings are submitted through CIPC’s online platform and updated promptly, particularly as enforcement mechanisms are scaled up.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: true,
      overseasEntitiesRegister: false,
      threshold: '5%'
    }
  },
  {
    id: 'ir',
    name: 'Iran',
    region: 'Middle East & Africa',
    description: 'Iran’s beneficial ownership obligations operate through its AML legislation, requiring companies to identify individuals who ultimately control or benefit from their activities. Although Iran does not maintain a centralized UBO register, supervisory authorities have continued to expand expectations for internal documentation and disclosure. The framework remains primarily enforcement-driven, with increasing attention to the quality and completeness of company-held ownership records.',
    overview: {
      registryName: 'No central UBO register',
      responsibleAgency: 'Iran Financial Intelligence Unit (IRFIU)',
      inEffectSince: '2018',
      access: 'Authorities only (no public access)'
    },
    whatToKnow2026: 'Iran continues refining its AML framework in line with domestic legislative updates. Entities should ensure they maintain comprehensive internal ownership records given the absence of a centralized reporting mechanism.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '25% or control'
    }
  },

  // ASIA-PACIFIC
  {
    id: 'cn',
    name: 'China',
    region: 'Asia-Pacific',
    description: 'China’s beneficial ownership landscape is shaped by requirements embedded across its AML, tax and corporate reporting frameworks rather than through a single centralized register. Companies must identify individuals who ultimately control or benefit from their operations and provide this information to authorities or financial institutions as required. China’s evolving regulatory environment continues to place increasing emphasis on transparency and documentation, particularly for entities with complex ownership chains.',
    overview: {
      registryName: 'No central UBO register (AML and tax-based disclosure requirements)',
      responsibleAgency: 'People’s Bank of China (PBOC) and State Administration for Market Regulation (SAMR)',
      inEffectSince: 'AML obligations strengthened since 2018 reforms',
      access: 'Authorities only'
    },
    whatToKnow2026: 'China continues expanding AML supervision, with regulators placing greater scrutiny on beneficial ownership information provided during financial onboarding and compliance reviews. Companies with layered domestic or cross-border structures should ensure their documentation clearly identifies controlling individuals.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '25% or control'
    }
  },
  {
    id: 'hk',
    name: 'Hong Kong',
    region: 'Asia-Pacific',
    description: 'Hong Kong maintains a long-standing beneficial ownership framework through its Significant Controllers Register (SCR) requirement. Companies must identify and maintain accurate information on individuals who hold significant control, reflecting Hong Kong’s broader focus on maintaining corporate transparency while preserving its global business competitiveness. Although the SCR is not publicly searchable, it is a core part of Hong Kong’s AML compliance environment.',
    overview: {
      registryName: 'Significant Controllers Register (SCR)',
      responsibleAgency: 'Companies Registry',
      inEffectSince: '2018',
      access: 'Authorities and law enforcement (no public access)'
    },
    whatToKnow2026: 'Hong Kong continues refining guidance on SCR maintenance and inspections, with increasing emphasis on timely updates and complete documentation. Companies should ensure their internal registers align with shareholder records and corporate filings.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: true,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'jp',
    name: 'Japan',
    region: 'Asia-Pacific',
    description: 'Japan’s beneficial ownership obligations arise primarily through its AML and company law frameworks, which require financial institutions and regulated entities to identify individuals who ultimately control corporate customers. While Japan does not operate a public BO register, its emphasis on thorough KYC processes has made beneficial ownership verification a core part of compliance practices. Recent regulatory updates continue to strengthen expectations for transparency and identification accuracy.',
    overview: {
      registryName: 'No central UBO register (AML-based KYC system)',
      responsibleAgency: 'Japan Financial Services Agency (JFSA)',
      inEffectSince: 'AML obligations strengthened since 2018 reforms',
      access: 'Authorities only'
    },
    whatToKnow2026: 'Japan is implementing updates tied to FATF recommendations, with financial institutions expected to collect and verify more granular beneficial ownership information. Corporations should ensure that internal records align with what must be disclosed during onboarding and due-diligence reviews.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'in',
    name: 'India',
    region: 'Asia-Pacific',
    description: 'India’s beneficial ownership framework is grounded in the Companies Act, which requires companies to identify significant beneficial owners and file relevant disclosures with the Ministry of Corporate Affairs. The system applies to both direct and indirect control and is supported by evolving guidance intended to strengthen transparency across India’s corporate sector. Enforcement has increased in recent years, reflecting a broader national focus on financial integrity.',
    overview: {
      registryName: 'Significant Beneficial Owners Register (Companies Act filings)',
      responsibleAgency: 'Ministry of Corporate Affairs (MCA)',
      inEffectSince: '2018',
      access: 'Authorities only (no public access)'
    },
    whatToKnow2026: 'India continues to refine SBO rules with updated guidance on indirect control, reporting timelines and clarification of obligations for complex group structures. Companies should ensure timely filings and document how beneficial owners are identified.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: true,
      overseasEntitiesRegister: false,
      threshold: '10%'
    }
  },
  {
    id: 'pk',
    name: 'Pakistan',
    region: 'Asia-Pacific',
    description: 'Pakistan enhanced its beneficial ownership regime through amendments to the Companies Act and strengthened AML regulations aligned with FATF recommendations. Companies must identify natural persons who ultimately own or control them and provide this information to regulators when required. Pakistan’s transparency framework continues to mature as supervisory bodies focus on improving reporting quality and documentation standards.',
    overview: {
      registryName: 'Beneficial Ownership Register',
      responsibleAgency: 'Securities and Exchange Commission of Pakistan (SECP)',
      inEffectSince: '2020',
      access: 'Authorities only (no public access)'
    },
    whatToKnow2026: 'Pakistan continues aligning its AML framework with FATF standards. Entities should expect continued supervisory focus on the accuracy and timeliness of beneficial ownership filings, especially in sectors with elevated AML risk.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'kz',
    name: 'Kazakhstan',
    region: 'Asia-Pacific',
    description: 'Kazakhstan’s beneficial ownership framework is grounded in AML legislation that requires companies to identify and document their ultimate owners. Although the country does not operate a central public register, authorities have increased supervisory expectations as part of broader financial-crime risk mitigation efforts. Kazakhstan’s approach continues to evolve as it works to strengthen transparency and align more closely with international practices.',
    overview: {
      registryName: 'No central UBO register (AML-based disclosure system)',
      responsibleAgency: 'Қаржы мониторингі агенттігі (FMA, Financial Monitoring Agency of the Republic of Kazakhstan)',
      inEffectSince: '2020',
      access: 'Authorities only (no public access)'
    },
    whatToKnow2026: 'Kazakhstan is modernizing its transparency framework, with ongoing enhancements to beneficial ownership guidance and supervisory expectations. Entities should ensure ownership information is current and well documented given increasing regulatory scrutiny.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'au',
    name: 'Australia',
    region: 'Asia-Pacific',
    description: 'Australia does not yet operate a centralized publicly accessible beneficial ownership register, but companies are required to maintain accurate internal BO information under the Corporations Act and AML rules. Australia continues to modernize its transparency regime, including consultations on the creation of a public BO register in line with international expectations. The country’s corporate landscape places strong emphasis on shareholder disclosure, especially for significant holdings.',
    overview: {
      registryName: 'No central UBO register (company-maintained information)',
      responsibleAgency: 'Australian Securities and Investments Commission (ASIC)',
      inEffectSince: 'Ongoing requirements under the AML/CTF Act',
      access: 'Authorities only'
    },
    whatToKnow2026: 'Australia continues to evaluate the establishment of a public beneficial ownership register as part of its corporate transparency reforms. Companies should maintain comprehensive BO documentation in anticipation of potential structural changes.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '20% (significant ownership disclosure threshold)'
    }
  },
  {
    id: 'kr',
    name: 'South Korea',
    region: 'Asia-Pacific',
    description: 'South Korea’s beneficial ownership framework operates through its AML and financial regulatory systems, requiring companies and financial institutions to identify and report ultimate beneficial owners during due diligence processes. The country continues strengthening its transparency landscape in line with evolving FATF guidance. Corporate groups with layered structures are expected to maintain clear documentation of ultimate control.',
    overview: {
      registryName: 'No central UBO register (AML-based system)',
      responsibleAgency: 'Korea Financial Intelligence Unit (KoFIU)',
      inEffectSince: 'AML rules strengthened 2019–2022',
      access: 'Authorities only'
    },
    whatToKnow2026: 'South Korea is expected to enhance BO expectations for financial institutions, including more specific verification requirements for complex structures. Companies should ensure clarity around indirect ownership and control paths.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'tw',
    name: 'Taiwan',
    region: 'Asia-Pacific',
    description: 'Taiwan’s beneficial ownership requirements are driven by AML legislation and corporate governance rules, with companies required to identify and document individuals who ultimately own or control them. While no central BO register exists, Taiwan has steadily strengthened transparency expectations, particularly for regulated sectors.',
    overview: {
      registryName: 'No central UBO register',
      responsibleAgency: 'Department of Commerce, Ministry of Economic Affairs',
      inEffectSince: 'AML rules strengthened in 2018–2021',
      access: 'Authorities only'
    },
    whatToKnow2026: 'Taiwan continues refining BO expectations as part of its FATF-aligned AML reforms. Companies should ensure internal records adequately reflect beneficial ownership, especially across cross-border structures.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'id',
    name: 'Indonesia',
    region: 'Asia-Pacific',
    description: 'Indonesia introduced a formal beneficial ownership identification requirement in 2018, marking a significant step toward enhancing financial transparency. Companies must identify natural persons who ultimately own or control them, and this information must be available to regulators and financial institutions upon request. The system forms part of Indonesia’s broader AML and governance modernization agenda.',
    overview: {
      registryName: 'Beneficial Ownership Reporting System (Laporan Pemilik Manfaat)',
      responsibleAgency: 'Ministry of Law and Human Rights',
      inEffectSince: '2018',
      access: 'Authorities only (no public access)'
    },
    whatToKnow2026: 'Indonesia continues expanding its AML supervision, including closer review of beneficial ownership information provided in regulatory filings. Companies should ensure BO documentation is complete, especially where ownership flows through offshore entities.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'th',
    name: 'Thailand',
    region: 'Asia-Pacific',
    description: 'Thailand requires legal entities to identify beneficial owners under its AML framework, with responsibility placed on companies to maintain and provide accurate BO information during regulatory reviews. The regime is grounded in Thailand’s broader efforts to strengthen financial integrity and align with international reporting standards.',
    overview: {
      registryName: 'No central UBO register (AML-based disclosure)',
      responsibleAgency: 'Department of Business Development (DBD)',
      inEffectSince: 'AML rules strengthened since 2018',
      access: 'Authorities only'
    },
    whatToKnow2026: 'Thailand continues modernizing its AML regulations and may refine criteria for identifying controlling individuals. Organizations should maintain clear BO documentation for corporate filings and due-diligence processes.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'sg',
    name: 'Singapore',
    region: 'Asia-Pacific',
    description: 'Singapore maintains a structured beneficial ownership framework through its Register of Registrable Controllers (RORC). Companies, limited liability partnerships and variable capital companies must identify and maintain information on individuals who ultimately own or control them. The RORC system reflects Singapore’s long-standing emphasis on corporate governance and regulatory discipline.',
    overview: {
      registryName: 'Register of Registrable Controllers (RORC)',
      responsibleAgency: 'Accounting and Corporate Regulatory Authority (ACRA)',
      inEffectSince: '2017',
      access: 'Authorities only (no public access)'
    },
    whatToKnow2026: 'Singapore continues strengthening RORC compliance expectations, including updates to record-keeping rules and increased supervisory focus. Entities should ensure controller information is accurate and backed by appropriate documentation.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: true,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'bd',
    name: 'Bangladesh',
    region: 'Asia-Pacific',
    description: 'Bangladesh’s beneficial ownership framework is based primarily on AML legislation and reporting requirements overseen by the Bangladesh Financial Intelligence Unit. Companies must identify the individuals who ultimately control or benefit from their operations, and financial institutions are required to verify this information during due diligence.',
    overview: {
      registryName: 'No central UBO register',
      responsibleAgency: 'Bangladesh Financial Intelligence Unit (BFIU)',
      inEffectSince: 'AML rules strengthened since 2019',
      access: 'Authorities only'
    },
    whatToKnow2026: 'Bangladesh continues developing its transparency expectations in line with FATF guidance. Companies should ensure beneficial ownership information is accurate and available for regulatory or financial-sector review.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'my',
    name: 'Malaysia',
    region: 'Asia-Pacific',
    description: 'Malaysia’s beneficial ownership system is structured through the Companies Act, requiring companies to identify and maintain information on individuals who ultimately own or control them. The Companies Commission of Malaysia introduced detailed guidance to strengthen BO transparency and align with global AML expectations.',
    overview: {
      registryName: 'Beneficial Ownership Register (Companies Act filings)',
      responsibleAgency: 'Companies Commission of Malaysia (SSM)',
      inEffectSince: '2020',
      access: 'Authorities only (no public access)'
    },
    whatToKnow2026: 'Malaysia continues refining BO requirements with updates to reporting guidance and expectations for verification. Companies should ensure timeliness and completeness of their BO information, especially where ownership includes foreign intermediaries.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '20%'
    }
  },
  {
    id: 'ph',
    name: 'Philippines',
    region: 'Asia-Pacific',
    description: 'The Philippines’ beneficial ownership framework is founded in AML legislation overseen by the Anti-Money Laundering Council (AMLC). Companies must identify beneficial owners and provide this information during regulatory reviews or financial-sector due diligence. The country continues building out its transparency expectations as part of broader AML modernization.',
    overview: {
      registryName: 'No central UBO register (AML-based disclosure)',
      responsibleAgency: 'Anti-Money Laundering Council (AMLC)',
      inEffectSince: '2018',
      access: 'Authorities only'
    },
    whatToKnow2026: 'The Philippines is expanding supervisory monitoring of BO documentation, especially for entities involved in cross-border transactions. Companies should ensure clarity around indirect ownership and control.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  },
  {
    id: 'vn',
    name: 'Vietnam',
    region: 'Asia-Pacific',
    description: 'Vietnam’s beneficial ownership obligations arise from its AML law and corporate reporting rules, requiring entities to identify individuals who ultimately own or control them. While there is no central UBO register, financial institutions and regulators increasingly rely on beneficial ownership information during compliance reviews.',
    overview: {
      registryName: 'No central UBO register',
      responsibleAgency: 'State Bank of Vietnam (SBV)',
      inEffectSince: 'AML rules strengthened since 2022 revision',
      access: 'Authorities only'
    },
    whatToKnow2026: 'Vietnam continues refining AML processes with greater attention to beneficial ownership documentation, particularly in sectors with elevated financial-crime risk. Entities should maintain complete records and ensure they can demonstrate how beneficial owners were identified.',
    requirements: {
      trustDisclosure: 'Yes',
      pscRegister: false,
      overseasEntitiesRegister: false,
      threshold: '25%'
    }
  }
];
