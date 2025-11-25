import React, { useState } from 'react';
import Hero from './components/Hero';
import Uploader from './components/Uploader';
import LoadingScreen from './components/LoadingScreen';
import ResultView from './components/ResultView';
import { analyzeImage } from './services/geminiService';
import { AnalysisResult, AppState, Language } from './types';
import { getTranslation } from './translations';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('landing');
  const [userImage, setUserImage] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [lang, setLang] = useState<Language>('en');

  const t = getTranslation(lang);

  const handleImageSelected = async (base64: string) => {
    setUserImage(base64);
    setAppState('analyzing');
    setErrorMsg(null);

    try {
      const result = await analyzeImage(base64, lang);
      setAnalysisResult(result);
      setAppState('result');
    } catch (err) {
      console.error(err);
      setErrorMsg(lang === 'zh' 
        ? "我们无法清晰地分析这张照片。请尝试光线更好的照片。" 
        : "We couldn't analyze the image clearly. Please try a photo with better lighting.");
      setAppState('error');
    }
  };

  const handleReset = () => {
    setAppState('upload');
    setUserImage(null);
    setAnalysisResult(null);
  };

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'zh' : 'en';
    setLang(newLang);
    // If we are already displaying a result, we might want to warn the user 
    // that the result won't translate instantly, but for now we just switch UI.
  };

  const renderContent = () => {
    switch (appState) {
      case 'landing':
        return <Hero onStart={() => setAppState('upload')} lang={lang} />;
      
      case 'upload':
        return <Uploader onImageSelected={handleImageSelected} lang={lang} />;
      
      case 'analyzing':
        return <LoadingScreen lang={lang} />;
      
      case 'result':
        if (analysisResult && userImage) {
          return (
            <ResultView 
              result={analysisResult} 
              userImage={userImage} 
              onReset={handleReset} 
              lang={lang}
            />
          );
        }
        return <div className="text-center">Error loading results.</div>;

      case 'error':
        return (
          <div className="text-center p-8 max-w-md mx-auto mt-20">
             <div className="w-16 h-16 bg-red-50 text-red-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">!</div>
             <h3 className="text-xl font-serif text-stone-800 mb-2">{t.error.title}</h3>
             <p className="text-stone-500 mb-6">{errorMsg}</p>
             <button 
                onClick={() => setAppState('upload')}
                className="px-6 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-700 transition-colors"
             >
                {t.error.retry}
             </button>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-rose-200">
      <header className="py-6 px-6 md:px-12 flex justify-between items-center z-10">
        <div className="flex items-center cursor-pointer" onClick={() => setAppState('landing')}>
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-rose-400 to-orange-300 mr-2"></div>
          <span className="font-serif text-xl font-semibold tracking-tight text-stone-900">ChromaSeason</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <button 
            onClick={toggleLanguage}
            className="text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors uppercase tracking-wider"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>
          
          {appState !== 'landing' && (
             <button onClick={() => setAppState('landing')} className="text-sm text-stone-400 hover:text-stone-800 transition-colors">
                {lang === 'en' ? 'Home' : '首页'}
             </button>
          )}
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 md:px-6 relative">
        {renderContent()}
      </main>

      <footer className="py-8 text-center text-stone-400 text-xs font-light">
        <p>© {new Date().getFullYear()} ChromaSeason AI. Powered by Google Gemini.</p>
      </footer>
    </div>
  );
};

export default App;