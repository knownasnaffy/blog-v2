# Journey Feature

The Journey section is a timeline-based feature for documenting career milestones, transitions, and learnings. It's similar to the Archives page but designed for personal/professional journey entries rather than blog posts.

## Key Differences from Posts

| Feature | Posts | Journey |
|---------|-------|---------|
| **Tags** | Yes (`tags` array) | No (uses `skills` instead) |
| **Featured** | Yes | No |
| **Draft** | Yes | No |
| **Type** | N/A | Required: `milestone`, `transition`, or `learning` |
| **Display** | Links to individual pages | Accordion (inline expansion) |
| **Skills** | No | Yes (`skills` array) |

## Content Structure

Journey entries are stored in `src/data/journey/` as `.md` or `.mdx` files.

### Frontmatter Schema

```yaml
---
title: "Entry title"                    # Required
pubDatetime: 2024-01-15T10:00:00Z      # Required (ISO 8601)
description: "Short description"        # Required
skills: ["HTML", "CSS", "JavaScript"]  # Required (can be empty array)
type: "milestone"                       # Required: milestone | transition | learning
timezone: "America/Guatemala"           # Optional (overrides SITE.timezone)
---
```

### Entry Types

- **milestone**: Significant achievements or completed projects
- **transition**: Career changes, role shifts, or major pivots
- **learning**: New skills acquired or educational experiences

## Configuration

Toggle the journey section in `src/config.ts`:

```ts
export const SITE = {
  // ...
  showJourney: true,  // Set to false to hide /journey and nav link
  // ...
};
```

## UI Features

- **Timeline Layout**: Vertical timeline with year markers and grouped entries
- **Accordion Interaction**: Click to expand/collapse entry content inline
- **Aurora Effects**: Mouse-follow glow effects on cards (consistent with site theme)
- **Type Badges**: Color-coded badges for milestone (green), transition (orange), learning (blue)
- **Skills Tags**: Display relevant skills for each entry
- **Responsive**: Mobile-optimized with adjusted spacing and dot sizes

## Creating Entries

1. Create a new `.md` file in `src/data/journey/`
2. Add required frontmatter (see schema above)
3. Write the body content in Markdown
4. Entries are automatically sorted by date (newest first)
5. Grouped by year in the timeline view

## Example Entry

```markdown
---
title: "Started Learning Web Development"
pubDatetime: 2024-01-15T10:00:00Z
description: "Began my journey into web development with HTML, CSS, and JavaScript fundamentals"
skills: ["HTML", "CSS", "JavaScript"]
type: "learning"
---

This was the beginning of my web development journey...

Key learnings:
- Semantic HTML structure
- CSS Flexbox and Grid
- DOM manipulation
```

## Technical Implementation

- **Collection**: Defined in `src/content.config.ts` as `journey` collection
- **Page**: `/src/pages/journey/index.astro`
- **Component**: `/src/components/JourneyCard.astro` (handles rendering and content)
- **Utility**: Uses `getPostsByGroupCondition` (made generic to support both blog and journey)
- **Icon**: Route/path icon (`IconJourney.svg`)

## Navigation

Journey appears in:
- Desktop navigation (icon + text on hover)
- Mobile menu (full text)
- Controlled by `SITE.showJourney` config option
