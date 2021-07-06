import { Component, h } from '@stencil/core';
import { store } from '@stencil/redux';
import { configureStore } from '../../store/index';
import {loadState} from '../../store/localstorage';
@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  componentWillLoad() {
    const persistedState = loadState();
    store.setStore(configureStore(persistedState));
  }

  render() {
    return (
      <div>
        <header>
          <h1 class="header--title">Bookmarks</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
