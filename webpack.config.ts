import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';

import { buildConfig } from './config/webpack/buildConfig';
import { BuildMode, ConfigEnv } from './config/webpack/types/config';

const config = (env: ConfigEnv): webpack.Configuration => {
    const paths = {
        entry: path.resolve(__dirname, 'src', 'main.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };
    const mode: BuildMode = env.mode || 'development';
    const port = env.port || 3000;

    const isDev = mode == 'development';

    return buildConfig({
        paths: paths,
        mode,
        isDev,
        port,
    });
};

export default config;
