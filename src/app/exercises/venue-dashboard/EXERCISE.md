# Exercise: Venue Dashboard — Grid of Cards

## Starting point

You are given a working component that displays venues and their cameras as a plain `<ul>` list. Run `ng serve` and navigate to `/venue-dashboard` to see it.

Each camera already has a preview image URL using [Lorem Picsum](https://picsum.photos).

## Your task

Refactor the component so the venues are displayed as a **grid of cards** instead of a flat list.

### Requirements

1. **Grid layout**: Display the venue cards in a grid.

2. **Card styling**: Each card should have:
   - Rounded corners, a subtle box shadow, and padding
   - The venue name as a visually distinct header (e.g. background color, bold text)
   - The camera count next to the venue name (e.g. "Stadium 1 (20)")

3. **Camera list**: Inside each card, display the cameras with their preview image and name.

4. **Interaction**: Clicking a card should highlight it (e.g. colored border). Clicking it again should deselect it. Use a **signal** to track the selected venue.
