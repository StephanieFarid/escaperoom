import { ClueCard } from "@/components/ClueCard";
import { SearchBar } from "@/components/SearchBar";
import clues from "@/data/clues.json";
import { openingClue } from "@/data/opening-clue";

export default function Home() {
  const searchHasBegun = false;

  return (
    <div className="jungle">
      <span className="spot spot-a" aria-hidden="true" />
      <span className="spot spot-b" aria-hidden="true" />
      <span className="spot spot-c" aria-hidden="true" />
      <div className="top-bar">
        <SearchBar />
      </div>
      <main className="scene">
        <header className="expedition-mark">
          <p className="stamp">Expedition 07</p>
          <h1 className="expedition-title">The Canopy Lock</h1>
          <p className="expedition-subtitle">
            Field notes from a trail that closes behind you. Begin with the
            page that was left in the open.
          </p>
        </header>

        <ClueCard clue={openingClue} kicker="Clue I" />

        <section
          className="clue-stack"
          hidden={!searchHasBegun}
          aria-hidden={!searchHasBegun}
        >
          {clues.map((entry) => (
            <ClueCard key={entry.previousAnswer} clue={entry.nextClue} />
          ))}
        </section>

        <p className="sealed-note">The rest of the journal stays in the pack.</p>
      </main>
    </div>
  );
}
