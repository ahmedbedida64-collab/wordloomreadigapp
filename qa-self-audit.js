import { runQaLoops } from './game-module.js?qa=2';

export async function runBrowserAudit() {
  const [fixturesResponse, schemasResponse] = await Promise.all([
    fetch('./game-fixtures.json', { cache: 'no-store' }),
    fetch('./game-schemas.json', { cache: 'no-store' })
  ]);
  if (!fixturesResponse.ok || !schemasResponse.ok) throw new Error('QA fixtures or schemas could not be loaded');
  const [fixtures, schemas] = await Promise.all([fixturesResponse.json(), schemasResponse.json()]);
  return runQaLoops(fixtures, schemas);
}

if (typeof window !== 'undefined') {
  window.runWordloomBrowserAudit = runBrowserAudit;
  runBrowserAudit().then(results => {
    window.dispatchEvent(new CustomEvent('wordloom-qa-complete', { detail: results }));
  }).catch(error => {
    window.dispatchEvent(new CustomEvent('wordloom-qa-failed', { detail: { message: error.message } }));
  });
}
