import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "../../hooks/use-theme";

interface CommandItem {
  id: string;
  group: "Navigate" | "Actions";
  label: string;
  hint: string;
  action: () => void;
}

const RESUME_URL =
  "https://drive.google.com/file/d/1bWF8xsDUUGNmz0kfoRVo3tLq11MzGZ4-/view?usp=sharing";
const LINKEDIN_URL = "https://www.linkedin.com/in/oleh-mordach/";
const EMAIL_ADDRESS = "omordach@gmail.com";

export function CommandPalette() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedNotice, setCopiedNotice] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = React.useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  const openPalette = React.useCallback(() => {
    setOpen(true);
    setQuery("");
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    const onOpenEvent = () => openPalette();
    window.addEventListener("open-command-palette", onOpenEvent);
    return () => window.removeEventListener("open-command-palette", onOpenEvent);
  }, [openPalette]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => {
          const next = !prev;
          if (!next) {
            setQuery("");
            setActiveIndex(0);
          }
          return next;
        });
      } else if (e.key === "Escape" && open) {
        e.preventDefault();
        close();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const navigateTo = React.useCallback(
    (hash: string) => {
      close();
      const el = document.querySelector(hash);
      if (el && typeof el.scrollIntoView === "function") {
        el.scrollIntoView({ behavior: "smooth" });
      }
      window.history.pushState(null, "", hash);
    },
    [close],
  );

  const items = useMemo<CommandItem[]>(
    () => [
      {
        id: "nav-top",
        group: "Navigate",
        label: "Jump to Top / Hero",
        hint: "#top",
        action: () => navigateTo("#top"),
      },
      {
        id: "nav-experience",
        group: "Navigate",
        label: "Career Journey & Experience",
        hint: "#experience",
        action: () => navigateTo("#experience"),
      },
      {
        id: "nav-expertise",
        group: "Navigate",
        label: "Core Expertise",
        hint: "#expertise",
        action: () => navigateTo("#expertise"),
      },
      {
        id: "nav-achievements",
        group: "Navigate",
        label: "Selected Achievements",
        hint: "#achievements",
        action: () => navigateTo("#achievements"),
      },
      {
        id: "nav-certifications",
        group: "Navigate",
        label: "Certifications & Credentials",
        hint: "#certifications",
        action: () => navigateTo("#certifications"),
      },
      {
        id: "nav-contact",
        group: "Navigate",
        label: "Contact Section",
        hint: "#contact",
        action: () => navigateTo("#contact"),
      },
      {
        id: "act-theme",
        group: "Actions",
        label: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
        hint: theme === "dark" ? "☼ Light" : "☾ Dark",
        action: () => {
          toggle();
          close();
        },
      },
      {
        id: "act-email",
        group: "Actions",
        label: "Copy Email Address",
        hint: EMAIL_ADDRESS,
        action: () => {
          void navigator.clipboard?.writeText(EMAIL_ADDRESS);
          setCopiedNotice("Email copied to clipboard");
          setTimeout(() => {
            setCopiedNotice(null);
            close();
          }, 700);
        },
      },
      {
        id: "act-resume",
        group: "Actions",
        label: "Open Resume (PDF)",
        hint: "Google Drive ↗",
        action: () => {
          window.open(RESUME_URL, "_blank", "noopener,noreferrer");
          close();
        },
      },
      {
        id: "act-linkedin",
        group: "Actions",
        label: "Open LinkedIn Profile",
        hint: "linkedin.com ↗",
        action: () => {
          window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer");
          close();
        },
      },
    ],
    [navigateTo, theme, toggle, close],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.hint.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q),
    );
  }, [items, query]);

  const safeActiveIndex = filtered.length > 0 ? Math.min(activeIndex, filtered.length - 1) : 0;

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (filtered.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[safeActiveIndex]?.action();
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-50 flex items-start justify-center bg-background/70 px-4 pt-[14vh] backdrop-blur-sm animate-fade"
      onClick={close}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-xl border border-hairline bg-card text-card-foreground shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-hairline px-4 py-3.5">
          <span className="font-mono text-xs text-muted-foreground">⌘K</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={onInputKeyDown}
            placeholder="Type a command or jump to section..."
            aria-label="Search commands"
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button
            type="button"
            onClick={close}
            className="rounded border border-hairline px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground hover:text-foreground"
          >
            ESC
          </button>
        </div>

        {copiedNotice ? (
          <div className="px-4 py-8 text-center font-mono text-xs text-accent">{copiedNotice}</div>
        ) : filtered.length === 0 ? (
          <div className="px-4 py-8 text-center text-sm text-muted-foreground">
            No matching commands found.
          </div>
        ) : (
          <ul role="listbox" className="max-h-80 overflow-y-auto p-2">
            {filtered.map((item, idx) => {
              const isSelected = idx === safeActiveIndex;
              const prevGroup = idx > 0 ? filtered[idx - 1]?.group : null;
              const showGroupHeader = item.group !== prevGroup;

              return (
                <React.Fragment key={item.id}>
                  {showGroupHeader && (
                    <li
                      role="presentation"
                      className="px-3 pt-2.5 pb-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                    >
                      {item.group}
                    </li>
                  )}
                  <li role="option" aria-selected={isSelected}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveIndex(idx)}
                      onClick={item.action}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                        isSelected
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-xs text-muted-foreground">{item.hint}</span>
                    </button>
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        )}

        <div className="flex items-center justify-between border-t border-hairline bg-surface/50 px-4 py-2 font-mono text-[11px] text-muted-foreground">
          <span>↑↓ Navigate · ↵ Select</span>
          <span>mordach.com</span>
        </div>
      </div>
    </div>
  );
}
