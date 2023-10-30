import webpack from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolve = (options: BuildOptions): webpack.ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
        alias: { '@': options.paths.src },
        modules: [options.paths.src, 'node_modules'],
        preferAbsolute: true,
    };
};
