---
title: introduction to wordpress developement
author: Heera Singh
date: 08-04-2025
---

# Introduction to WordPress Development

The main plugin should have at one field called plugin name here is the example

- **Minimum Fields**

```php title="plugin-slug.php"
/*
 * Plugin Name: YOUR PLUGIN NAME
 */
```

## Header Fields

Available header fields:

- **Plugin Name: (required)** The name of your plugin
- **Plugin URI:** The home page of the plugin This must be unique to your plugin.
- **Description:** A short description about pluign in 140 characters.
- **Version:** The current version number of the plugin, such as 1.0 or 1.0.3.
- **Requires at least:** The lowest WordPress version that the plugin will work on.
- **Requires PHP:** The minimum required PHP version.
- **Author:** The name of the plugin author. Multiple authors may be listed using commas.
- **Author URI:** The author’s website or profile on another website, such as WordPress.org.
- **License:** The short name (slug) of the plugin’s license (e.g. GPLv2). More information about licensing can be found in the WordPress.org guidelines.
- **License URI:** A link to the full text of the license (e.g. https://www.gnu.org/licenses/gpl-2.0.html).
- **Text Domain:** The gettext text domain of the plugin. More information can be found in the Text Domain section of the How to Internationalize your Plugin page.
- **Domain Path:** The domain path lets WordPress know where to find the translations. More information can be found in the Domain Path section of the How to Internationalize your Plugin page.
- **Network:** Whether the plugin can only be activated network-wide. Can only be set to true, and should be left out when not needed.
- **Update URI:** Allows third-party plugins to avoid accidentally being overwritten with an update of a plugin of a similar name from the WordPress.org Plugin Directory. For more info read related dev note.
- **Requires Plugins:** A comma-separated list of WordPress.org-formatted slugs for its dependencies, such as my-plugin (my-plugin/my-plugin.php is not supported). It does not support commas in plugin slugs. For more info read the related dev note.

## Example Plugin Header

```php title="my-basics-plugin.php"
/*
 * Plugin Name:       My Basics Plugin
 * Plugin URI:        https://example.com/plugins/the-basics/
 * Description:       Handle the basics with this plugin.
 * Version:           1.10.3
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Heera Singh
 * Author URI:        https://www.linkedin.com/in/heera9331/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://example.com/my-plugin/
 * Text Domain:       my-basics-plugin
 * Domain Path:       /languages
 * Requires Plugins:  my-plugin, yet-another-plugin
 */
```

## Referenaces

- [Plugin Basics](https://developer.wordpress.org/plugins/plugin-basics/)
- [Header Requirements](https://developer.wordpress.org/plugins/plugin-basics/header-requirements/)
- [WP Debuggin](https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/)
