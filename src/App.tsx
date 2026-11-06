import { useState, useMemo, useEffect } from 'react';
import { HADITHS_DATA, STAGES } from './data/hadiths';
import type { HadithItem } from './data/hadiths';
import { DesktopSidebar } from './components/layout/DesktopSidebar';
import { BottomNav } from './components/navigation/BottomNav';
import type { MobileNavTab } from './components/navigation/BottomNav';
import { SHORT_STAGE_LABELS } from './components/navigation/stageLabels';
import { HadithListItem } from './components/hadith/HadithListItem';
import { HadithReader } from './components/hadith/HadithReader';
import { FilterBottomSheet } from './components/filters/FilterBottomSheet';
import { EdukasiMenuSheet } from './components/modals/EdukasiMenuSheet';
import { QuoteStudioView } from './components/quote-studio/QuoteStudioView';
import { FivePillarsView } from './components/education/FivePillarsView';
import { RelationQuizView } from './components/quiz/RelationQuizView';
import { LibraryPage } from './pages/LibraryPage';
import { HadithDetailPage } from './pages/HadithDetailPage';
import { SavedPage } from './pages/SavedPage';
import { AboutProfilePage } from './pages/AboutProfilePage';
import { Bookmark, Share2, RotateCcw, BookOpen } from 'lucide-react';

type ActiveRoute = 'library' | 'detail' | 'quote' | 'pillars' | 'quiz' | 'saved' | 'about';

const getInitialRoute = (): ActiveRoute => {
  if (typeof window !== 'undefined') {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (['library', 'detail', 'quote', 'pillars', 'quiz', 'saved', 'about'].includes(hash)) {
      return hash as ActiveRoute;
    }
    if (hash === 'profil' || hash === 'profile') {
      return 'about';
    }
  }
  return 'library';
};

