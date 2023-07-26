import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import log from 'log-beautify';
import fs from 'fs';
import fse from 'fs-extra';

/** @type esbuild.BuildOptions & { write: false;} */
const configuration = {
  format: 'esm',
  bundle: true,
  sourcemap: true,
  target: ['es6'],
  loader: {
    '.svg': 'text',
    '.png': 'dataurl',
    '.js': 'jsx',
    '.js_commonjs-proxy': 'jsx',
  },
  plugins: [sassPlugin()],
};

const getDateString = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  const hour = `${date.getHours()}`.padStart(2, '0');
  const minute = `${date.getMinutes()}`.padStart(2, '0');
  const second = `${date.getSeconds()}`.padStart(2, '0');
  return `${year}.${month}.${day}_${hour}:${minute}:${second}`;
};

const executeEsBuild = async (extraSettings) => {
  log.success('ESBuild started');
  const timestamp = getDateString();
  log.show('ESB version', esbuild.version);
  log.show();

  const buildResult = await esbuild.build({
    ...configuration,
    ...extraSettings,
  });

  if (buildResult.errors?.length !== 0) {
    const errorLogPath = `./esbuild_error_${timestamp}.log`;

    log.error('ESBuild found errors:');
    buildResult.errors.map((error) => log.show(error));
    fs.writeFileSync(errorLogPath, JSON.stringify(buildResult.errors), {
      flag: 'w',
    });
    log.show(`A log file was created here ${errorLogPath}`);
    log.show();
  }
};

const setupPath = () => {
  try {
    if (fs.existsSync(configuration.outdir)) {
      fs.rmSync(configuration.outdir, { recursive: true, force: true });
    }
  } catch (err) {
    log.error('ESBuild failed');
    log.show(err);
    log.show();
  }
};

const bundleProject = async ({ name, path }) => {
  console.time('Bundle Time');

  setupPath();
  await executeEsBuild({
    entryPoints: [path],
    define: {
      'process.env.NODE_ENV': "'production'",
    },
    outfile: `./dist/${name}.js`,
    minify: true,
  });

  console.timeEnd('Bundle Time');
};

const components = [
    { name: 'header', path: './src/components/header/index.ts' },
    { name: 'main', path: './src/components/main/index.ts' },
    { name: 'footer', path: './src/components/footer/index.ts' },
    { name: 'login-form', path: './src/components/loginForm/index.ts' },
    { name: 'select-game', path: './src/components/selectGame/index.ts' },
    { name: 'dashboard', path: './src/components/dashboard/index.ts'},
    { name: 'view-team', path: './src/components/viewTeam/index.ts'},
    { name: 'view-player', path: './src/components/viewPlayer/index.ts'},
    { name: 'transfers', path: './src/components/transfers/index.ts'},
    { name: 'pick-team', path: './src/components/pickTeam/index.ts'}
];

components.forEach((component) => bundleProject(component).then(() => {
  log.info('ESBuild ended');
}));

try {
  fse.copySync('./src/assets', './dist/assets', { overwrite: true });
  console.log('success!');
} catch (err) {
  console.error(err);
}
