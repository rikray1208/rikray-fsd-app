import webpack, { RuleSetRule } from 'webpack';
import path from "path";
import { createCssLoader } from "../webpack/rules/cssLoader";

export const storybookWebpack = (config: webpack.Configuration): webpack.Configuration => {
    const pathSrc = path.resolve(__dirname, '..', '..', 'src');

    config.resolve.modules = [pathSrc, 'node_modules'];
    config.resolve.extensions.push('.tsx', '.ts', '.js', '.css', '.scss');
    config.resolve.alias = { '@': pathSrc };


    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module.rules.push(createCssLoader(true));

    return config
}