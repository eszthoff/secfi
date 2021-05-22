import { ExchangeRateStore } from './ExchangeRateStore';
import { TrendStore } from './TrendStore';
import { UIStore } from './UIStore';

// Store definitions
export { ExchangeRateStore, TrendStore, UIStore };

// Store instances
export const exchangeRateStore = new ExchangeRateStore();
export const trendStore = new TrendStore();
export const uiStore = new UIStore();
