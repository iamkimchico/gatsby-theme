export default {
  "Content": {
    "page_title": {
      "type": "StructuredText",
      "config": {
        "single": "heading1",
        "label": "Page Title",
        "placeholder": "Insert page title"
      }
    },
    "page_description": {
      "type": "Text",
      "config": {
        "label": "Page Description",
        "placeholder": "Insert short description of page"
      }
    },
    "show_page_title": {
      "type": "Boolean",
      "config": {
        "placeholder_false": "No",
        "placeholder_true": "Yes",
        "default_value": false,
        "label": "Show Page Title"
      }
    },
    "show_page_description": {
      "type": "Boolean",
      "config": {
        "placeholder_false": "No",
        "placeholder_true": "Yes",
        "default_value": false,
        "label": "Show Page Description"
      }
    }
  },
  "Navigation": {
    "uid": {
      "type": "UID",
      "config": {
        "label": "Page ID",
        "placeholder": "Insert unique ID for page"
      }
    },
    "slug": {
      "type": "Text",
      "config": {
        "label": "Slug",
        "placeholder": "Insert URL for page"
      }
    }
  },
  "SEO": {
    "meta_title": {
      "type": "Text",
      "config": {
        "label": "Meta Title",
        "placeholder": "Insert SEO friendly page title"
      }
    },
    "meta_description": {
      "type": "Text",
      "config": {
        "label": "Meta Description",
        "placeholder": "Insert SEO friendly page description"
      }
    }
  }
}