// Compare two version strings. Returns a negative number when a is older
// than b, a positive number when a is newer, and 0 when they are equal.
export function compareVersions(a, b) {
  const partsA = a.split('.').map(Number);
  const partsB = b.split('.').map(Number);
  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    const diff = (partsA[i] ?? 0) - (partsB[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

// Return a copy of the releases, newest version first.
export function sortReleases(releases) {
  return [...releases].sort((x, y) => compareVersions(y.version, x.version));
}
