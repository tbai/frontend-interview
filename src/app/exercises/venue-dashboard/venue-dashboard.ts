/**
 * Exercise: Venue Dashboard
 *
 * This component displays venues and their cameras as a plain list.
 * Your task is to refactor it into a grid of cards.
 *
 * See EXERCISE.md for the full requirements.
 */

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { groupCamerasByVenue, GroupedVenue } from '../group-cameras-by-venue';
import venuesData from '../venues.json';
import camerasData from '../cameras.json';

@Component({
  selector: 'app-venue-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './venue-dashboard.html',
  styleUrl: './venue-dashboard.css',
})
export class VenueDashboard {
  protected readonly venues: GroupedVenue[] = groupCamerasByVenue(
    venuesData,
    camerasData
  );
}
