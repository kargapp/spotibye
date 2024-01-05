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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import {
  DashboardIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import LeftPanel from "./components/left-panel";
import RightPanel from "./components/right-panel";

export default function Home() {
  return (
    <>
      <main className="h-screen">
        <ResizablePanelGroup className="" direction="horizontal">
          <LeftPanel />
          <ResizableHandle withHandle />
          <RightPanel />
        </ResizablePanelGroup>
      </main>
    </>
  );
}
