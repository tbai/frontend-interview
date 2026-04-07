import {
  groupCamerasByVenue,
  Venue,
  Camera,
} from './group-cameras-by-venue';
import venuesData from './venues.json';
import camerasData from './cameras.json';

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

  describe('with large dataset (500 venues, 10000 cameras)', () => {
    const venues: Venue[] = venuesData;
    const cameras: Camera[] = camerasData;

    it('should return one entry per venue', () => {
      const result = groupCamerasByVenue(venues, cameras);
      expect(result.length).toBe(500);
    });

    it('should distribute all cameras across venues', () => {
      const result = groupCamerasByVenue(venues, cameras);
      const totalCameras = result.reduce((sum, v) => sum + v.cameras.length, 0);
      expect(totalCameras).toBe(10000);
    });

    it('should assign 20 cameras to each venue', () => {
      const result = groupCamerasByVenue(venues, cameras);
      result.forEach((entry) => {
        expect(entry.cameras.length).toBe(20);
      });
    });

    it('should use venue names, not ids', () => {
      const result = groupCamerasByVenue(venues, cameras);
      expect(result[0].venue).toBe('Stadium 1');
      expect(result[499].venue).toBe('Court 500');
    });

    it('should not include venueId in the camera objects', () => {
      const result = groupCamerasByVenue(venues, cameras);
      result.forEach((entry) => {
        entry.cameras.forEach((cam) => {
          expect(cam).not.toHaveProperty('venueId');
        });
      });
    });
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
