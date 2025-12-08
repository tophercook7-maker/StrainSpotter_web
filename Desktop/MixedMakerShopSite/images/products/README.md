# Product Images Directory

Add your product photos here!

## Image Guidelines

- **Format**: JPG or PNG
- **Recommended size**: 800x800px to 1200x1200px (square works best)
- **File size**: Keep under 500KB for fast loading
- **Naming**: Use descriptive names like:
  - `keychain-vintage.jpg`
  - `fidget.jpg`
  - `cable-anchors.jpg`
  - `custom-parts.jpg`

## Where Images Are Used

### Homepage (index.html) - "What I Make" Section
Images are displayed in the make cards. Update the `src` attribute in each make-card to point to your image:

```html
<img src="images/products/your-image.jpg" alt="Description" class="make-image" />
```

### Shop Page (shop.html)
Update the `image` property in the products array:

```javascript
{
  id: 'product-id',
  name: 'Product Name',
  image: 'images/products/your-image.jpg',
  // ... other properties
}
```

## Current Image Placeholders

The site is set up to use these image names (add your photos with these names):

- `keychain-vintage.jpg` - Vintage fishing lure keychains
- `fidget.jpg` - 3D printed fidgets
- `cable-anchors.jpg` - Cable anchors & desk organizers
- `custom-parts.jpg` - Custom 3D printed parts

## Tips

- Use good lighting
- Plain or simple backgrounds work best
- Show the product clearly
- Consider multiple angles if helpful
- Images will automatically hide if they don't exist (graceful fallback)
