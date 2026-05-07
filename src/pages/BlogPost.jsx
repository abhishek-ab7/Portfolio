import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { engineeringNotes } from "@/data/portfolio";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const content = {
  "socketio-chat-architecture": [
    "Start with authenticated REST APIs for login and conversation history, then layer Socket.IO on top for live delivery.",
    "Persist messages in MongoDB before or alongside socket emission so reconnecting users can recover conversation state.",
    "Model socket sessions separately from users so reconnects, multiple tabs, and disconnect cleanup remain manageable.",
  ],
  "razorpay-ecommerce-payment-flow": [
    "Create an order in a pending state before redirecting or opening payment UI, because checkout can fail at several points.",
    "Verify payment on the server before marking the order as paid; never trust the client as the final source of truth.",
    "Expose admin status transitions separately from customer actions so fulfillment logic remains auditable.",
  ],
  "live-location-system-design": [
    "Use the browser Geolocation API for coordinates, but design clear permission-denied states and privacy-aware copy.",
    "Throttle client updates so the server does not broadcast unnecessary noise for tiny coordinate changes.",
    "Represent every socket connection as a marker identity so the map can update, replace, or remove markers predictably.",
  ],
};

export const BlogPost = () => {
  const { slug } = useParams();
  const note = engineeringNotes.find((item) => item.slug.endsWith(slug));
  if (!note) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <Navbar />
      <main className="px-4 pb-20 pt-32">
        <article className="container max-w-4xl text-left">
          <Link to="/#engineering" className="inline-flex items-center gap-2 text-sm font-semibold text-primary"><ArrowLeft className="h-4 w-4" /> Back to engineering notes</Link>
          <p className="eyebrow mt-10">{note.readTime}</p>
          <h1 className="mt-4 text-5xl font-black tracking-[-0.05em] md:text-7xl">{note.title}</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{note.summary}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {note.tags.map((tag) => <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">{tag}</span>)}
          </div>
          <div className="premium-card mt-12 p-8">
            <h2 className="text-3xl font-bold">Implementation notes</h2>
            <ol className="mt-6 space-y-5">
              {content[slug].map((paragraph, index) => (
                <li key={paragraph} className="flex gap-4 text-muted-foreground"><span className="font-mono text-primary">0{index + 1}</span><span className="leading-8">{paragraph}</span></li>
              ))}
            </ol>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};
