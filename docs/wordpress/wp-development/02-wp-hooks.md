# Hooks

There are two types of hooks

1. action hook
2. filter hook

## WordPress Load Order (Core Hook Sequence)

Order Hook Name Description
1 muplugins_loaded Fires once all must-use plugins are loaded.
2 plugins_loaded All active plugins are loaded. Use for plugin initialization.
3 after_setup_theme Theme is initialized. Best place to register theme supports.
4 init NOW your hook runs. Register CPTs, taxonomies, shortcodes, handle $\_POST, etc.
5 wp_loaded All core WP is loaded. You can safely use most APIs.
6 template_redirect WP is deciding which template to show. Best place for redirects.
7 wp_head / wp_footer Enqueue frontend stuff or inject content.
8 shutdown Last hook before PHP shuts down.
