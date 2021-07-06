import { Component, h, Prop } from '@stencil/core';
import { store } from '@stencil/redux';
import {deleteBookmark}  from '../../store/actions/data';
import {BookmarkInterface} from '../../interfaces/bookmark.interface';

@Component({
  tag: 'app-bookmark',
  styleUrl: 'bookmark.css',
  shadow: true,
})
export class Bookmark {
  @Prop() bookmark:BookmarkInterface;


  deleteBookmark: (...args: any) => any;


  componentWillLoad() {
    store.mapDispatchToProps(this, {
      deleteBookmark,
    });
  }

  handleSubmit(id:number) {
    this.deleteBookmark(id);
  }

  render() {
    return (
     <div class="bookmarks--row">
          <div class="bookmarks--box "> <a href={this.bookmark.link}>{this.bookmark.link}</a></div>
          <div class="bookmarks--box ">{this.bookmark.tags.join(', ')}</div>
         <button onClick={() => this.handleSubmit(this.bookmark.id)} class="bookmarks--btn" >Delete</button>
    </div>
    );
  }
}
