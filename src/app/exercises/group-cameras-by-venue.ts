/**
 * Exercise: Group Cameras by Venue
 *
 * You are given two arrays:
 * - A list of venues, each with a `name` and an `id`.
 * - A list of cameras, each with a `name`, an `id`, and a `venueId` that
 *   references the venue it belongs to.
 *
 * Implement the `groupCamerasByVenue` function that returns a new array
 * where each element contains the venue name and its associated cameras.
 *
 * Rules:
 * - Venues with no cameras should still appear in the result with an empty
 *   `cameras` array.
 * - Cameras whose `venueId` does not match any venue should be ignored.
 * - The order of venues in the result should match the input order.
 */

export interface Venue {
  name: string;
  id: number;
}

export interface Camera {
  name: string;
  id: number;
  venueId: number;
}

export interface GroupedVenue {
  venue: string;
  cameras: { name: string; id: number }[];
}

export function groupCamerasByVenue(venues: Venue[], cameras: Camera[]): GroupedVenue[] {
  // TODO: Implement this function
  return [];
}
