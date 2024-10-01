/** @type {import('@vivliostyle/cli').VivliostyleConfigSchema} */
module.exports = {
  title: 'Single HTML publication',
  author: 'spring-raining',
  language: 'en',
  size: 'letter',
  entry: 'manuscript.html',
  output: [
    'draft.pdf',
    'draft', // Exports Web Publication
  ],
};
