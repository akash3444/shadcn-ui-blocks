import posthog from "posthog-js";

interface AnalyticsEvents {
  // Component section
  "component:code_dialog_opened": {
    component_name: string;
    component_type: string;
  };
  "component:code_copied": {
    component_name: string;
    component_type: string;
    source: "dialog" | "inline";
  };
  "component:install_command_copied": {
    component_name: string;
    component_type: string;
    package_manager: string;
  };
  // Block section
  "block:tab_changed": {
    block_id: string;
    tab: "preview" | "code";
  };
  "block:install_command_copied": {
    block_id: string;
    package_manager: string;
  };
  "block:code_copied": {
    block_id: string;
    file_name: string;
  };
  "block:preview_open_fullscreen": { block_id: string };
  "block:v0_opened": { block_id: string };
  "block:preview_screen_size": { block_id: string; size: string };
  "block:preview_theme_toggled": { block_id: string; theme: string };
  "block:preview_color_theme_changed": {
    block_id: string;
    color_theme: string;
  };
  "block:package_manager_change": { package_manager: string };
  // Discovery
  "blocks:search": { query_length: number };
  "blocks:search_no_results": { query_length: number };
  "blocks:category_filter": { category: string };
  "blocks:load_more": { scope: string; visible_count: number };
  // Marketing / navigation
  "marketing:hero_cta_click": { cta: string };
}

export function capture<T extends keyof AnalyticsEvents>(
  event: T,
  properties?: AnalyticsEvents[T]
): void {
  posthog.capture(event, properties);
}
