import { useState, useEffect } from "react";
import { BookOpen } from "lucide-react";

interface NoteLink {
  title: string;
  description: string;
  url: string;
}

const noteLinks: NoteLink[] = [
  {
    title: "The Network State: How To Start a New Country",
    description: "By Balaji Srinivasan",
    url: "https://puffy-bunny-845.notion.site/The-Network-State-341d50e5bd3a80a388f7ead090e343b4?source=copy_link",
  },
  {
    title:
      "Radical Markets: Uprooting Capitalism & Democracy for a Just Society",
    description: "By Eric Posner and E. Glen Weyl",
    url: "https://puffy-bunny-845.notion.site/Radical-Markets-Uprooting-Capitalism-Democracy-for-a-Just-Society-329d50e5bd3a80cc897ec5989b63d9c0?source=copy_link",
  },
  {
    title: "Power: How the World Works and is Changing",
    description: "",
    url: "https://puffy-bunny-845.notion.site/Power-How-the-World-Works-and-is-Changing-321d50e5bd3a80dfb4a1f0e5a8e04ec2?source=copy_link",
  },
];

const NotesPage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="mx-auto max-w-5xl p-8">
      <div
        className={`mb-8 text-center transition-all duration-1000 ease-out ${
          loaded
            ? "opacity-100 blur-0 translate-y-0"
            : "opacity-0 blur-md -translate-y-6"
        }`}
      >
        <div className="rounded-xl border border-border bg-background/80 p-6">
          <h1 className="text-2xl font-semibold mb-3">Notes</h1>
          <p className="text-muted-foreground leading-relaxed">
            A collection of notes on books I've read and ideas I've been
            thinking about, hosted on Notion.
          </p>
        </div>
      </div>

      {noteLinks.length === 0 ? (
        <div
          className={`text-center text-muted-foreground py-12 transition-all duration-1000 ease-out delay-300 ${
            loaded
              ? "opacity-100 blur-0 translate-y-0"
              : "opacity-0 blur-md translate-y-6"
          }`}
        >
          <BookOpen className="size-12 mx-auto mb-4 opacity-50" />
          <p className="text-lg">Notes coming soon...</p>
        </div>
      ) : (
        <div
          className={`rounded-xl border border-border bg-background/80 overflow-hidden transition-all duration-1000 ease-out delay-200 ${
            loaded
              ? "opacity-100 blur-0 translate-y-0"
              : "opacity-0 blur-md translate-y-6"
          }`}
        >
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-6 py-3 text-sm font-semibold text-foreground">
                  Title
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-foreground hidden sm:table-cell">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {noteLinks.map((note, index) => (
                <tr
                  key={note.url}
                  onClick={() =>
                    window.open(note.url, "_blank", "noopener,noreferrer")
                  }
                  className={`border-b border-border last:border-b-0 cursor-pointer hover:bg-muted/50 hover:text-primary ${
                    loaded
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-6"
                  }`}
                  style={{
                    transition:
                      "opacity 700ms ease-out, transform 700ms ease-out, background-color 150ms, color 150ms",
                    transitionDelay: loaded ? "0ms" : `${(index + 2) * 150}ms`,
                  }}
                >
                  <td className="px-6 py-4 text-sm font-medium">
                    {note.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground hidden sm:table-cell">
                    {note.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default NotesPage;
