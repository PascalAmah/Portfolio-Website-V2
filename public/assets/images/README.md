# Professional Photo Assets

This directory contains Pascal Amaliri's professional photo in multiple optimized formats.

## Required Files

The following files should be placed in this directory:

1. **pascal-professional.jpg** - Original high-quality JPEG (recommended: 800x800px or larger)
2. **pascal-professional.webp** - WebP optimized version (smaller file size, better compression)
3. **pascal-professional.avif** - AVIF optimized version (next-gen format, best compression)

## Image Specifications

- **Dimensions**: Square aspect ratio (1:1) recommended, minimum 400x400px
- **Quality**: High resolution for crisp display on retina screens
- **Format**: Professional headshot in business attire
- **Background**: Clean, professional background preferred

## Optimization Guidelines

- **JPEG**: Use 85-90% quality for good balance of size and quality
- **WebP**: Use 80-85% quality (WebP is more efficient than JPEG)
- **AVIF**: Use 75-80% quality (AVIF has superior compression)

## File Size Targets

- **JPEG**: < 150KB
- **WebP**: < 100KB  
- **AVIF**: < 80KB

## Tools for Conversion

You can use the following tools to generate optimized formats:

### Online Tools
- [Squoosh.app](https://squoosh.app/) - Google's image optimization tool
- [TinyPNG](https://tinypng.com/) - PNG and JPEG compression

### Command Line Tools
```bash
# Convert to WebP
cwebp -q 80 pascal-professional.jpg -o pascal-professional.webp

# Convert to AVIF (requires libavif)
avifenc --min 0 --max 63 --speed 6 pascal-professional.jpg pascal-professional.avif
```

## Usage

The images are automatically loaded by the `LazyImage` component with format detection:

```typescript
import { professionalPhoto } from '../../utils/imageOptimization';
import { LazyImage } from '../ui/LazyImage';

<LazyImage 
  image={professionalPhoto}
  className="rounded-2xl shadow-lg"
  priority={true}
/>
```