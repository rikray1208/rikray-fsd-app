import { BuildOptions } from './types/config';
import type webpack from 'webpack';

import {
    buildDevServer,
    buildPlugins,
    buildResolve,
    buildRules,
} from './index';

export const buildConfig = (options: BuildOptions): webpack.Configuration => {
    const { mode, paths, isDev } = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true,
        },

        resolve: buildResolve(options),
        plugins: buildPlugins(options),
        module: {
            rules: buildRules(options),
        },

        ...(isDev
            ? {
                  devtool: 'inline-source-map',
                  devServer: buildDevServer(options),
              }
            : undefined),
    };
};
