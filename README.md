# retake.sh Theme

This is a customized fork of the [Terminal](https://github.com/panr/hugo-theme-terminal) theme, specifically tailored for **retake.sh**.

## Customizations

### Homepage Layout
- **Year Grouping:** Posts are automatically grouped by year on the homepage.
- **Year Box:** Distinctive, outlined "Year Box" styling (e.g., `[ 2025 ]`).
- **List Style:** Clean, dense post list with `DD/MM/YYYY` date format and right-aligned, clickable tags.
- **Filtering:** Automatically filters to show only content type `posts` on the homepage.

### UI/UX Improvements
- **Width:** Container max-width increased to `1400px` for a wider, modern look.
- **Spacing:** Tighter, more compact list spacing (`padding: 0`, `line-height: 1.35`).
- **Header:**
  - Menu items aligned inline with the logo.
  - "More" menu limit increased to `10` items.
  - Decorative dashed lines removed for a cleaner aesthetic.
- **Footer:**
  - Configurable dynamic footer text via `config.toml`.
- **Typography:** Updated font sizes and colors to match the specific "retake.sh" aesthetic.

### Custom Shortcodes

#### `video`
Embeds an HTML5 video with consistent styling (borders, accent color).
```html
{{< video "https://path/to/video.mp4" >}}
```

#### `blur`
Adds a blur effect to text (spoiler/CTF flags), revealing it on hover/click.
```html
{{< blur "Hidden Flag Content" >}}
```

## Configuration

Add the following to your `config.toml` to utilize the custom footer:

```toml
[params]
  copyright = "<span style='color: var(--accent);'>retake</span> :: Hayat kaosla dans etme sanatıdır"

[markup.highlight]
  noClasses = false # Essential for custom syntax highlighting colors
```

## Credits

- Original Theme: [Terminal](https://github.com/panr/hugo-theme-terminal) by [panr](https://github.com/panr).
