import PageShell from "@/components/PageShell";

const playlists: { title: string; description?: string; url: string }[] = [
  // { title: "Playlist Name", description: "A short vibe.", url: "https://open.spotify.com/..." },
];

export default function PlaylistsPage() {
  return (
    <PageShell title="Playlists" subtitle="What I'm listening to.">
      {playlists.length === 0 ? (
        <p className="text-muted font-light italic text-sm">Coming soon.</p>
      ) : (
        <ul className="divide-y divide-border">
          {playlists.map((playlist) => (
            <li key={playlist.title}>
              <a
                href={playlist.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5 hover:text-primary transition-colors duration-300"
              >
                <div>
                  <p className="font-medium text-fg group-hover:text-primary transition-colors">
                    {playlist.title}
                  </p>
                  {playlist.description && (
                    <p className="mt-0.5 text-xs text-muted font-light">{playlist.description}</p>
                  )}
                </div>
                <span className="text-muted group-hover:text-primary transition-colors">↗</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
