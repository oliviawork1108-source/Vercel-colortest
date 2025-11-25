
import { Language } from './types';

export const translations = {
  en: {
    seasons: {
      Spring: "Spring",
      Summer: "Summer",
      Autumn: "Autumn",
      Winter: "Winter"
    },
    metals: {
        Gold: "Gold",
        Silver: "Silver",
        "Rose Gold": "Rose Gold",
        Champagne: "Champagne"
    },
    hero: {
      title: "Discover Your",
      titleHighlight: "Seasonal Colors",
      subtitle: "Unlock your true radiance with AI-powered personal color analysis. Find the palette that harmonizes perfectly with your skin, eyes, and hair.",
      cta: "Start Analysis",
      seasons: ["Spring Warm", "Summer Cool", "Autumn Warm", "Winter Cool"]
    },
    uploader: {
      title: "Upload Your Photo",
      desc: "For accuracy, please follow the guidelines below.",
      drop: "Click to upload or drag and drop",
      dropActive: "Drop image here",
      format: "JPG, PNG (Max 5MB)",
      or: "Or",
      selfie: "Take a Selfie",
      cancel: "Cancel",
      cameraError: "Could not access camera. Please upload a file instead.",
      guidelines: {
        title: "Photo Guidelines",
        light: "Use natural daylight, face a window.",
        shadow: "Avoid harsh shadows or strong backlight.",
        clean: "No makeup, no glasses, neutral background.",
      },
      quality: {
        analyzing: "Checking lighting...",
        good: "Lighting looks good!",
        too_dark: "Too dark. Please find more light.",
        too_bright: "Too bright. Move away from direct sun.",
        too_low: "Image is foggy/unclear. Wipe lens?",
        warm_cast: "Lighting is very yellow. Try daylight.",
        cool_cast: "Lighting is very blue.",
        rejected: "Photo quality is too low for accurate analysis."
      }
    },
    loading: {
      title: "Conducting Diagnosis",
      desc: "Step 1: Auto White Balance Correction.\nStep 2: ROI Segmentation (Excluding eyes/lips).\nStep 3: CIELAB Skin Tone Profiling..."
    },
    result: {
      reportTitle: "Color Test Diagnosis Report",
      
      skinAnalysisTitle: "01. Skin Tone Analysis",
      regionSampling: "Multi-Region Sampling",
      forehead: "Forehead",
      cheek: "Cheek",
      neck: "Neck",
      dimensions: "Color Dimensions",
      hue: "Hue",
      value: "Value",
      chroma: "Chroma",
      contrastMethod: "Virtual Draping Test",
      whiteReaction: "Reaction to White",

      personalColor: "02. Personal Colors",
      bestSeason: "Best Season",
      secondarySeason: "Suitable Season",
      worstSeason: "Unsuitable Season",
      scalesTitle: "03. Analysis Scales",
      warm: "Warm",
      cool: "Cool",
      light: "Light",
      deep: "Deep",
      bright: "Bright/Clear",
      muted: "Muted/Soft",
      contrast: "Contrast",
      low: "Low",
      high: "High",
      pccsTitle: "04. PCCS Tone Map",
      harmony: "Harmony",
      bestMatch: "Best Match",
      styleProfile: "05. Style Profile",
      volume: "Volume / Mass",
      shape: "Face Shape Type",
      small: "Small",
      medium: "Medium",
      large: "Large",
      curved: "Curved",
      straight: "Straight",
      natural: "Natural",
      recommendationsTitle: "06. Personalized Recommendations",
      metals: "Metals",
      hairColor: "Hair Color",
      contacts: "Contact Lenses",
      perfume: "Perfume",
      fabrics: "Fabrics",
      accessories: "Accessories",
      download: "Download Report",
      reset: "New Analysis",
      stylePersona: "Style Persona",
      styleKeywords: "Keywords",
      paletteTitle: "07. Color Palettes",
      bestPalette: "Best Palette",
      avoidPalette: "Colors to Avoid",
    },
    error: {
      title: "Analysis Failed",
      retry: "Try Again"
    }
  },
  zh: {
    seasons: {
      Spring: "春季型",
      Summer: "夏季型",
      Autumn: "秋季型",
      Winter: "冬季型"
    },
    metals: {
        Gold: "金色",
        Silver: "银色",
        "Rose Gold": "玫瑰金",
        Champagne: "香槟金"
    },
    hero: {
      title: "发现你的",
      titleHighlight: "专属四季色彩",
      subtitle: "通过AI个人色彩分析，解锁你的独特光彩。寻找与你的肤色、瞳色和发色完美融合的色彩组合。",
      cta: "开始分析",
      seasons: ["春季暖调", "夏季冷调", "秋季暖调", "冬季冷调"]
    },
    uploader: {
      title: "上传你的照片",
      desc: "为确保诊断准确，请严格遵守以下拍摄规范。",
      drop: "点击上传或拖拽文件",
      dropActive: "放开以上传",
      format: "JPG, PNG (最大 5MB)",
      or: "或者",
      selfie: "拍摄自拍",
      cancel: "取消",
      cameraError: "无法访问摄像头，请尝试上传文件。",
      guidelines: {
        title: "拍摄规范",
        light: "面向窗户自然光，避免阳光直射。",
        shadow: "避免面部阴影，避免背光。",
        clean: "素颜、摘眼镜，使用纯色/白墙背景。",
      },
      quality: {
        analyzing: "正在检测光线...",
        good: "光线条件良好！",
        too_dark: "光线太暗，请寻找更亮的环境。",
        too_bright: "光线太强，请避开直射光。",
        too_low: "照片模糊，请擦拭镜头。",
        warm_cast: "光线偏黄，建议使用自然光。",
        cool_cast: "光线偏蓝，建议使用自然光。",
        rejected: "照片质量不达标，无法进行精确分析。"
      }
    },
    loading: {
      title: "正在进行色彩诊断",
      desc: "步骤 1: 自动白平衡校正。\n步骤 2: ROI 面部区域分割 (排除干扰色)。\n步骤 3: CIELAB 肤色空间分析..."
    },
    result: {
      reportTitle: "色彩测试诊断报告内容",
      
      skinAnalysisTitle: "一、肤色采样与维度分析",
      regionSampling: "多区域采样 (Multi-Region Sampling)",
      forehead: "前额区",
      cheek: "脸颊区 (排除红血丝)",
      neck: "颈部/下颌 (基底色)",
      dimensions: "色彩特征提取",
      hue: "色相 (Hue)",
      value: "明度 (Value)",
      chroma: "饱和度 (Chroma)",
      contrastMethod: "背景对比测试 (Virtual Draping)",
      whiteReaction: "白背景反应",

      personalColor: "二、你的个人色彩",
      bestSeason: "最佳季节",
      secondarySeason: "适合季节",
      worstSeason: "不适合季节",
      scalesTitle: "三、冷暖、明度、彩度、程度推荐",
      warm: "暖 Warm",
      cool: "冷 Cool",
      light: "高明度 Light",
      deep: "低明度 Deep",
      bright: "清/鲜 Clear",
      muted: "浊/柔 Muted",
      contrast: "对比度",
      low: "弱",
      high: "强",
      pccsTitle: "四、PCCS色调分布",
      harmony: "和谐度",
      bestMatch: "最佳匹配",
      styleProfile: "五、整体量感与曲直类型",
      volume: "整体量感",
      shape: "曲直类型",
      small: "小量感",
      medium: "中量感",
      large: "大量感",
      curved: "曲线型",
      straight: "直线型",
      natural: "自然型/中间型",
      recommendationsTitle: "六、个人形象定制建议",
      metals: "金银色系推荐",
      hairColor: "头发颜色",
      contacts: "美瞳色彩",
      perfume: "香水",
      fabrics: "面料材质",
      accessories: "饰品材质",
      download: "保存诊断报告",
      reset: "重新测试",
      stylePersona: "风格定位",
      styleKeywords: "风格关键词",
      paletteTitle: "七、专属色彩搭配",
      bestPalette: "最佳色板",
      avoidPalette: "规避色板",
    },
    error: {
      title: "分析失败",
      retry: "重试"
    }
  }
};

export const getTranslation = (lang: Language) => translations[lang];
