export function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 123)) + min
  }