
export enum SeasonType {
  Spring = "Spring",
  Summer = "Summer",
  Autumn = "Autumn",
  Winter = "Winter"
}

export type Language = 'en' | 'zh';

export interface ColorSwatch {
  hex: string;
  name: string;
}

export interface SkinAnalysis {
  regions: {
    forehead: string; // Hex color
    cheek: string; // Hex color
    neck: string; // Hex color
  };
  dimensions: {
    hueAngle: number; // 0-360 (Visual indicator of Warm vs Cool)
    value: number; // 0-100 (Light vs Deep)
    chroma: number; // 0-100 (Muted vs Bright)
  };
  contrastMethod: {
    whiteBackgroundResult: string; // Description of skin reaction to white
    reactionToGold: string;
    reactionToSilver: string;
  };
}

export interface SeasonMatch {
  season: SeasonType;
  score: number; // 0-100 compatibility score
  reason: string; // Short explanation (e.g., "Makes skin look yellowish")
}

export interface DetailedAnalysis {
  season: SeasonType;
  secondarySeason: SeasonType;
  worstSeason: SeasonType;
  
  // Comparative Analysis
  seasonMatches: {
    spring: SeasonMatch;
    summer: SeasonMatch;
    autumn: SeasonMatch;
    winter: SeasonMatch;
  };

  // 0-100 scales
  scales: {
    warmToCool: number; // 0 (Warm) - 50 (Neutral) - 100 (Cool)
    lightToDeep: number; // 0 (Light) - 100 (Deep)
    brightToMuted: number; // 0 (Bright/Clear) - 100 (Muted/Soft)
    contrastLevel: number; // 0 (Low) - 100 (High)
  };

  // PCCS Tone Groups
  pccsTones: ('pale' | 'light' | 'bright' | 'vivid' | 'light_grayish' | 'soft' | 'strong' | 'grayish' | 'dull' | 'deep' | 'dark_grayish' | 'dark')[];

  // Style Factors
  volume: 'Small' | 'Medium' | 'Large';
  shape: 'Curved' | 'Straight' | 'Natural';
  
  // Specific recommendations
  bestMetals: ('Gold' | 'Silver' | 'Rose Gold' | 'Champagne')[];
  hairColors: ColorSwatch[];
  contactLenses: ColorSwatch[];
  perfumeNotes: string[];
  fabricTextures: string[];
  accessoryMaterials: string[];
}

export interface AnalysisResult extends DetailedAnalysis {
  subtype: string; // e.g. "Light Spring"
  description: string;
  skinAnalysis: SkinAnalysis; // NEW SECTION
  features: {
    skinTone: string;
    eyeColor: string;
    hairColor: string;
  };
  palette: {
    bestColors: ColorSwatch[];
    worstColors: ColorSwatch[];
    neutrals: ColorSwatch[];
  };
  recommendations: {
    makeup: {
      foundation: string;
      blush: string;
      lipstick: string;
      eyeshadow: string;
    };
    jewelry: string;
    fashionTips: string;
  };
  visualGuide: {
    makeupLook: 'peach' | 'rose' | 'berry' | 'red' | 'nude' | 'contrast';
    metal: 'gold' | 'silver' | 'rose_gold';
    fabric: 'linen' | 'silk' | 'wool' | 'leather' | 'denim';
  };
  stylePersona: {
    keywords: string[];
    description: string;
  };
}

export type AppState = 'landing' | 'upload' | 'analyzing' | 'result' | 'error';

export interface ImageQualityResult {
  isValid: boolean;
  brightness: 'good' | 'too_dark' | 'too_bright';
  contrast: 'good' | 'too_low';
  lightingColor: 'neutral' | 'too_warm' | 'too_cool';
  score: number; // 0-100
  issues: string[];
}
