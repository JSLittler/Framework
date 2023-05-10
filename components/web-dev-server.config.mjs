import cors from '@koa/cors';

export default {
    open: true,
    rootDir: './dist',
    port: 4000,
    watch: false,
    clearTerminalOnReload: false,
    middleware: [cors()],
};