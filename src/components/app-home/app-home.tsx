import { Component, State, h } from '@stencil/core';
import { store } from '@stencil/redux';
import { loadData } from '../../store/actions/data';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  @State() bookmarks: any;
  @State() loading: boolean;
  @State() error: any;
  @State() originalBookmarks: any;

  loadData: (...args: any) => any;

  componentWillLoad() {
    store.mapStateToProps(this, state => {
      const { dataReducer: { bookmarks, originalBookmarks, loading, error }, } = state;
      return {
        bookmarks,
        originalBookmarks,
        loading,
        error,
      };
    });

    store.mapDispatchToProps(this, {
      loadData,
    });
    if (localStorage.getItem('state') == undefined) {
      this.loadData();
    }

  }



  handleChange(event) {
    event.preventDefault();
    if (event.target.value.length === 0) {
      this.bookmarks = this.originalBookmarks;
    }
    else {
      this.bookmarks = this.filterTags(this.bookmarks, event.target.value);
    }
  }

  filterTags(bookmarksArray: any[], searchValue) {
    return bookmarksArray.reduce(function (acc, el) {
      let m = el.tags.filter(tag => tag.includes(searchValue));
      if (m.length > 0) {
        acc.push(el)
      }
      return acc;
    }, []);
  }
  render() {

    return [
      <div class="bookmarks">
        <input placeholder="Filter by tag" class="bookmarks--search" onInput={(e) => this.handleChange(e)}></input>
        <div class="bookmarks--container">
          <span class="bookmarks--list">
            <bookamrks-wrapper bookmarks={this.bookmarks}></bookamrks-wrapper></span>
          <span class="bookmarks--form"><add-form></add-form></span>
        </div>
      </div>
    ];
  }
}
