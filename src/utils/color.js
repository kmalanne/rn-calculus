/* eslint-disable */
// Modified from https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
export const shadeColor = (color, percent) => {
  const f = parseInt(color.slice(1), 16);
  const t = percent < 0 ? 0 : 255;
  const p = percent < 0 ? percent * -1 : percent;
  const R = f >> 16;
  const G = (f >> 8) & 0x00ff;
  const B = f & 0x0000ff;
  return `#${(
    0x1000000 +
    (Math.round((t - R) * p) + R) * 0x10000 +
    (Math.round((t - G) * p) + G) * 0x100 +
    (Math.round((t - B) * p) + B)
  )
    .toString(16)
    .slice(1)}`;
};
/* eslint-enable */

export const MAIN_COLOR = '#5127C6';
export const SECONDARY_COLOR = '#FF9F16';
export const TEXT_COLOR = '#F7F4EF';

export default {
  shadeColor,
};
