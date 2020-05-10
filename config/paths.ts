import path from 'path';
import fs from 'fs';

// eslint-disable-next-line security/detect-non-literal-fs-filename
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);

const paths: any = {
    dotenv: resolveApp('.env'),
    src: resolveApp('src'),
};

paths.resolveModules = [
    paths.src,
    'node_modules',
];

export default paths;