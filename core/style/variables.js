export const ASSERTIVE = "#d7b56b"; // 主题色 (收钱吧黄色)
export const ENERGIZED = "#c2b38c"; // NavBar文字颜色 (收钱吧黄色)
export const DARK = "#222534"; // NavBar背景色 (黑色)
export const BALANCED = "#e5e6ea"; // TabBar背景色 (浅灰)
export const CALM = "#9d9caa"; // 字体颜色/TabBar字体颜色 (灰色)
export const POSITIVE = "#cea048"; // 激活状态 (收钱吧黄色)
export const NEGATIVE = "#ef6c38"; // 警告/错误提示 (橘红色)
export const LIGHT = "#edecea"; // 内容区背景色 (白色)
export const ROYAL = "#2a2a34"; // 内容区字体颜色 (黑/深蓝/紫黑)

export const BASE_BACKGROUND_COLOR = LIGHT;
export const BASE_COLOR = ROYAL;

export const BUTTON_HEIGHT = calc(3.20)
export const BUTTON_BORDER_RADIUS = calc(0.30);
export const BUTTON_BORDER_WIDTH = calc(0.10);
export const BUTTON_LEFT_RIGHT_PADDING = calc(1.60);
export const BUTTON_LEFT_RIGHT_MARGING = calc(0.80);
export const BUTTON_TOP_BOTTOM_MARGING = calc(0.60);

export const BUTTON_PRIMARY_BACKGROUND_COLOR = ASSERTIVE;
export const BUTTON_PRIMARY_BACKGROUND_COLOR_ACTIVE = POSITIVE;
export const BUTTON_PRIMARY_COLOR = LIGHT;
export const BUTTON_PRIMARY_BORDER_COLOR = ENERGIZED;

export const BUTTON_DEFAULT_BACKGROUND_COLOR = BALANCED;
export const BUTTON_DEFAULT_BACKGROUND_COLOR_ACTIVE = LIGHT;
export const BUTTON_DEFAULT_COLOR = ROYAL;
export const BUTTON_DEFAULT_BORDER_COLOR = BALANCED;

export const SHADOW_1DP = {height: calc(0.30), width: calc(0.10)};
export const SHADOW_2DP = {height: calc(0.50), width: calc(0.10)};
export const SHADOW_3DP = {height: calc(0.80), width: calc(0.10)};
export const SHADOW_4DP = {height: calc(0.40), width: calc(0.20)};
export const SHADOW_5DP = {height: calc(0.50), width: calc(0.30)};

function calc(multiplier) {
  return multiplier * 10;
}
