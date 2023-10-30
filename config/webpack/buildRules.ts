import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export const buildRules = (options: BuildOptions): webpack.RuleSetRule[] => {
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgRule = {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    };

    const scssRule: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: /.module./,
                        localIdentName: options.isDev
                            ? '[name]__[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };

    const tsRule: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [fileLoader, svgRule, tsRule, scssRule];
};
