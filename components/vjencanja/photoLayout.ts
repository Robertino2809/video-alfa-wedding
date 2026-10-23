// Mjere rasporeda fotografija u priči. Članak je max-w-5xl (1024px) s px-6,
// pa je najveća širina sadržaja 976px. Razmak između fotki je gap-2 (8px).
export const CONTENT_WIDTH = 976;
export const GAP = 8;

/** Širina sadržaja ispod md (768px) – tada su fotke uvijek jedna ispod druge. */
export const MD_CONTENT_WIDTH = 768 - 48;

/** Ciljana visina reda u <Galerija> na desktopu. */
export const ROW_HEIGHT = 400;

/** Ispod ove visine dvije fotke u <Par> idu jedna ispod druge. */
export const PAIR_MIN_HEIGHT = 300;

export type Ratio = number;

/** Visina reda kada fotke s danim omjerima ispune širinu `width`. */
export function fitHeight(ratios: Ratio[], width = CONTENT_WIDTH) {
  const sum = ratios.reduce((a, b) => a + b, 0);
  return (width - GAP * (ratios.length - 1)) / sum;
}

export type GalleryRow = {
  /** Indeksi fotki u ovom redu. */
  items: number[];
  /**
   * Za zadnji red s premalo fotki: najveća širina reda (u % širine sadržaja),
   * da se fotke ne razvuku preko cijele širine.
   */
  maxWidth?: number;
};

/**
 * "Justified rows" raspored: dijeli fotke u redove tako da visina svakog reda
 * bude što bliža ROW_HEIGHT (dinamičko programiranje, kao Flickr/Google Photos).
 * Unutar reda svaka fotka dobiva širinu prema svom omjeru, pa nema rezanja.
 */
export function justifyRows(ratios: Ratio[]): GalleryRow[] {
  const n = ratios.length;
  const rowCost = (from: number, to: number) => {
    const h = fitHeight(ratios.slice(from, to));
    if (to === n && h > ROW_HEIGHT) {
      // Zadnji red se ne razvlači – prikazuje se na ciljanoj visini.
      // Blaga kazna da ne ostane npr. jedna fotka sama u zadnjem redu.
      return ((h - ROW_HEIGHT) * 0.5) ** 2;
    }
    return (h - ROW_HEIGHT) ** 2;
  };

  // best[i] = najmanji trošak za prvih i fotki
  const best = new Array<number>(n + 1).fill(Infinity);
  const prev = new Array<number>(n + 1).fill(0);
  best[0] = 0;
  for (let to = 1; to <= n; to++) {
    for (let from = 0; from < to; from++) {
      const cost = best[from] + rowCost(from, to);
      if (cost < best[to]) {
        best[to] = cost;
        prev[to] = from;
      }
    }
  }

  const rows: GalleryRow[] = [];
  for (let to = n; to > 0; to = prev[to]) {
    const from = prev[to];
    const items = Array.from({ length: to - from }, (_, i) => from + i);
    const row: GalleryRow = { items };
    const rowRatios = items.map((i) => ratios[i]);
    if (to === n && fitHeight(rowRatios) > ROW_HEIGHT) {
      const sum = rowRatios.reduce((a, b) => a + b, 0);
      const width = sum * ROW_HEIGHT + GAP * (items.length - 1);
      row.maxWidth = (width / CONTENT_WIDTH) * 100;
    }
    rows.unshift(row);
  }
  return rows;
}
