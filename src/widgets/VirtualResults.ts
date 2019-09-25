import { connectHits } from 'instantsearch.js/es/connectors';

const hits = connectHits(({ results }) => {
  if (results && results.queryID) {
    (window as any).lastQueryID = results.queryID;
  }
});

export const virtualResults = hits({});
