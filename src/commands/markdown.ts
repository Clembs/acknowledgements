import { createWriteStream } from 'fs';
import { CreditsMap } from '../types';

function writeCreditsMD(filePath: string, credits: CreditsMap) {
  const creditsArray = Array.from(credits.values());

  const header =
    '# Acknowledgments and credits\n\nThese open source libraries, tools, assets are used in this project.\n\nAutogenerated by [acknowledgements](https://github.com/Clembs/acknowledgements).\n';

  const markdown = `${header}
  | Name          | License |
  | ------------- | ------- |
  ${creditsArray
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(({ name, license, url }) => `| [${name}](${url}) | ${license} |`)
    .join('\n')}
  `;

  createWriteStream(filePath, 'utf-8').write(markdown);
}

export default writeCreditsMD;