"use client";

import { ModeToggle } from "./components/ui/mode-toggle";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  DashboardIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  PlusIcon,
} from "@radix-ui/react-icons";

export default function Home() {
  return (
    <>
      <main className="h-screen">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel
            id="library-panel"
            className="m-2 min-w-72 rounded-lg bg-card"
            defaultSize={20}
          >
            <div className="m-3 flex items-center justify-between">
              <div className="flex h-10 items-center gap-2">
                <DashboardIcon className="h-6 w-6" />
                <h2 className="text-xl font-bold">Your Library</h2>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <PlusIcon className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">
                      a button that lets you add a playlist or smart playlist
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => console.log("creating new playlist...")}
                  >
                    Playlist
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      console.log("creating new smart playlist...")
                    }
                  >
                    Smart Playlist
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel
            id="content-panel"
            className="m-2 rounded-lg bg-card"
            defaultSize={80}
          >
            <div className="m-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg
                  id="spotify-logo"
                  className="h-10 w-10"
                  height={15}
                  width={15}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="#1ed760"
                    d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8Z"
                  />
                  <path d="M406.6 231.1c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3zm-31 76.2c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm-26.9 65.6c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z" />
                </svg>
                <h1 className="text-xl font-bold">
                  SpotiBye
                  <span className="font-light">
                    , a better way to organize music.
                  </span>
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <Input
                  className="h-full w-96 rounded-3xl bg-background"
                  type="search"
                  name="search"
                  placeholder="Search for songs, artists, playlists, or more..."
                />
                <ModeToggle />
                <Button variant="outline" size="icon">
                  <PersonIcon className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only"></span>
                </Button>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </>
  );
}
