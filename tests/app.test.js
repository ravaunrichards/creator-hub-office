import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('public');
test('main page declares the four office tools and responsive viewport', async () => {
  const html = await readFile(path.join(root,'index.html'),'utf8');
  for (const tool of ['Writer','Sheets','Slides','Drive']) assert.match(html,new RegExp(tool));
  assert.match(html,/name="viewport"/);
});
test('application includes local persistence and CSV export workflow', async () => {
  const js = await readFile(path.join(root,'app.js'),'utf8');
  assert.match(js,/localStorage\.setItem/);
  assert.match(js,/text\/csv/);
  assert.match(js,/function evalCell/);
});
test('server includes safe content type and path guard', async () => {
  const js = await readFile('server.js','utf8');
  assert.match(js,/x-content-type-options/);
  assert.match(js,/startsWith\(root/);
});
