import { ResizablePanel } from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { DashboardIcon, PlusIcon } from "@radix-ui/react-icons";
import PlaylistCard from "@/components/server/playlist-card";

const LibraryHeader = () => {
  return (
    <div className="flex h-10 items-center gap-2">
      <DashboardIcon className="h-6 w-6" />
      <h2 className="text-xl font-bold">Your Library</h2>
    </div>
  );
};

const AddPlaylist = () => {
  return (
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
          onClick={() => console.log("creating new smart playlist...")}
        >
          Smart Playlist
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Library = () => {
  return (
    <ScrollArea className="mb-2 h-full grow">
      <PlaylistCard />
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};

const LeftPanel = () => {
  return (
    <ResizablePanel
      className="m-2 flex min-w-72 flex-col rounded-lg bg-card"
      defaultSize={20}
    >
      <div className="m-3 flex items-center justify-between">
        <LibraryHeader />
        <AddPlaylist />
      </div>
      <Library />
    </ResizablePanel>
  );
};

export default LeftPanel;
