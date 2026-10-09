"use client";

export function SearchBar() {
  return (
    <form
      className="search-bar"
      role="search"
      onSubmit={(event) => event.preventDefault()}
    >
      <label className="sr-only" htmlFor="trail-search">
        Search
      </label>
      <span className="search-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <circle cx="10.5" cy="10.5" r="6.25" stroke="currentColor" strokeWidth="1.8" />
          <path d="M15.2 15.2 20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </span>
      <input
        id="trail-search"
        type="search"
        placeholder="Search the trail"
        autoComplete="off"
      />
      <button type="submit">Search</button>
    </form>
  );
}
