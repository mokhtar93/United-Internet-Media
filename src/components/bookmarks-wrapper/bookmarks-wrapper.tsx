import { Component, h, Prop } from '@stencil/core';
import { BookmarkInterface } from '../../interfaces/bookmark.interface';

@Component({
  tag: 'bookamrks-wrapper',
  styleUrl: 'bookmarks-wrapper.css',
  shadow: true,
})
export class Bookmark {
  @Prop() bookmarks: BookmarkInterface[];
  render() {
    return (
      <div class="bookmarks--wrapper">

        <div class="bookmarks--row">
          <p class="bookmarks--title">Link</p>
          <p class="bookmarks--title"> Tags</p>
        </div>
        {this.bookmarks?.map(bookmark => <app-bookmark bookmark={bookmark}></app-bookmark>)}
      </div>
    );
  }
}
