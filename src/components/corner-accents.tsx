/**
 * Decorative corner accent lines that fade in on hover.
 *
 * Used on the clip-path cards across the site (products, services, contact).
 * Kept as one canonical markup so every card renders identically.
 *
 * The parent must be `relative group` for the hover state to work.
 */
export function CornerAccents() {
  return (
    <>
      {/* top-left */}
      <span className="absolute top-0 left-0 w-2 h-px bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="absolute top-0 left-0 w-px h-2 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* bottom-right */}
      <span className="absolute bottom-0 right-0 w-2 h-px bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="absolute bottom-0 right-0 w-px h-2 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </>
  );
}
