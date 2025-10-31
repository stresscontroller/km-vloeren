
import {
  Command, CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { useRef, useState, useEffect, Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";

type SearchBoxProps = {
  input: string | undefined;
  setInput: Dispatch<SetStateAction<string | undefined>>;
}

export function SearchBox({ input, setInput}: SearchBoxProps) {
  const [open, setOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const commandListRef = useRef<HTMLDivElement>(null);

  const handleInputChange = () => {
    setOpen(true);
    setInput(inputRef.current?.value || "");
  };

  const handleOption = (value: string) => {
    setInput(value);
    setOpen(false); // Close the popover when an option is selected
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const firstItem = commandListRef.current?.querySelector("button");
      if (firstItem) {
        firstItem.click();
      }
    }
  };

  const handleClickOutside = (event: Event) => {
    if (
      commandListRef.current &&
      !commandListRef.current.contains(event.target as Node) &&
      !inputRef.current?.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex min-h-[300px] relative justify-center items-center w-[50.5rem]">
      <Command className="rounded-lg border-0 flex gap-4 bg-none w-full">
        <CommandInput
          placeholder="Input text here...."
          className="w-full h-[61px]"
          ref={inputRef}
          value={input}
          onInput={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <CommandList
          ref={commandListRef}
          className={cn(
            "shadow-md bg-white border rounded-md p-0",
            open ? "visible" : "invisible"
          )}
        >
          <CommandGroup className="p-0">
            <CommandItem asChild>
              <button
                onClick={() => handleOption("Diam vulputate congue")}
                type="button"
                className="w-full"
              >
                Diam vulputate congue
              </button>
            </CommandItem>
            <CommandItem asChild>
              <button
                onClick={() => handleOption("Dolestie dignissim vitae egestas")}
                type="button"
                className="w-full"
              >
                Dolestie dignissim vitae egestas
              </button>
            </CommandItem>
            <CommandItem asChild>
              <button
                onClick={() => handleOption("Ded tristique faucibus ac")}
                type="button"
                className="w-full"
              >
                Ded tristique faucibus ac
              </button>
            </CommandItem>
            <CommandItem asChild>
              <button
                onClick={() => handleOption("Duam fermentum vitae")}
                type="button"
                className="w-full"
              >
                Duam fermentum vitae
              </button>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}
