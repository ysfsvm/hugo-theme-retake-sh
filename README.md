# retake.sh Theme

This is a customized fork of the [Terminal](https://github.com/panr/hugo-theme-terminal) theme, specifically tailored for **retake.sh**.

## Customizations

### Layouts & Features

#### Journal Layout
A dedicated layout for daily logs or updates, featuring a grouped, collapsible list of entries.
- **Usage:** Set `layout: "journal"` in your content frontmatter.
- **Structure:** Automatically groups content by month/year.
- **Interactive:** Entries are collapsible upon clicking the day header.
- **Styling:** Clean, terminal-like aesthetic with distinct day highlighting.

#### Sticky Table of Contents (TOC)
A redesigned, smart Table of Contents for single posts.
- **Positioning:**
  - **Desktop (>1350px):** Sticky sidebar on the right, floating *outside* the main content area for a distraction-free reading experience.
  - **Mobile/Tablet:** Standard inline TOC at the top of the post.
- **Features:**
  - **Auto-Highlighting:** The active section highlights as you scroll.
  - **Auto-Scroll:** The TOC sidebar automatically scrolls to keep the active link in view.
  - **Clean Look:** Hidden scrollbars, truncated long titles (2 lines), and removed clutter (dashes/backgrounds).

### Homepage
- **Year Grouping:** Posts are automatically grouped by year with a distinctive "Year Box" outline (e.g., `[ 2025 ]`).
- **Compact Styling:** Dense list with `DD/MM/YYYY` date format and aligned tags.
- **Isolation:** CSS is properly namespaced (`home-posts`, `home-date`) to prevent style collisions with other pages.

### Visual Refinements
- **Typography:** Enforced `subpixel-antialiased` for crisper text rendering on Linux/High-DPI screens.
- **Colors:** Tuned `--background` (`#161616`) and `--foreground` (`#f0f0f0`) for a deeper, more neutral terminal look.
- **Code Blocks:** Cleaned up weird background artifacts in TOC code snippets.

## Configuration

### Footer Text
Add the following to your `config.toml` to utilize the custom footer:

```toml
[params]
  copyright = "<span style='color: var(--accent);'>retake</span> :: Hayat kaosla dans etme sanatıdır"
```

### Journal Configuration
No extra config needed, just use the `layout: "journal"` frontmatter.

## Credits

- Original Theme: [Terminal](https://github.com/panr/hugo-theme-terminal) by [panr](https://github.com/panr).
