# Button Color Reference Guide

All button fonts have been optimized for maximum visibility and contrast.

---

## Hero Section Buttons (Dark Green Background)

### "Find Resources" Button (Primary)
- **Background:** Gold (#d4af37)
- **Text Color:** Near Black (#212529)
- **Font Weight:** 700 (Bold)
- **Border:** Gold
- **Hover:** Darker Gold background (#b8941f)

### "Recovery Manual" Button (Secondary)
- **Background:** Transparent
- **Text Color:** White (#ffffff)
- **Font Weight:** 700 (Bold)
- **Border:** White (2px)
- **Hover:** White background, Dark Green text

✅ **High Contrast:** Gold & White stand out perfectly on dark green

---

## General Page Buttons (Light Backgrounds)

### Primary Buttons
- **Background:** Military Green (#1a4d2e)
- **Text Color:** White (#ffffff)
- **Font Weight:** 600 (Semi-Bold)
- **Border:** Military Green
- **Hover:** Darker Green (#0f2819)

### Secondary Buttons
- **Background:** Transparent
- **Text Color:** Military Green (#1a4d2e)
- **Font Weight:** 600 (Semi-Bold)
- **Border:** Military Green (2px)
- **Hover:** Green background, White text

✅ **High Contrast:** Green & White for excellent readability

---

## Manual Section Buttons (Dark Green Background)

### "Download Complete Manual" Button
- **Background:** Gold (#d4af37)
- **Text Color:** Near Black (#212529)
- **Font Weight:** 700 (Bold)
- **Border:** Gold
- **Hover:** Darker Gold (#b8941f)

### "Read Online" Button
- **Background:** Transparent
- **Text Color:** White (#ffffff)
- **Font Weight:** 700 (Bold)
- **Border:** White (2px)
- **Hover:** White background, Dark Green text

✅ **High Contrast:** Matches hero section for consistency

---

## Crisis Resources Buttons

### Veterans Crisis Line Links
- **Color:** Crisis Red (#c41e3a)
- **Font Weight:** 700 (Bold)
- **Underlined on hover**

### Emergency Phone Numbers
- **Color:** Primary Green (#1a4d2e)
- **Font Weight:** 600
- **Clickable/Tappable on mobile**

✅ **High Visibility:** Red for urgent crisis resources

---

## Color Palette Reference

```css
/* Primary Colors */
--primary-color: #1a4d2e       /* Military Green */
--primary-dark: #0f2819        /* Darker Green */
--primary-light: #2d6a3e       /* Lighter Green */

/* Accent Colors */
--accent-color: #d4af37        /* Gold */
--accent-dark: #b8941f         /* Darker Gold */

/* Alert Colors */
--crisis-red: #c41e3a          /* Emergency Red */
--crisis-red-dark: #9d1730     /* Darker Red */

/* Neutral Colors */
--white: #ffffff
--off-white: #f8f9fa
--light-gray: #e9ecef
--gray: #6c757d
--dark-gray: #343a40
--near-black: #212529
```

---

## Accessibility Standards Met

✅ **WCAG 2.1 AA Compliant**
- All text has minimum 4.5:1 contrast ratio
- Button text has 7:1+ contrast ratio
- Large text (18pt+) meets 3:1 minimum

✅ **Hover States**
- All buttons have clear hover effects
- Color changes + shadow effects
- Subtle transform for visual feedback

✅ **Focus States**
- 3px gold outline on keyboard focus
- 2px offset for clear visibility
- Works with screen readers

✅ **Mobile Friendly**
- Touch target minimum 44x44px
- High contrast for outdoor viewing
- Large, bold text for readability

---

## Button States Summary

| Button Type | Normal | Hover | Focus |
|------------|--------|-------|-------|
| Hero Primary | Gold bg, Black text | Darker gold bg | Gold outline |
| Hero Secondary | Transparent, White text | White bg, Green text | Gold outline |
| Page Primary | Green bg, White text | Dark green bg | Gold outline |
| Page Secondary | Transparent, Green text | Green bg, White text | Gold outline |
| Manual Primary | Gold bg, Black text | Darker gold bg | Gold outline |
| Manual Secondary | Transparent, White text | White bg, Green text | Gold outline |

---

## Testing Checklist

✅ All button text clearly visible
✅ High contrast on all backgrounds
✅ Readable in bright sunlight (mobile)
✅ Readable in low light
✅ Color blind friendly (not relying on color alone)
✅ Screen reader compatible
✅ Keyboard navigable
✅ Touch-friendly tap targets

---

## Notes

- Gold buttons used on dark backgrounds for maximum visibility
- White text used for hero section for military/professional look
- Bold font weight (700) on critical action buttons
- All fonts use system fallbacks for fast loading
- Upper case for button text emphasizes action

---

**Last Updated:** December 10, 2025
**Status:** All buttons optimized and deployed