import { useState, useMemo } from 'react';
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
import { Bookmark, Share2, RotateCcw, BookOpen } from 'lucide-react';

type ActiveRoute = 'library' | 'detail' | 'quote' | 'pillars' | 'quiz' | 'saved';

export function App() {
  const [route, setRoute] = useState<ActiveRoute>('library');
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

  const navigateTo = (nextRoute: ActiveRoute) => {
    setPreviousRoute(route);
    setRoute(nextRoute);
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

  const desktopActiveMode: 'library' | 'pillars' | 'quiz' | 'saved' | 'quote' =
    route === 'pillars' || route === 'quiz' || route === 'saved' || route === 'quote'
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
    <div className="min-h-dvh bg-[#FDF9F5] text-[#352719] flex flex-col lg:flex-row">
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
              className="lg:w-[300px] xl:w-[356px] shrink-0 h-dvh sticky top-0 overflow-y-auto border-r border-[#D9D0C4] bg-[#F7F3EF]/60 p-4 space-y-3"
            >
              <div className="flex items-center justify-between gap-2 pb-2 border-b border-[#D9D0C4]">
                <div className="min-w-0">
                  <h1 className="text-sm font-bold font-display text-[#352719] truncate tracking-wide">
                    {selectedStageId !== 'all'
                      ? STAGES.find((s) => s.id === selectedStageId)?.title
                      : selectedTag
                      ? `Topik #${selectedTag}`
                      : 'Seluruh Riwayat Hadis'}
                  </h1>
                  <p className="text-[11px] text-[#6B5B49]">
                    {filteredHadiths.length} hadis ditampilkan
                  </p>
                </div>

                {(hasActiveFilter || searchQuery.trim() !== '') && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="min-h-[34px] px-2.5 py-1 rounded-lg bg-white border border-[#D9D0C4] text-[11px] font-semibold text-[#301A05] hover:border-[#B09768] flex items-center gap-1 shrink-0 shadow-xs"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {filteredHadiths.length === 0 ? (
                <div className="rounded-xl border border-[#D9D0C4] bg-white p-6 text-center space-y-2.5 shadow-xs">
                  <BookOpen className="w-6 h-6 text-[#8A8177] mx-auto" />
                  <p className="text-xs font-semibold text-[#352719]">
                    Tidak ada hadis yang cocok
                  </p>
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="btn-heritage-soft px-3 py-1.5 text-xs"
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
            <main className="flex-1 min-w-0 bg-[#FDF9F5] overflow-y-auto">
              {/* Top Breadcrumb Bar */}
              <div className="sticky top-0 z-10 bg-[#FDF9F5]/95 backdrop-blur-xs border-b border-[#D9D0C4] px-6 xl:px-8 h-14 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#6B5B49] font-medium truncate">
                  <span className="text-[#301A05] font-bold font-display tracking-wide">{desktopStageShort}</span>
                  <span aria-hidden="true">›</span>
                  <span className="text-[#352719] font-semibold">
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
                    className="min-w-[40px] min-h-[40px] rounded-xl border border-[#D9D0C4] bg-white hover:border-[#B09768] flex items-center justify-center text-[#352719] transition shadow-xs"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        savedIds.includes(desktopDisplayedHadith.id)
                          ? 'text-[#301A05] fill-[#301A05]'
                          : ''
                      }`}
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOpenQuoteStudio(desktopDisplayedHadith)}
                    className="btn-heritage-soft min-h-[40px] px-3.5 text-xs flex items-center gap-1.5"
                  >
                    <Share2 className="w-3.5 h-3.5" />
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
          <main className="flex-1 min-w-0 bg-[#FDF9F5]">
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
      />
    </div>
  );
}

export default App;
