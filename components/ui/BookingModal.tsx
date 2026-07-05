"use client";

import { useEffect, useMemo, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Booking modal — opened by any element carrying [data-book-cta].    */
/*  Self-contained: mount once (in the root layout) and every CTA      */
/*  across the site triggers it via a delegated click listener.        */
/* ------------------------------------------------------------------ */

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const TIME_SLOTS = [
  "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00", "17:00",
];

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function Calendar({
  selected,
  onSelect,
}: {
  selected: Date | null;
  onSelect: (d: Date) => void;
}) {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [view, setView] = useState<Date>(
    () => new Date(today.getFullYear(), today.getMonth(), 1),
  );

  const year = view.getFullYear();
  const month = view.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const canGoPrev =
    year > today.getFullYear() ||
    (year === today.getFullYear() && month > today.getMonth());

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="w-full rounded-[10px] border border-silver bg-surface p-[10px]">
      <div className="mb-[8px] flex items-center justify-between">
        <button
          type="button"
          aria-label="Previous month"
          disabled={!canGoPrev}
          onClick={() => setView(new Date(year, month - 1, 1))}
          className="flex size-[24px] items-center justify-center rounded-full text-jet transition hover:bg-blue/10 disabled:cursor-not-allowed disabled:opacity-30"
        >
          ‹
        </button>
        <p className="font-inter text-[13px] font-semibold text-jet">
          {MONTHS[month]} {year}
        </p>
        <button
          type="button"
          aria-label="Next month"
          onClick={() => setView(new Date(year, month + 1, 1))}
          className="flex size-[24px] items-center justify-center rounded-full text-jet transition hover:bg-blue/10"
        >
          ›
        </button>
      </div>

      <div className="mb-[4px] grid grid-cols-7 gap-[1px]">
        {WEEKDAYS.map((w) => (
          <div
            key={w}
            className="text-center font-inter text-[10px] font-medium text-ash"
          >
            {w}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-[1px]">
        {cells.map((d, i) => {
          if (d === null) return <div key={`e${i}`} />;
          const date = new Date(year, month, d);
          const isPast = date < today;
          const isSelected =
            selected != null &&
            selected.getFullYear() === year &&
            selected.getMonth() === month &&
            selected.getDate() === d;
          const isToday = date.getTime() === today.getTime();
          return (
            <button
              key={d}
              type="button"
              disabled={isPast}
              onClick={() => onSelect(date)}
              className={`mx-auto flex size-[28px] items-center justify-center rounded-full font-inter text-[12px] transition ${
                isSelected
                  ? "bg-blue font-semibold text-white"
                  : isPast
                    ? "cursor-not-allowed text-silver"
                    : `text-jet hover:bg-blue/10 ${isToday ? "font-semibold text-blue" : ""}`
              }`}
            >
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex w-full flex-col items-start gap-[6px]">
      <span className="font-inter text-[13px] font-semibold text-jet">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-[10px] border border-silver bg-surface px-[14px] py-[11px] font-inter text-[15px] text-jet outline-none transition placeholder:text-ash focus:border-blue focus:ring-2 focus:ring-blue/20";

export default function BookingModal() {
  const [open, setOpen] = useState(false); // desired visibility
  const [mounted, setMounted] = useState(false); // kept in the DOM through the exit fade
  const [visible, setVisible] = useState(false); // drives the opacity/scale transition
  const [sent, setSent] = useState(false);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [agree, setAgree] = useState(false);

  /* Delegated trigger: any [data-book-cta] element opens the modal. */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest("[data-book-cta]");
      if (el) {
        e.preventDefault();
        setSent(false);
        setMounted(true);
        setOpen(true);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  /* Drive the enter/exit fade: fade in on the next frame after mount, fade out on close. */
  useEffect(() => {
    if (open) {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }
    setVisible(false);
  }, [open]);

  /* Esc to close + lock body scroll while open. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!mounted) return null;

  const canSubmit =
    name.trim() !== "" &&
    email.trim() !== "" &&
    date != null &&
    time != null &&
    agree;

  const prettyDate = date
    ? `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    : "";

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-y-auto bg-ink/70 backdrop-blur-md transition-opacity duration-300 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Book a session"
      onTransitionEnd={(e) => {
        if (e.target === e.currentTarget && !open) setMounted(false);
      }}
    >
      {/* min-h-full wrapper centers the content-sized panel, yet still scrolls when it's taller than the screen. */}
      <div
        className="flex min-h-full items-center justify-center p-[16px] max-sm:p-[12px]"
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div
          className={`relative w-full max-w-[460px] rounded-card bg-white p-[24px] shadow-[0px_30px_80px_0px_rgba(0,8,45,0.45)] transition-all duration-300 ease-out ${
            visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-[12px] scale-[0.97] opacity-0"
          }`}
        >
        {/* Close */}
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-[20px] top-[20px] flex size-[36px] items-center justify-center rounded-full text-[22px] leading-none text-ash transition hover:bg-jet/5 hover:text-jet"
        >
          ×
        </button>

        {sent ? (
          <div className="flex flex-col items-center gap-[16px] py-[40px] text-center">
            <div className="flex size-[64px] items-center justify-center rounded-full bg-blue/10 text-[32px] text-blue">
              ✓
            </div>
            <p className="text-[28px] font-bold text-navy">Thank you, {name.split(" ")[0] || "there"}!</p>
            <p className="max-w-[380px] font-inter text-[15px] leading-[1.4] text-slate">
              Your session request for{" "}
              <span className="font-semibold text-jet">
                {prettyDate} at {time}
              </span>{" "}
              has been received. Our team will confirm by email shortly.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="bg-brand-gradient mt-[8px] flex h-[44px] items-center justify-center rounded-pill px-[32px] text-button font-semibold text-white transition hover:brightness-110"
              style={{ ["--brand-angle" as string]: "123.784deg" }}
            >
              Done
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (canSubmit) setSent(true);
            }}
            className="flex flex-col gap-[14px]"
          >
            <div className="flex flex-col gap-[6px] pr-[40px]">
              <p className="text-[28px] font-bold leading-[1.1] text-navy">
                Book a session
              </p>
              <p className="font-inter text-[14px] leading-[1.4] text-slate">
                Tell us a little about your organization and pick a time — we&rsquo;ll
                map the highest-impact opportunity together.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-[12px] max-sm:grid-cols-1">
              <Field label="Name *">
                <input
                  className={inputCls}
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Cooper"
                />
              </Field>

              <Field label="Company">
                <input
                  className={inputCls}
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Acme Inc."
                />
              </Field>
            </div>

            <Field label="Email *">
              <input
                className={inputCls}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@acme.com"
              />
            </Field>

            <Field label="Notes">
              <input
                className={inputCls}
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Anything you'd like us to know ahead of time…"
              />
            </Field>

            <div className="flex flex-col gap-[10px]">
              <span className="font-inter text-[13px] font-semibold text-jet">
                Pick a day &amp; time *
              </span>
              <Calendar
                selected={date}
                onSelect={(d) => setDate(d)}
              />
              <div className="flex flex-wrap gap-[8px]">
                {TIME_SLOTS.map((t) => {
                  const on = t === time;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      className={`rounded-pill border px-[16px] py-[7px] font-inter text-[13px] font-medium transition ${
                        on
                          ? "border-blue bg-blue text-white"
                          : "border-silver bg-white text-jet hover:border-blue hover:text-blue"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            <label className="flex items-start gap-[10px]">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-[2px] size-[18px] shrink-0 cursor-pointer accent-blue"
              />
              <span className="font-inter text-[13px] leading-[1.4] text-slate">
                I agree to the site&rsquo;s{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue underline underline-offset-2 hover:text-navy"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            <button
              type="submit"
              disabled={!canSubmit}
              className="bg-brand-gradient mt-[4px] flex h-[48px] w-full items-center justify-center rounded-pill text-button font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:brightness-100"
              style={{ ["--brand-angle" as string]: "123.784deg" }}
            >
              Submit
            </button>
          </form>
        )}
        </div>
      </div>
    </div>
  );
}
