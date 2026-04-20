# ProfessionalPhoto Component

A modern, responsive React component for displaying professional photos with elegant styling, hover effects, and status indicators.

## Features

- **Responsive Design**: Adapts to different screen sizes with configurable size presets
- **Modern Styling**: Rounded corners, subtle shadows, and smooth transitions
- **Interactive Effects**: Hover animations with grayscale-to-color transitions and scale effects
- **Status Indicator**: Optional "Open to work" badge with animated pulse effect
- **Accessibility**: Proper alt text support and semantic HTML structure
- **Customizable**: Flexible props for different use cases and custom styling

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | **Required.** The image source URL |
| `alt` | `string` | - | **Required.** Alt text for accessibility |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Predefined size configurations |
| `showStatus` | `boolean` | `true` | Whether to show the "Open to work" status badge |
| `className` | `string` | `''` | Additional CSS classes for custom styling |

## Size Configurations

### Small
- **Dimensions**: `w-24 h-32` on mobile, `w-32 h-40` on desktop
- **Border Radius**: `rounded-2xl`
- **Use Case**: Profile pictures, avatars, sidebar displays

### Medium
- **Dimensions**: Full width/height with `min-h-[300px]` on mobile, `min-h-[400px]` on desktop
- **Border Radius**: `rounded-3xl`
- **Use Case**: About sections, portfolio headers, main profile displays

### Large
- **Dimensions**: Full width/height with `min-h-[400px]` on mobile, `min-h-[500px]` on desktop
- **Border Radius**: `rounded-3xl`
- **Use Case**: Hero sections, featured displays, landing pages

## Usage Examples

### Basic Usage
```tsx
import ProfessionalPhoto from './components/ProfessionalPhoto';

<ProfessionalPhoto 
  src="/path/to/professional-photo.jpg"
  alt="Pascal Amaliri - Full-stack Developer"
/>
```

### Different Sizes
```tsx
{/* Small size for sidebar */}
<ProfessionalPhoto 
  src="/photo.jpg"
  alt="Pascal Amaliri"
  size="small"
/>

{/* Medium size for about section */}
<ProfessionalPhoto 
  src="/photo.jpg"
  alt="Pascal Amaliri"
  size="medium"
/>

{/* Large size for hero section */}
<ProfessionalPhoto 
  src="/photo.jpg"
  alt="Pascal Amaliri"
  size="large"
/>
```

### Without Status Badge
```tsx
<ProfessionalPhoto 
  src="/photo.jpg"
  alt="Pascal Amaliri"
  showStatus={false}
/>
```

### Custom Styling
```tsx
<ProfessionalPhoto 
  src="/photo.jpg"
  alt="Pascal Amaliri"
  className="shadow-2xl shadow-blue-500/20 border-2 border-blue-500/30"
/>
```

### In Bento Grid Layout
```tsx
<div className="row-span-2 col-span-1">
  <ProfessionalPhoto 
    src="/photo.jpg"
    alt="Pascal Amaliri - Full-stack Developer"
    size="medium"
    showStatus={true}
  />
</div>
```

## Styling Details

### Hover Effects
- **Image**: Transitions from grayscale to full color
- **Opacity**: Changes from 60% to 100%
- **Scale**: Subtle zoom effect (105%)
- **Border**: Enhances from `border-white/5` to `border-white/10`
- **Status Badge**: Scales up slightly and enhances colors

### Status Badge
- **Background**: Semi-transparent green with backdrop blur
- **Animation**: Pulsing green dot indicator
- **Typography**: Monospace font with uppercase tracking
- **Positioning**: Bottom-left with proper spacing

### Responsive Behavior
- **Mobile First**: Optimized for mobile devices with progressive enhancement
- **Flexible Sizing**: Adapts to container constraints while maintaining aspect ratios
- **Touch Friendly**: Appropriate sizing for touch interactions

## Accessibility

- **Alt Text**: Required prop ensures proper screen reader support
- **Semantic HTML**: Uses proper `img` elements with descriptive attributes
- **Focus States**: Inherits focus styles from parent containers
- **Color Contrast**: Status badge meets WCAG contrast requirements

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **CSS Features**: Uses modern CSS properties (backdrop-filter, CSS Grid)
- **Graceful Degradation**: Fallbacks for older browsers where possible

## Performance Considerations

- **Optimized Images**: Works best with properly sized and optimized images
- **Lazy Loading**: Can be combined with lazy loading solutions
- **Animation Performance**: Uses CSS transforms for smooth animations
- **Bundle Size**: Minimal impact on bundle size (pure CSS + React)

## Integration with Existing Components

The component is designed to integrate seamlessly with:
- **Bento Grid Layouts**: Fits perfectly in grid-based designs
- **AboutSkills Component**: Direct replacement for existing photo cards
- **Hero Sections**: Scalable for prominent displays
- **Sidebar Components**: Compact sizing for navigation areas

## Requirements Satisfied

This component addresses the following requirements:
- **1.1**: Professional photo display in prominent position
- **1.2**: Modern styling with rounded corners and shadow effects
- **1.3**: Subtle interactive feedback on hover
- **1.5**: Responsive sizing for mobile devices

## Future Enhancements

Potential improvements for future versions:
- **Image Optimization**: Integration with next/image or similar solutions
- **Multiple Formats**: WebP/AVIF support with fallbacks
- **Lazy Loading**: Built-in intersection observer
- **Animation Controls**: Reduced motion preference support
- **Theme Variants**: Light/dark theme adaptations