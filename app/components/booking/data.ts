export type PitchId = "khamsi" | "saddasi";

export interface Pitch {
  id: PitchId;
  name: string;
  players: string;
  hourlyRate: number; // EGP per hour
}

export const PITCHES: Pitch[] = [
  { id: "khamsi", name: "ملعب خماسي", players: "5 لاعبين", hourlyRate: 300 },
  { id: "saddasi", name: "ملعب سداسي", players: "6 لاعبين", hourlyRate: 400 },
];

export interface DurationOption {
  id: string;
  label: string;
  hours: number;
}

export const DURATIONS: DurationOption[] = [
  { id: "1h", label: "1 ساعة", hours: 1 },
  { id: "1.5h", label: "1.5 ساعة", hours: 1.5 },
  { id: "2h", label: "2 ساعة", hours: 2 },
];

/** Operating hours: 15:00 (3 PM) to 24:00 (midnight). */
const OPEN_HOUR = 15;
const CLOSE_HOUR = 24;
const STEP_MINUTES = 30;

export interface TimeSlot {
  start: string; // "HH:MM"
  end: string; // "HH:MM"
  available: boolean;
}

function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function toHHMM(min: number): string {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

/** Deterministic pseudo-random so a given pitch/date/time is consistently booked. */
function isBooked(pitchId: string, dateKey: string, start: string): boolean {
  const s = `${pitchId}|${dateKey}|${start}`;
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(h, 31) + s.charCodeAt(i)) >>> 0;
  return h % 5 === 0; // ~20% of slots shown as taken
}

export function getAvailableSlots(
  pitchId: PitchId,
  dateKey: string,
  hours: number
): TimeSlot[] {
  const durationMin = hours * 60;
  const openMin = OPEN_HOUR * 60;
  const closeMin = CLOSE_HOUR * 60;
  const slots: TimeSlot[] = [];

  for (let t = openMin; t + durationMin <= closeMin; t += STEP_MINUTES) {
    const start = toHHMM(t);
    const end = toHHMM(t + durationMin);
    slots.push({ start, end, available: !isBooked(pitchId, dateKey, start) });
  }
  return slots;
}

/** Next `count` days as selectable date chips. */
export function getUpcomingDates(count = 14) {
  const days = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 0; i < count; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

export function dateKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

export function priceFor(pitch: Pitch, hours: number): number {
  return Math.round(pitch.hourlyRate * hours);
}

export function formatTime(hhmm: string): string {
  // Convert "15:00" -> "3:00 م"
  const [h, m] = hhmm.split(":").map(Number);
  const period = h < 12 ? "ص" : "م";
  let h12 = h % 12;
  if (h12 === 0) h12 = 12;
  return `${h12}:${String(m).padStart(2, "0")} ${period}`;
}

export function formatDateLabel(d: Date): { weekday: string; day: string; month: string } {
  return {
    weekday: new Intl.DateTimeFormat("ar-EG", { weekday: "short" }).format(d),
    day: String(d.getDate()),
    month: new Intl.DateTimeFormat("ar-EG", { month: "short" }).format(d),
  };
}

export function formatFullDate(d: Date): string {
  return new Intl.DateTimeFormat("ar-EG", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(d);
}
