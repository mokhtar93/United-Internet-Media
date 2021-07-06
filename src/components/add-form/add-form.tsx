import { Component, h, State} from '@stencil/core';
import { store } from '@stencil/redux';

import { addBookmark } from '../../store/actions/data';

@Component({
  tag: 'add-form',
  styleUrl: 'add-form.css',
  shadow: true
})
export class AddForm {


  @State() bookmark = {
    'name': '',
    'link': '',
    'tags': ''
  }


  addBookmark: (...args: any) => any;


  componentWillLoad() {

    store.mapDispatchToProps(this, {
      addBookmark,
    });

  }

  handleSubmit(event) {
    event.preventDefault();
    let tags = this.generateTags(this.bookmark.tags);

    let editedBookmark = {
      "id": Date.now(),
      "name": this.bookmark.name,
      "link": this.bookmark.link,
      "tags": tags
    }
    this.addBookmark(editedBookmark);
  }



  handleChange(event) {
    let src = event.target.name;
    this.bookmark[src] = event.target.value;

    if (event.target.validity.typeMismatch) {
      console.log('this element is not valid')
    }
  }

  generateTags(tags: string) {
    let newTags = tags.trim();
    let tagsArray: string[] = newTags.split(';');
    if (tagsArray[tagsArray.length - 1].length == 0) {
      return tagsArray.slice(0, -1);
    }
    return tagsArray;
  }



  render() {
    return (
      <div class="bookmarksForm--card">
        <h2>Add Bookmarks</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label htmlFor="name" class="bookmarksForm--label">
              NAME:
          </label>
            <input type="text" class="bookmarksForm--input" value={this.bookmark.name} name="name" placeholder="Name" onInput={(e) => this.handleChange(e)} required />

          </div>
          <div>
            <label htmlFor="link" class="bookmarksForm--label">
              LINK:
          </label>
            <input type="url" class="bookmarksForm--input" value={this.bookmark.link} name="link" placeholder="Link" onInput={(e) => this.handleChange(e)} required />
          </div>

          <div>
            <label htmlFor="tags" class="bookmarksForm--label">
              TAGS:
          </label>
            <input type="text" class="bookmarksForm--input" value={this.bookmark.tags} name="tags" placeholder="Tags" onInput={(e) => this.handleChange(e)} required />
          </div>
          <input type="submit" value="Submit" title="submit" class="bookmarksForm--submit" />
        </form>
      </div>

    );
  }
}
