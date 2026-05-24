export type CategoryColor =
  | "primary"
  | "secondary"
  | "pink"
  | "yellow"
  | "blue"
  | "orange"
  | "gray"
  | "purple"
  | "neutral"

export const colorClasses: Record<CategoryColor, string> = {
  neutral: "bg-white-brand hover:bg-secondary/10",
  primary: "bg-primary/20 text-primary hover:bg-primary/10",
  secondary: "bg-secondary/20 text-secondary hover:bg-secondary/10",
  yellow: "bg-yellow-brand/20 text-yellow-brand hover:bg-yellow-brand/10",
  blue: "bg-blue-brand/20 text-blue-brand hover:bg-blue-brand/10",
  orange: "bg-orange-brand/20 text-orange-brand hover:bg-orange-brand/10",
  pink: "bg-pink-brand/20 text-pink-brand hover:bg-pink-brand/10",
  purple: "bg-purple-brand/20 text-purple-brand hover:bg-purple-brand/10",
  gray: "bg-gray-400/20 text-gray-400 hover:bg-gray-400/10",
};


export const colorAndHoverClasses: Record<CategoryColor, string> = {
  neutral: "bg-gray-100 bg-gray-100/70",
  primary: "bg-primary hover:bg-primary/70",
  secondary: "bg-secondary hover:bg-secondary/70",
  yellow: "bg-yellow-brand hover:bg-yellow-brand/70",
  blue: "bg-blue-brand hover:bg-blue-brand/70",
  orange: "bg-orange-brand hover:bg-orange-brand/70",
  pink: "bg-pink-brand hover:bg-pink-brand/70",
  purple: "bg-purple-brand hover:bg-purple-brand/70",
  gray: "bg-gray-500 hover:bg-gray-400",
};