import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-content-page',
  templateUrl: './content.page.html',
  styleUrl: './content.page.scss',
})
export class ContentPageComponent {
  private readonly route = inject(ActivatedRoute);

  protected get title(): string {
    return this.route.snapshot.data['title'] as string;
  }

  protected get description(): string {
    return this.route.snapshot.data['description'] as string;
  }
}
