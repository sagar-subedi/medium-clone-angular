import {CommonModule} from '@angular/common'
import {Component, EventEmitter, Output} from '@angular/core'

@Component({
  selector: 'mc-feed-toggler',
  templateUrl: './feedToggler.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class FeedTogglerComponent {
  @Output() toggleFieldEvent = new EventEmitter<string>()

  toggleFeed(feed: string) {
    this.toggleFieldEvent.emit(feed)
  }
}
