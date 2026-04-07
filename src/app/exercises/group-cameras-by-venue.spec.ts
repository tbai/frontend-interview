import {
  groupCamerasByVenue,
  Venue,
  Camera,
} from './group-cameras-by-venue';

describe('groupCamerasByVenue', () => {
  it('should group cameras under their respective venues', () => {
    const venues: Venue[] = [
      { name: 'Stadium', id: 1 },
      { name: 'Arena', id: 2 },
    ];
    const cameras: Camera[] = [
      { name: 'Cam A', id: 101, venueId: 1 },
      { name: 'Cam B', id: 102, venueId: 1 },
      { name: 'Cam C', id: 103, venueId: 2 },
    ];

    expect(groupCamerasByVenue(venues, cameras)).toEqual([
      {
        venue: 'Stadium',
        cameras: [
          { name: 'Cam A', id: 101 },
          { name: 'Cam B', id: 102 },
        ],
      },
      {
        venue: 'Arena',
        cameras: [{ name: 'Cam C', id: 103 }],
      },
    ]);
  });

  it('should return an empty cameras array for venues with no cameras', () => {
    const venues: Venue[] = [
      { name: 'Stadium', id: 1 },
      { name: 'Arena', id: 2 },
    ];
    const cameras: Camera[] = [
      { name: 'Cam A', id: 101, venueId: 1 },
    ];

    const result = groupCamerasByVenue(venues, cameras);

    expect(result).toEqual([
      {
        venue: 'Stadium',
        cameras: [{ name: 'Cam A', id: 101 }],
      },
      {
        venue: 'Arena',
        cameras: [],
      },
    ]);
  });

  it('should ignore cameras whose venueId does not match any venue', () => {
    const venues: Venue[] = [{ name: 'Stadium', id: 1 }];
    const cameras: Camera[] = [
      { name: 'Cam A', id: 101, venueId: 1 },
      { name: 'Cam X', id: 999, venueId: 42 },
    ];

    expect(groupCamerasByVenue(venues, cameras)).toEqual([
      {
        venue: 'Stadium',
        cameras: [{ name: 'Cam A', id: 101 }],
      },
    ]);
  });

  it('should return an empty array when given no venues', () => {
    const cameras: Camera[] = [
      { name: 'Cam A', id: 101, venueId: 1 },
    ];

    expect(groupCamerasByVenue([], cameras)).toEqual([]);
  });

  it('should handle empty cameras array', () => {
    const venues: Venue[] = [
      { name: 'Stadium', id: 1 },
      { name: 'Arena', id: 2 },
    ];

    expect(groupCamerasByVenue(venues, [])).toEqual([
      { venue: 'Stadium', cameras: [] },
      { venue: 'Arena', cameras: [] },
    ]);
  });

  it('should preserve the order of venues from the input', () => {
    const venues: Venue[] = [
      { name: 'Zeta Hall', id: 3 },
      { name: 'Alpha Center', id: 1 },
      { name: 'Beta Dome', id: 2 },
    ];
    const cameras: Camera[] = [
      { name: 'Cam 1', id: 201, venueId: 2 },
      { name: 'Cam 2', id: 202, venueId: 3 },
      { name: 'Cam 3', id: 203, venueId: 1 },
    ];

    const result = groupCamerasByVenue(venues, cameras);

    expect(result.map((r) => r.venue)).toEqual([
      'Zeta Hall',
      'Alpha Center',
      'Beta Dome',
    ]);
  });
});
