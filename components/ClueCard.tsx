type ClueCardProps = {
  clue: string;
  kicker?: string;
};

export function ClueCard({ clue, kicker }: ClueCardProps) {
  return (
    <article className="clue-card">
      {kicker ? <p className="clue-kicker">{kicker}</p> : null}
      <p className="clue-text">{clue}</p>
    </article>
  );
}
