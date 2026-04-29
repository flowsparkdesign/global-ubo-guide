export interface CountryUboData {
  id: string;
  name: string;
  region: 'Americas' | 'Europe' | 'Middle East & Africa' | 'Asia-Pacific';
  description: string;
  overview: {
    registryName: string;
    responsibleAgency: string;
    inEffectSince: string;
    access: string;
  };
  whatToKnow2026: string;
  requirements: {
    trustDisclosure: string;
    pscRegister: boolean;
    overseasEntitiesRegister: boolean;
    threshold: string;
  };
}

export type Region = CountryUboData['region'];
