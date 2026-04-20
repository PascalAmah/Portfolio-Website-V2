/**
 * Image preloader utility for critical images
 * Preloads important images to improve perceived performance
 */

export class ImagePreloader {
  private static cache = new Set<string>();

  /**
   * Preloads an image and caches the result
   */
  static preload(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.cache.has(src)) {
        resolve();
        return;
      }

      const img = new Image();
      
      img.onload = () => {
        this.cache.add(src);
        resolve();
      };
      
      img.onerror = () => {
        reject(new Error(`Failed to preload image: ${src}`));
      };
      
      img.src = src;
    });
  }

  /**
   * Preloads multiple images concurrently
   */
  static preloadMultiple(sources: string[]): Promise<void[]> {
    return Promise.all(sources.map(src => this.preload(src)));
  }

  /**
   * Checks if an image is already cached
   */
  static isCached(src: string): boolean {
    return this.cache.has(src);
  }

  /**
   * Clears the preload cache
   */
  static clearCache(): void {
    this.cache.clear();
  }
}