export function App() {
  const [route, setRoute] = useState<ActiveRoute>(getInitialRoute);
  const [previousRoute, setPreviousRoute] = useState<ActiveRoute>('library');

  const [selectedStageId, setSelectedStageId] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [activeHadith, setActiveHadith] = useState<HadithItem>(HADITHS_DATA[0]);

  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState<boolean>(false);
  const [isEdukasiSheetOpen, setIsEdukasiSheetOpen] = useState<boolean>(false);

  // Saved Hadith IDs persisted in localStorage
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('hadis_keluarga_saved');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const toggleSaveHadith = (id: string) => {
    setSavedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try {
        localStorage.setItem('hadis_keluarga_saved', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  // Filtered Hadiths
  const filteredHadiths = useMemo(() => {
    return HADITHS_DATA.filter((item) => {
      if (selectedStageId !== 'all' && item.stageId !== selectedStageId) {
        return false;
      }

      if (
        selectedTag &&
        !item.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase())
      ) {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inTitle = item.title.toLowerCase().includes(q);
        const inTranslation = item.terjemahan.toLowerCase().includes(q);
        const inKitab = item.kitab.toLowerCase().includes(q);
        const inNo = item.noHadis.toLowerCase().includes(q);
        const inRawi = item.rawi.toLowerCase().includes(q);
        const inTags = item.tags.some((t) => t.toLowerCase().includes(q));
        const inMubadalah = item.pemaknaanMubadalah.ringkasan.toLowerCase().includes(q);
        return inTitle || inTranslation || inKitab || inNo || inRawi || inTags || inMubadalah;
      }

      return true;
    });
  }, [selectedStageId, selectedTag, searchQuery]);

  const savedHadithList = useMemo(
    () => HADITHS_DATA.filter((h) => savedIds.includes(h.id)),
    [savedIds]
  );

  // Ensure Desktop Right Reading Pane stays in sync with filtered results when applicable
  const desktopDisplayedHadith = useMemo(() => {
    if (filteredHadiths.some((h) => h.id === activeHadith.id)) {
      return activeHadith;
    }
    return filteredHadiths[0] || activeHadith;
  }, [filteredHadiths, activeHadith]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['library', 'detail', 'quote', 'pillars', 'quiz', 'saved'].includes(hash)) {
        setRoute(hash as ActiveRoute);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (nextRoute: ActiveRoute) => {
    setPreviousRoute(route);
    setRoute(nextRoute);
    try {
      window.location.hash = nextRoute;
    } catch (e) {
      console.error(e);
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const handleOpenHadith = (hadith: HadithItem) => {
    setActiveHadith(hadith);
    navigateTo('detail');
  };

  const handleOpenQuoteStudio = (hadith: HadithItem) => {
    setActiveHadith(hadith);
    navigateTo('quote');
  };

  const handleResetFilters = () => {
    setSelectedStageId('all');
    setSelectedTag(null);
    setSearchQuery('');
  };

  const handleSelectTagFromReader = (tag: string) => {
    setSelectedStageId('all');
    setSelectedTag(tag);
    setRoute('library');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const desktopActiveMode: 'library' | 'pillars' | 'quiz' | 'saved' | 'quote' | 'about' =
    route === 'pillars' || route === 'quiz' || route === 'saved' || route === 'quote' || route === 'about'
      ? route
      : 'library';

  const mobileActiveNavTab: MobileNavTab = useMemo(() => {
    if (route === 'saved') return 'tersimpan';
    if (route === 'pillars' || route === 'quiz') return 'edukasi';
    return 'bacaan';
  }, [route]);

  const hasActiveFilter = selectedStageId !== 'all' || selectedTag !== null;

  const desktopCanonicalIdx =
    HADITHS_DATA.findIndex((h) => h.id === desktopDisplayedHadith.id) + 1;
  const desktopStageIdx = STAGES.findIndex(
    (s) => s.id === desktopDisplayedHadith.stageId
  );
  const desktopStageShort =
    desktopStageIdx >= 0
      ? `${desktopStageIdx + 1}. ${
          SHORT_STAGE_LABELS[desktopDisplayedHadith.stageId] ||
          STAGES[desktopStageIdx].title
        }`
      : desktopDisplayedHadith.stageId;

  return (
    <div className="min-h-dvh bg-white text-[#111827] flex flex-col lg:flex-row">
      {/* =================================================================
          1. DESKTOP LEFT SIDEBAR (>= 1024px)
      ================================================================= */}
      <DesktopSidebar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedStageId={selectedStageId}
        onSelectStage={setSelectedStageId}
        selectedTag={selectedTag}
        onSelectTag={setSelectedTag}
        savedCount={savedIds.length}
        activeDesktopView={desktopActiveMode}
        onOpenLibrary={() => setRoute('library')}
        onOpenPillars={() => navigateTo('pillars')}
        onOpenQuiz={() => navigateTo('quiz')}
        onOpenSaved={() => navigateTo('saved')}
        onOpenProfile={() => navigateTo('about')}
        onResetAll={handleResetFilters}
      />

      {/* =================================================================
          2. DESKTOP 3-COLUMN WORKSPACE (>= 1024px)
      ================================================================= */}
      <div className="hidden lg:flex flex-1 min-w-0">
        {desktopActiveMode === 'library' ? (
          <>
            {/* Middle Column: Daftar Hadis */}
            <section
              aria-label="Daftar Riwayat Hadis"
              className="lg:w-[320px] xl:w-[360px] shrink-0 h-dvh sticky top-0 overflow-y-auto border-r border-[#E5E7EB] bg-white p-4 space-y-3"
            >
              <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-[#E5E7EB]">
                <div className="min-w-0">
                  <h1 className="text-sm font-bold font-sans text-[#111827] truncate tracking-tight">
                    {selectedStageId !== 'all'
                      ? STAGES.find((s) => s.id === selectedStageId)?.title
                      : selectedTag
                      ? `Topik: ${selectedTag}`
                      : 'Seluruh Riwayat Hadis'}
                  </h1>
                  <p className="text-[11px] text-[#6B7280]">
                    {filteredHadiths.length} hadis ditampilkan
                  </p>
                </div>

                {(hasActiveFilter || searchQuery.trim() !== '') && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="min-h-[34px] px-2.5 py-1 rounded-lg bg-[#F9F7F5] border border-[#E5E7EB] text-[11px] font-medium text-[#795A3F] hover:bg-white flex items-center gap-1 shrink-0 transition"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {filteredHadiths.length === 0 ? (
                <div className="rounded-xl border border-[#E5E7EB] bg-white p-6 text-center space-y-2.5">
                  <BookOpen className="w-6 h-6 text-[#9CA3AF] mx-auto" />
                  <p className="text-xs font-semibold text-[#111827]">
                    Tidak ada hadis yang cocok
                  </p>
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="min-h-[36px] px-3 py-1.5 rounded-lg border border-[#E5E7EB] text-xs font-medium text-[#795A3F] hover:bg-[#F9F7F5] transition"
                  >
                    Reset Filter
                  </button>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {filteredHadiths.map((item) => {
                    const num = HADITHS_DATA.findIndex((h) => h.id === item.id) + 1;
                    return (
                      <HadithListItem
                        key={item.id}
                        hadith={item}
                        canonicalNumber={num}
                        isSaved={savedIds.includes(item.id)}
                        isActiveDesktop={desktopDisplayedHadith.id === item.id}
                        onSelect={(h) => setActiveHadith(h)}
                        onToggleSave={toggleSaveHadith}
                      />
                    );
                  })}
                </div>
              )}
            </section>

            {/* Right Column: Area Pembacaan Utama */}
            <main className="flex-1 min-w-0 bg-white overflow-y-auto">
              {/* Top Breadcrumb Bar */}
              <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-xs border-b border-[#E5E7EB] px-6 xl:px-8 h-14 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#6B7280] font-medium truncate font-sans">
                  <span className="text-[#111827] font-semibold">{desktopStageShort}</span>
                  <span aria-hidden="true">›</span>
                  <span className="text-[#4B5563] font-semibold">
                    #{desktopCanonicalIdx}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => toggleSaveHadith(desktopDisplayedHadith.id)}
                    aria-label={
                      savedIds.includes(desktopDisplayedHadith.id)
                        ? 'Hapus dari tersimpan'
                        : 'Simpan hadis'
                    }
                    className="min-w-[40px] min-h-[40px] rounded-lg border border-[#E5E7EB] bg-white hover:bg-gray-50 flex items-center justify-center text-[#111827] transition"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        savedIds.includes(desktopDisplayedHadith.id)
                          ? 'text-[#795A3F] fill-[#795A3F]'
                          : 'text-[#6B7280]'
                      }`}
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOpenQuoteStudio(desktopDisplayedHadith)}
                    className="min-h-[40px] px-3.5 text-xs font-medium rounded-lg border border-[#E5E7EB] text-[#374151] hover:bg-gray-50 flex items-center gap-1.5 transition"
                  >
                    <Share2 className="w-3.5 h-3.5 text-[#795A3F]" />
                    <span>Kartu Kutipan</span>
                  </button>
                </div>
              </div>

              <div className="max-w-[78ch] mx-auto px-6 xl:px-10 py-6">
                <HadithReader
                  key={desktopDisplayedHadith.id}
                  hadith={desktopDisplayedHadith}
                  canonicalNumber={desktopCanonicalIdx}
                  isSaved={savedIds.includes(desktopDisplayedHadith.id)}
                  onToggleSave={toggleSaveHadith}
                  onOpenQuote={handleOpenQuoteStudio}
                  onSelectTag={handleSelectTagFromReader}
                />
              </div>
            </main>
          </>
        ) : (
          /* Desktop Secondary Pages (Pillars, Quiz, Saved, Quote Studio) */
          <main className="flex-1 min-w-0 bg-white">
            {desktopActiveMode === 'pillars' && (
              <FivePillarsView
                onBack={() => setRoute('library')}
                onOpenQuiz={() => navigateTo('quiz')}
                onExploreStage={(stageId) => {
                  setSelectedStageId(stageId);
                  setSelectedTag(null);
                  setRoute('library');
                }}
              />
            )}

            {desktopActiveMode === 'quiz' && (
              <RelationQuizView
                onBack={() => setRoute('library')}
                onOpenPillars={() => navigateTo('pillars')}
                onExploreTopic={(tag) => {
                  setSelectedStageId('all');
                  setSelectedTag(tag);
                  setRoute('library');
                }}
              />
            )}

            {desktopActiveMode === 'saved' && (
              <SavedPage
                savedHadiths={savedHadithList}
                onBack={() => setRoute('library')}
                onSelectHadith={(h) => {
                  setActiveHadith(h);
                  setRoute('library');
                }}
                onRemoveSaved={toggleSaveHadith}
              />
            )}

            {desktopActiveMode === 'quote' && (
              <QuoteStudioView
                hadith={desktopDisplayedHadith}
                onBack={() => setRoute('library')}
              />
            )}

            {desktopActiveMode === 'about' && (
              <div className="flex-1 overflow-y-auto">
                <AboutProfilePage
                  onBack={() => setRoute('library')}
                  onExploreHadith={() => setRoute('library')}
                />
              </div>
            )}
          </main>
        )}
      </div>

      {/* =================================================================
          3. MOBILE VIEWS (< 1024px)
      ================================================================= */}
      <div className="flex-1 min-w-0 lg:hidden">
        {route === 'library' && (
          <LibraryPage
            filteredHadiths={filteredHadiths}
            selectedStageId={selectedStageId}
            selectedTag={selectedTag}
            searchQuery={searchQuery}
            savedIds={savedIds}
            onSearchChange={setSearchQuery}
            onSelectStage={setSelectedStageId}
            onSelectTag={setSelectedTag}
            onResetFilters={handleResetFilters}
            onSelectHadith={handleOpenHadith}
            onToggleSave={toggleSaveHadith}
            onOpenFilterSheet={() => setIsFilterSheetOpen(true)}
            onOpenSaved={() => navigateTo('saved')}
          />
        )}

        {route === 'detail' && (
          <HadithDetailPage
            hadith={activeHadith}
            isSaved={savedIds.includes(activeHadith.id)}
            onBack={() => setRoute('library')}
            onToggleSave={toggleSaveHadith}
            onOpenQuote={handleOpenQuoteStudio}
            onSelectHadith={(h) => setActiveHadith(h)}
            onSelectTag={handleSelectTagFromReader}
          />
        )}

        {route === 'quote' && (
          <QuoteStudioView
            hadith={activeHadith}
            onBack={() =>
              setRoute(previousRoute === 'detail' ? 'detail' : 'library')
            }
          />
        )}

        {route === 'pillars' && (
          <FivePillarsView
            onBack={() => setRoute('library')}
            onOpenQuiz={() => navigateTo('quiz')}
            onExploreStage={(stageId) => {
              setSelectedStageId(stageId);
              setSelectedTag(null);
              setRoute('library');
            }}
          />
        )}

        {route === 'quiz' && (
          <RelationQuizView
            onBack={() => setRoute('library')}
            onOpenPillars={() => navigateTo('pillars')}
            onExploreTopic={(tag) => {
              setSelectedStageId('all');
              setSelectedTag(tag);
              setRoute('library');
            }}
          />
        )}

        {route === 'saved' && (
          <SavedPage
            savedHadiths={savedHadithList}
            onBack={() => setRoute('library')}
            onSelectHadith={handleOpenHadith}
            onRemoveSaved={toggleSaveHadith}
          />
        )}

        {route === 'about' && (
          <AboutProfilePage
            onBack={() => setRoute('library')}
            onExploreHadith={() => setRoute('library')}
          />
        )}
      </div>

      {/* =================================================================
          4. MOBILE BOTTOM NAVIGATION & NATIVE DIALOG BOTTOM SHEETS
      ================================================================= */}
      {(route === 'library' || route === 'saved') && (
        <BottomNav
          activeTab={mobileActiveNavTab}
          savedCount={savedIds.length}
          hasActiveFilter={hasActiveFilter}
          onSelectBacaan={() => setRoute('library')}
          onOpenFilter={() => setIsFilterSheetOpen(true)}
          onOpenEdukasi={() => setIsEdukasiSheetOpen(true)}
          onSelectTersimpan={() => navigateTo('saved')}
        />
      )}

      <FilterBottomSheet
        isOpen={isFilterSheetOpen}
        selectedStageId={selectedStageId}
        selectedTag={selectedTag}
        onApply={(nextStage, nextTag) => {
          setSelectedStageId(nextStage);
          setSelectedTag(nextTag);
          setRoute('library');
        }}
        onClose={() => setIsFilterSheetOpen(false)}
      />

      <EdukasiMenuSheet
        isOpen={isEdukasiSheetOpen}
        onClose={() => setIsEdukasiSheetOpen(false)}
        onSelectPillars={() => navigateTo('pillars')}
        onSelectQuiz={() => navigateTo('quiz')}
        onSelectProfile={() => navigateTo('about')}
      />
    </div>
  );
}

export default App;
