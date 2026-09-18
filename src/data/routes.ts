export type Route = [from: string, to: string, carriers: string];

export const ROUTES: Record<"air" | "sea", Route[]> = {
  air: [
    ["Lyon", "Marrakech", "Royal Air Maroc · Transavia · Air Arabia"],
    ["Lyon", "Casablanca", "Royal Air Maroc · Transavia"],
    ["Lyon", "Fès", "Royal Air Maroc · Air Arabia"],
    ["Lyon", "Agadir", "Royal Air Maroc · Transavia"],
    ["Lyon", "Tanger", "Royal Air Maroc · Air Arabia"],
    ["Lyon", "Oujda", "Royal Air Maroc · Air Arabia"],
    ["Lyon", "Oran", "Air Algérie · Transavia"],
    ["Lyon", "Tlemcen", "Air Algérie"],
    ["Lyon", "Alger", "Air Algérie · Transavia"],
    ["Lyon", "Béjaïa", "Air Algérie"],
    ["Lyon", "Biskra", "Air Algérie"],
    ["Lyon", "Batna", "Air Algérie"],
    ["Lyon", "Annaba", "Air Algérie"],
    ["Lyon", "Constantine", "Air Algérie · Transavia"],
    ["Lyon", "Sétif", "Air Algérie · Transavia"],
    ["Lyon", "Tunis", "Tunisair · Nouvelair"],
    ["Lyon", "Monastir", "Nouvelair · Tunisair"],
    ["Lyon", "Djerba", "Nouvelair · Tunisair"],
  ],
  sea: [
    ["Sète", "Tanger", "GNV"],
    ["Sète", "Nador", "GNV"],
    ["Barcelone", "Tanger", "GNV · Balearia"],
    ["Barcelone", "Nador", "GNV"],
    ["Almería", "Melilla", "Balearia"],
    ["Algésiras", "Tanger", "Balearia"],
    ["Algésiras", "Nador", "Balearia"],
    ["Marseille", "Alger", "Corsica Linea"],
    ["Marseille", "Béjaïa", "Corsica Linea"],
    ["Sète", "Alger", "Nous consulter"],
    ["Sète", "Béjaïa", "Nous consulter"],
    ["Sète", "Skikda", "Nous consulter"],
    ["Barcelone", "Alger", "Nous consulter"],
    ["Barcelone", "Oran", "Nous consulter"],
    ["Valence", "Oran", "Nous consulter"],
    ["Valence", "Mostaganem", "Nous consulter"],
    ["Almería", "Oran", "Nous consulter"],
    ["Almería", "Ghazaouet", "Nous consulter"],
    ["Gênes", "Tunis", "GNV"],
    ["Marseille", "Tunis", "CTN · Corsica Linea"],
  ],
};

export const PAYS: Record<string, string> = {
  alger: "Algérie",
  oran: "Algérie",
  constantine: "Algérie",
  annaba: "Algérie",
  setif: "Algérie",
  bejaia: "Algérie",
  batna: "Algérie",
  biskra: "Algérie",
  tlemcen: "Algérie",
  skikda: "Algérie",
  ghazaouet: "Algérie",
  mostaganem: "Algérie",
  casablanca: "Maroc",
  marrakech: "Maroc",
  tanger: "Maroc",
  agadir: "Maroc",
  nador: "Maroc",
  fes: "Maroc",
  oujda: "Maroc",
  melilla: "Maroc",
  tunis: "Tunisie",
  monastir: "Tunisie",
  djerba: "Tunisie",
  sfax: "Tunisie",
};

export function norm(s: string): string {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}
