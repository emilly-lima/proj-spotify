import { Search, Home as HomeIcon, Library, SearchIcon, LibraryIcon } from "lucide-react"
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">

          <nav className="space-y-5 mt-2">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <HomeIcon />
              Home
            </a>
            
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <SearchIcon />
              Search
            </a>

            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <LibraryIcon />
              Your Library
            </a>

          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 1</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 2</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 3</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 4</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 5</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 6</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 7</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 8</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 9</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 10</a>
          </nav>


        </aside>
        <main className="flex-1 p-6">
          <div className="flex ">

          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6">footer</footer>
    </div>
  )
}
