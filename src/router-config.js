import CLICK from './triggers/click.js';
import POPSTATE from './triggers/popstate.js';
import { Router, RouterViewMixin } from './router.js';
import './router-meta.js';
Router.NavigationTrigger = { POPSTATE, CLICK };
export { Router, RouterViewMixin };