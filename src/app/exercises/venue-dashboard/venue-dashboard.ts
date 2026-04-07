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
  template: `
    <h1>Venue Dashboard</h1>

    <ul class="venue-list">
      @for (entry of venues; track entry.venue) {
        <li>
          <strong>{{ entry.venue }}</strong>
          <ul>
            @for (camera of entry.cameras; track camera.id) {
              <li>
                <img
                  src="https://picsum.photos/seed/{{ camera.id }}/120/80"
                  alt="{{ camera.name }}"
                  width="120"
                  height="80"
                />
                {{ camera.name }}
              </li>
            }
          </ul>
        </li>
      }
    </ul>
  `,
  styles: `
    :host {
      display: block;
      padding: 24px;
      font-family: sans-serif;
    }

    h1 {
      margin-bottom: 16px;
    }

    .venue-list {
      list-style: none;
      padding: 0;
    }

    .venue-list > li {
      margin-bottom: 12px;
    }

    .venue-list ul {
      margin: 4px 0 0 16px;
      padding: 0;
      list-style: none;
    }

    .venue-list ul li {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 4px;
    }

    img {
      border-radius: 4px;
    }
  `,
})
export class VenueDashboard {
  protected readonly venues: GroupedVenue[] = groupCamerasByVenue(
    venuesData,
    camerasData
  );
}
