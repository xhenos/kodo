import { base } from "tachiyomi-common/rollup.config";

const production = !process.env.ROLLUP_WATCH;

export default Object.assign(base, {});
