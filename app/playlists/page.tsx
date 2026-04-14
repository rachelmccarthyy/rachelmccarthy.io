import PageShell from "@/components/PageShell";

const playlists: { title: string; description?: string; url: string }[] = [
  // { title: "Playlist Name", description: "A short vibe description.", url: "https://open.spotify.com/..." },
];

export default function PlaylistsPage() {
  return (
    <PageShell title="Playlists" subtitle="What I'm listening to.">
      {playlists.length === 0 ? (
        <p className="text-gray-300 font-light italic">Coming soon.</p>
      ) : (
        <ul className="space-y-3">
          {playlists.map((playlist) => (
            <li key={playlist.title}>
              <a
                href={playlist.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-gray-100 p-5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
              >
                <div>
                  <p className="font-medium text-[#1a1a1a] group-hover:text-primary transition-colors">
                    {playlist.title}
                  </p>
                  {playlist.description && (
                    <p className="mt-0.5 text-sm text-gray-400 font-light">{playlist.description}</p>
                  )}
                </div>
                <span className="text-gray-300 group-hover:text-primary transition-colors text-lg">↗</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
