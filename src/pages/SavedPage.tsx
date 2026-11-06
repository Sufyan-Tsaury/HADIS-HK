import React from 'react';
import type { HadithItem } from '../data/hadiths';
import { SubpageHeader } from '../components/layout/AppHeader';
import { SavedList } from '../components/saved/SavedList';

interface SavedPageProps {
  savedHadiths: HadithItem[];
  onBack: () => void;
  onSelectHadith: (hadith: HadithItem) => void;
  onRemoveSaved: (id: string) => void;
}

export const SavedPage: React.FC<SavedPageProps> = ({
  savedHadiths,
  onBack,
  onSelectHadith,
  onRemoveSaved,
}) => {
  return (
    <div className="min-h-dvh lg:min-h-0 bg-[#FDF9F5] flex flex-col pb-24 lg:pb-8">
      <SubpageHeader title="Koleksi Tersimpan" onBack={onBack} />

      <main className="max-w-2xl w-full mx-auto px-4 pt-4 flex-1">
        <SavedList
          savedHadiths={savedHadiths}
          onSelectHadith={onSelectHadith}
          onRemoveSaved={onRemoveSaved}
          onBrowseLibrary={onBack}
        />
      </main>
    </div>
  );
};
