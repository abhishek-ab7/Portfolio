import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-4 text-foreground">
      <section className="premium-card max-w-xl p-10 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-black">Page not found</h1>
        <p className="mt-4 text-muted-foreground">The page you requested does not exist. Return to the portfolio homepage to explore case studies and contact information.</p>
        <Link to="/" className="cosmic-button mt-8 inline-flex">Back home</Link>
      </section>
    </main>
  );
};
