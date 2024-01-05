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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import {
  DashboardIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import PlaylistCard from "./playlist-card";

const LeftPanel = () => {
  return (
    <ResizablePanel
      className="m-2 flex min-w-72 flex-col rounded-lg bg-card"
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
              onClick={() => console.log("creating new smart playlist...")}
            >
              Smart Playlist
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ScrollArea className="mb-2 h-full grow">
        <PlaylistCard />
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </ResizablePanel>
  );
};

export default LeftPanel;
